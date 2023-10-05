const express = require('express');

const connectDB = require('./config/db');

const cors = require("cors");

// Connect Database
connectDB();

// routes

const bridgeEquips = require('./routes/api/bridge.equip.route.js');
const bridgeManuals = require('./routes/api/bridge.manual.route.js');
const deckEquips = require('./routes/api/deck.equip.route.js');
const deckManuals = require('./routes/api/deck.manual.route.js');
const engineEquips = require('./routes/api/engine.equip.route.js');
const engineManuals = require('./routes/api/engine.manual.route.js');
const galleyEquips = require('./routes/api/galley.equip.route.js');
const galleyManuals = require('./routes/api/galley.manual.route.js');

const app = express();


//connecting to the mongodb database
configDatabase();


app.use(cors({ origin: true, credentials: true }));

// add the middlewares
app.use(express.json({ extended: false }));



app.get('/', (req, res) => res.send('Hello world!'));

// use Routes

app.use('/api/bridge/equipment',bridgeEquips);
app.use('/api/bridge/manuals',bridgeManuals);
app.use('/api/deck/equipment',deckEquips);
app.use('/api/deck/manuals',deckManuals);
app.use('/api/engine/equipment',engineEquips);
app.use('/api/engine/manuals',engineManuals);
app.use('/api/galley/equipment',galleyEquips);
app.use('/api/galley/manuals',galleyManuals);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));