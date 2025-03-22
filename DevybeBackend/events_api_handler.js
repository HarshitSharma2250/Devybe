const { Actor, HttpAgent } = require("@dfinity/agent");
const express = require('express');
const { idlFactory } = require('./events_declarations.js');

const eventsCanisterId = "444tw-3qaaa-aaaac-apeya-cai"; // Your events canister ID

const host = "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io";

const app = express();
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const agent = new HttpAgent({ host });
agent.fetchRootKey().catch(err => {
    console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
    console.error(err);
});

const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId: eventsCanisterId,
});

// Get all events
app.get('/api/events', async (req, res) => {
    try {
        const events = await actor.getEvents();
        const formattedEvents = events.map(event => ({
            id: event.id,
            imageUrl: event.imageUrl,
            title: event.title,
            subtitle: event.subtitle,
            mode: Object.keys(event.mode)[0], // Convert variant to string
            address: event.address,
            eventType: Object.keys(event.eventType)[0], // Convert variant to string
            eventDate: event.eventDate,
            startTime: event.startTime,
            endTime: event.endTime
        }));
        res.json(formattedEvents);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Add new event
app.post('/api/events', async (req, res) => {
    try {
        const {
            imageUrl,
            title,
            subtitle,
            mode,
            address,
            eventType,
            eventDate,
            startTime,
            endTime
        } = req.body;

        // Validate required fields
        if (!imageUrl || !title || !subtitle || !mode || !address || !eventType || !eventDate || !startTime || !endTime) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newEventId = await actor.postEvent(
            imageUrl,
            title,
            subtitle,
            { [mode]: null }, // Convert string to variant
            address,
            { [eventType]: null }, // Convert string to variant
            eventDate,
            startTime,
            endTime
        );

        res.json({ 
            success: true,
            id: newEventId 
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});


app.post('/api/register', async (req, res) => {
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({ error: "Name and password are required" });
        }

        const result = await actor.register(name, password);
        res.json({ message: result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

const port = 3001; // Different port from main API
app.listen(port, () => {
    console.log(`Events API server running at http://localhost:${port}`);
});