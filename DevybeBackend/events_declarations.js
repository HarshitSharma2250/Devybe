const idlFactory = ({ IDL }) => {
    const EventMode = IDL.Variant({
        'online': IDL.Null,
        'offline': IDL.Null
    });
    
    const EventType = IDL.Variant({
        'paid': IDL.Null,
        'free': IDL.Null
    });

    const Event = IDL.Record({
        'id': IDL.Text,
        'imageUrl': IDL.Text,
        'title': IDL.Text,
        'subtitle': IDL.Text,
        'mode': EventMode,
        'address': IDL.Text,
        'eventType': EventType,
        'eventDate': IDL.Text,
        'startTime': IDL.Text,
        'endTime': IDL.Text
    });

    return IDL.Service({
        'postEvent': IDL.Func(
            [
                IDL.Text,  // imageUrl
                IDL.Text,  // title
                IDL.Text,  // subtitle
                EventMode, // mode
                IDL.Text,  // address
                EventType, // eventType
                IDL.Text,  // eventDate
                IDL.Text,  // startTime
                IDL.Text   // endTime
            ],
            [IDL.Text],
            []
        ),
        'getEvents': IDL.Func(
            [],
            [IDL.Vec(Event)],
            ['query']
        ),
        'register': IDL.Func(
            [IDL.Text, IDL.Text], // name, password
            [IDL.Text],           // response
            []
        )
    });
};

module.exports = { idlFactory };