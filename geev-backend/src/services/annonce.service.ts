import { Request, Response } from "express";
import AnnonceModel from './../models/annonce.model'

export class AnnonceService {

  public getAnnonces(req: Request, res: Response) {
    console.log(res)
    return  AnnonceModel.findOne();
  }

  public getAnnonce(req: Request, res: Response) {
    return res.status(200).send("Welcome to pokeAPI REST by Nya ^^");
  }
}