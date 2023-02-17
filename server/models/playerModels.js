var mongoose = require('mongoose');

var Schema = new mongoose.Schema ({


// const Schema = mongoose.Schema;

// export Schema to mongooseDB

    
    firstName: {
        type: String,
        required: 'Missing firstName',
        trim: true
    },
    lastName: {
        type: String,
        required: 'Missing lastName',
        trim: true
    },
    email: {
        type: String,
        required:  'Missing email',
        trim: true
    },
    phone: {
        type: Number
    },
    iscoach: {
        type: Boolean,
        default: false  
    },
    team: {
        type: String    
    },
    speed: {
        type: Number,
        enum: [1, 2, 3] 
    },
    strength: {
        type: Number,
        enum: [1, 2, 3] 
    },
    endurance: {
        type: Number,
        enum: [1, 2, 3] 
    },
    ability: {
        type: Number,
        enum: [1, 2, 3] 
    },
    techniques: {
        type: Number,
        enum: [1, 2, 3] 
    },
    tactical: {
        type: Number,
        enum: [1, 2, 3] 
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Players", Schema);
