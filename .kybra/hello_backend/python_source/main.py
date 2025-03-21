# pyright: reportMissingImports=false

from kybra import query
from user import register_user

@query
def greet(name: str) -> str:
    return f"Hello, {name}!"

# register_user is already exposed as @update in user.py
