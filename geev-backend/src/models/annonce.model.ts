import mongoose, { Schema } from 'mongoose';
import * as jsonData from './data.json'


var uri = 'mongodb://127.0.0.1/annonces';
mongoose.connect(uri);
var connection = mongoose.connection;

const annonceSchema: Schema = new Schema({
  _id: { type: String},
  title: { type: String},
  pictures: { type: Array}
});

const Annonce = connection.model('Annonce', annonceSchema)

  const u = new Annonce(jsonData);
  u.save();
  const listAnnonces = Annonce.findOne();
  console.log('listAnnonces')
  console.log(listAnnonces);


connection.on('error', console.error.bind(console, 'MongoDB connection error:')); 
export default mongoose.model('Annonce', annonceSchema);