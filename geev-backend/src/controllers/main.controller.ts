import { Application } from 'express';
import Annonce from '../models/annonce.model';

export class AnnoncesController {

  constructor(private app: Application) {
    console.log(Annonce.find());
  }

  public getAnnonces(){
      this.app.get('/annonces', async () => { 
        try{
          return await Annonce.find();
        }catch(err){
          console.log(err.message); 
        }
    });
  }
}