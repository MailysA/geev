import { Request, Response } from "express";
import AnnonceModel from './../models/annonce.model'

export class AnnonceService {

  public getAnnonces(req: Request, res: Response) {
    console.log(res)
    return AnnonceModel.find({}, (err, annonces) => { res.json(annonces)}).catch(err => console.log(err.message));
  }

  public getAnnonce(req: Request, res: Response) {
    return res.status(200).send("Welcome to pokeAPI REST by Nya ^^");
  }
}