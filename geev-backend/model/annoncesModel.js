import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const AnnonceSchema = new Schema({
    page: {
        type: String,
        required: "What is the note's title?"
    },
    page_total: {
        type: String,
        required: "What is the note?"
    },
    annonce: {
        id: Date,
        title: new Date,
        picture: new Array
    }
});

export default mongoose.model('Annonces', AnnonceSchema);