import { Component, OnInit } from '@angular/core';
import { maravillas } from '../maravillas';
import { MaravillasService } from '../maravillas.service';

@Component({
  selector: 'app-maravillas-list',
  templateUrl: './maravillas-list.component.html',
  styleUrls: ['./maravillas-list.component.css']
})
export class MaravillasListComponent implements OnInit {
  selectMaravilla!:maravillas
  selected = false;
  maravillas: Array<maravillas> = [];
  average: number = 0;
  constructor(private maravillasService: MaravillasService) { }

  getMaravillasList(){
    this.maravillasService.getCourses().subscribe(maravillas=>{
      this.maravillas = maravillas;
    });
  }
  onSelectSerie(maravilla: maravillas){
    this.selected = true;
    this.selectMaravilla = maravilla;
  }
  ngOnInit() {
    this.getMaravillasList();
  }

}
