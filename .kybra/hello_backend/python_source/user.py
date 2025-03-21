# pyright: reportMissingImports=false

from kybra import (
    query, update, Record, Variant, ic, Opt, Principal, Vec, Async, nat64, blob
)
from datetime import datetime
import json
import hmac
import hashlib

# Secret key for HMAC signing (replace with a secure random key in production)
SECRET_KEY = b'super_secret_key'

# User Model
class User(Record):
    first_name: Opt[str]
    last_name: Opt[str]
    telegram_id: str
    avatar: Opt[str]
    role: str
    is_blocked: bool
    blocked_by: Opt[Principal]
    selected_categories: Vec[str]
    selected_events: Vec[str]
    avatar_public_id: Opt[str]

# Storage
users_storage: dict[str, User] = {}

event_end_times: dict[str, str] = {
    "event1": "18:00",
    "event2": "20:00"
}

# Manual HMAC token generation (Replacing JWT)
def generate_hmac_token(user_id: str) -> str:
    message = user_id.encode()
    signature = hmac.new(SECRET_KEY, message, hashlib.sha256).hexdigest()
    token = f"{user_id}.{signature}"
    return token

# register
@update
async def register_user(payload_json: str) -> str:
    try:
        payload = json.loads(payload_json)
        telegram_id = payload.get('telegram_id')
        selected_events = payload.get('selectedEvents', [])

        if not telegram_id:
            return json.dumps({"msg": "telegram_id is required"})

        existing_user = users_storage.get(telegram_id)
        if existing_user:
            if existing_user.is_blocked:
                return json.dumps({"msg": "Your account has been blocked by the admin. You cannot log in."})

            access_token = generate_hmac_token(telegram_id)
            return json.dumps({
                "msg": "User already exists. Login Successful",
                "x_auth_access_token": access_token,
                "x_userid": telegram_id,
                "is_newUser": False
            })

        expired_events = []
        current_time = datetime.now().strftime("%H:%M")

        for event_id in selected_events:
            event_end = event_end_times.get(event_id)
            if event_end:
                event_end_time = datetime.strptime(event_end, "%H:%M")
                current_time_obj = datetime.strptime(current_time, "%H:%M")
                if event_end_time <= current_time_obj:
                    expired_events.append({"id": event_id, "endedAt": event_end})

        if expired_events:
            return json.dumps({
                "success": False,
                "msg": "Some selected events have already ended.",
                "endedEvents": expired_events
            })

        new_user = User(
            first_name=payload.get('first_name'),
            last_name=payload.get('last_name'),
            telegram_id=telegram_id,
            avatar=payload.get('avatar'),
            role=payload.get('role', 'user'),
            is_blocked=False,
            blocked_by=None,
            selected_categories=payload.get('selectedCategories', []),
            selected_events=selected_events,
            avatar_public_id=payload.get('avatar_public_id')
        )

        users_storage[telegram_id] = new_user

        access_token = generate_hmac_token(telegram_id)
        return json.dumps({
            "msg": "Account Created Successfully",
            "x_auth_access_token": access_token,
            "x_userid": telegram_id,
            "is_newUser": True
        })

    except json.JSONDecodeError:
        return json.dumps({
            "success": False,
            "message": "Invalid JSON format"
        })
    except Exception as e:
        return json.dumps({
            "success": False,
            "message": str(e)
        })
