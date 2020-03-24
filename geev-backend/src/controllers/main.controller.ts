import { Application } from 'express';
import { Request, Response } from "express";
import annonceModel from '../models/annonce.model';

export class AnnoncesController {

  constructor(private app: Application) {
    this.getAnnonces()
  }

  getAnnonces(){
    this.app.get('/annonces', (req: Request, res: Response) => { 
      console.log(res)
      annonceModel.find({}, (err, annonces) => { 
        return res.send(annonces)
      }).catch(err => 
        console.log(err.message));
      });
  }
}