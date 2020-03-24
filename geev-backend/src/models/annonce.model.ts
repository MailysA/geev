import mongoose, { Schema } from 'mongoose';
import * as jsonData from './data.json'

var uri = 'mongodb://127.0.0.1/annonces';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
var connection = mongoose.connection;

const annonceSchema: Schema = new Schema({
  _id: { type: String},
  title: { type: String},
  pictures: { type: Array}
});

const Annonce = connection.model('Annonce', annonceSchema)

async function insertData(){
  const u = new Annonce(jsonData);
  u.save();
}

insertData().catch(err => console.log("erreur lors de l'insertion des données"+err.message))

connection.on('error', console.error.bind(console, 'MongoDB connection error:')); 

export default mongoose.model('Annonce', annonceSchema);