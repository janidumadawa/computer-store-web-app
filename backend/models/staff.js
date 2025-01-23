const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    sname:{ type: String, required: true},
    semail:{ type: String, required: true},
    snumber:{ type: Number, required: true},
    sdob:{ type: Date, required: true},
    srole:{ type: String, required: true},
    sdoj:{ type: Date, required: true},
    
});

const Staff = mongoose.model ("Staff", staffSchema);

module.exports = Staff;