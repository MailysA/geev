import { Application } from 'express';
import { Request, Response } from "express";
import annonceModel from '../models/annonce.model';

export class AnnoncesController {

  constructor(private app: Application) {
    this.getAnnonces()
  }

  public getAnnonces(){
      this.app.get('/annonces', (req: Request, res: Response) => { 
        annonceModel.find({}, (err, annonces) => { 
          console.log(annonces)
          annonces.forEach(annonce => {
            console.log(annonce._id)
          })
          return res.send(annonces)
        }).catch(err => 
          console.log(err.message));
    });
  }
}