import { Component, Input, OnInit } from '@angular/core';
import { maravillas } from '../maravillas';

@Component({
  selector: 'app-maravillas-detail',
  templateUrl: './maravillas-detail.component.html',
  styleUrls: ['./maravillas-detail.component.css']
})
export class MaravillasDetailComponent implements OnInit {
@Input() maravillaDetail!: maravillas;
  constructor() { }

  ngOnInit() {
  }

}
