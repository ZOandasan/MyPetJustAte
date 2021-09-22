const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citationSchema = new Schema ({
    citationName: {
        type: String,
        required: true,
    }
})

const ingredientSchema = new Schema ({
    ingredientName: {
        type: String,
        required: true,
    },
    safeToEat: {
        type: String,
        enum: ['Yes', 'No', 'Depends', 'Unknown'],
        default: 'Unknown',
    },
    images: {
        type: String,
        required: true,
    },
    citations:
        [citationSchema]
    ,
}, {
    timestamps: true
});

module.exports = mongoose.model('ingredientSchema', ingredientSchema);