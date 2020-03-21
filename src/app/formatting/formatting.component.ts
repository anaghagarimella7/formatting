import { Component, OnInit } from '@angular/core';
import {data } from '../data';

@Component({
  selector: 'app-formatting',
  templateUrl: './formatting.component.html',
  styleUrls: ['./formatting.component.css']
})
export class FormattingComponent implements OnInit {
  dat=[
    new data('FruitPreserves','April',3950.00),
    new data('Soups','April',1260.00),
    new data('BreakfastCereals','April',3555.00),
    new data('Bakery','April',5250.00),
    new data ('Confectionery','April',2487.50),
    new data('FruitPreserves','April',987.50),
    new data('Condiments','March',3825.00),
    new data('BreakfastCereals','March',3950.00),
    new data('Bakery','March',3937.50)
  ];
  
  d=this.dat[0];
  constructor() { }

  ngOnInit(): void {
  }

}
