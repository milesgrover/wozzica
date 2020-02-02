const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    console.log('connected, yay!')
});

const annotateSchema = new mongoose.Schema({
    dx: {
        type: Number, required: true
    },
    dy: {
        type: Number, required: true
    },
    uid: { 
        type: String, required: true 
    },
    lx: {
        type: Number, required: true
    },
    ly: {
        type: Number, required: true
    },
    ltext: {
        type: String, required: true
    },
    lw: {
        type: Number, required: true
    },
    lh: {
        type: Number, required: true
    }
});
const thingSchema = new mongoose.Schema({
    id: { 
        type: String, required: true 
    },
    tags: {
        type: [String], required: true
    },
    image: { 
        type: String, required: true
     },
    name: { 
        type: String, required: true 
    },
    annotations: [ annotateSchema ]
});

const Thing = new mongoose.model('Thing', thingSchema);
const Annotation = new mongoose.model('Annotation', annotateSchema);

module.exports = { thingSchema, Thing, annotateSchema, Annotation }