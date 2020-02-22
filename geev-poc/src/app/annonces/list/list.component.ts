import { Component, OnInit } from '@angular/core';
import { Annonces } from 'src/app/model/Annonces.js';
import { AnnoncesService } from 'src/app/shared/annonces.service.js';
import * as jsonData from '../../../assets/data.json';
import { stringify } from 'querystring';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  annonces: Array<any> = [];
  annoncesData: Annonces;
  pageNumber: string = '1';
  limit: string = '1';

  constructor(private annoncesService: AnnoncesService) { 
    Object.values(jsonData).forEach(annonce => {
      this.annonces.push(annonce);
    });
  }
  
  ngOnInit(): void {
    this.annoncesService.getAnnonces(this.pageNumber, this.limit).subscribe(annonces => this.annoncesData = annonces)
    console.log(this.annonces)
  }

  getDetail(): void {
    // this.router.navigate(['/b']);
}

}
