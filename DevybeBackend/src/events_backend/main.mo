import Array "mo:base/Array";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Int "mo:base/Int";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";

actor {
    // Define event mode type
    public type EventMode = {
        #online;
        #offline;
    };

    // Define event type
    public type EventType = {
        #paid;
        #free;
    };

    // Define event structure
    private type Event = {
        id: Text;
        imageUrl: Text;
        title: Text;
        subtitle: Text;
        mode: EventMode;
        address: Text;
        eventType: EventType;
        eventDate: Text;  // Format: DD-MM-YYYY
        startTime: Text;  // Format: HH:MM (24-hour)
        endTime: Text;    // Format: HH:MM (24-hour)
    };

    // User storage
    private stable var userEntriesStable : [(Text, Text)] = [];
    private let users = HashMap.HashMap<Text, Text>(0, Text.equal, Text.hash);

    // Initialize users from stable storage
    private func initUsers() {
        for ((n, p) in userEntriesStable.vals()) {
            users.put(n, p);
        };
    };
    initUsers();

    // Empty storage for events
    private stable var events : [Event] = [];

    // Function to register a user
    public shared(msg) func register(name: Text, password: Text) : async Text {
        
        if (users.get(name) != null) {
            return "Logged in successfully!";
        };
        users.put(name, password);
        userEntriesStable := Iter.toArray(users.entries());
        name // Return the name on successful registration
    };

    // Function to add a new event
    public shared(msg) func postEvent(
        imageUrl: Text,
        title: Text,
        subtitle: Text,
        mode: EventMode,
        address: Text,
        eventType: EventType,
        eventDate: Text,
        startTime: Text,
        endTime: Text
    ) : async Text {
        let newId = Int.toText(Array.size(events) + 1);
        let newEvent : Event = {
            id = newId;
            imageUrl = imageUrl;
            title = title;
            subtitle = subtitle;
            mode = mode;
            address = address;
            eventType = eventType;
            eventDate = eventDate;
            startTime = startTime;
            endTime = endTime;
        };

        events := Array.append(events, [newEvent]);
        newId
    };

    // Function to get all events
    public query func getEvents() : async [{
        id: Text;
        imageUrl: Text;
        title: Text;
        subtitle: Text;
        mode: EventMode;
        address: Text;
        eventType: EventType;
        eventDate: Text;
        startTime: Text;
        endTime: Text;
    }] {
        events
    };

    // Pre-upgrade hook to save user data
    system func preupgrade() {
        userEntriesStable := Iter.toArray(users.entries());
    };

    // Post-upgrade hook to restore user data
    system func postupgrade() {
        initUsers();
    };
};