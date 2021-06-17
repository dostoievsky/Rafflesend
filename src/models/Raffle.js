const mongoose = require('mongoose');

const RaffleSchema = new mongoose.Schema({
    raffle: {
        type: [Boolean],
        default: [false],
    }
})

module.exports = mongoose.model("Raffle", RaffleSchema);