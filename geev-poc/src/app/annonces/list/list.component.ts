import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/data.json'
import { Annonce } from 'src/app/model/Annonce.js';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  annonces: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    Object.values(jsonData).forEach(element => {
     this.annonces.push(element)
   });
  }

}
