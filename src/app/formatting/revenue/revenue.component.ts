import { Component, OnInit } from '@angular/core';
import {data} from '../data';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {
  buttonRevenue=false;
  buttonFormatApply=false;
  buttonFormatCancel=false;
  
  thousandSep=[',','.'];
  decimals=[1,2,3,4,5];
  format=false;
  condition=false;
  columnName='';
  alignment='';
  thousandSeperator=',';
  decimalSeperator='.';
  decimalPlace='2';
  formatAsPercent='false';
  currency='$';
  currencies=['$','&','*','#','@'];
  currencyAlignment='left';
  revenueApply=false;
  revenueCancel=false;
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
  onClickFormatRevenueApply(){
    this.revenueApply=true;
    this.revenueCancel=false;
    this.columnName='revenue';
    this.format=false;
  }
  onClickFormatRevenueCancel(){
   this.revenueApply=false;
   this.revenueCancel=true;
   this.columnName='';
 }
 onAlignSelect(event: Event){
  this.alignment=(<HTMLInputElement>event.target).value;
 }
 onThousandSelect(event: Event){
  this.thousandSeperator=(<HTMLInputElement>event.target).value;
 }
 onDecimalSelect(event: Event){
  this.decimalSeperator=(<HTMLInputElement>event.target).value;
 }
 onDecimalPlaceSelect(event: Event){
   console.log(event)
  this.decimalPlace=((<HTMLInputElement>event.target).value);
 }
 onCurrency(event:Event){
  this.currency=(<HTMLInputElement>event.target).value; 
 }
 onCurrencyAlignment(event:Event){
  this.currencyAlignment=(<HTMLInputElement>event.target).value; 
 }
 onFormatAsPercentage(event:Event){
   this.formatAsPercent=(<HTMLInputElement>event.target).value; 
 }
 onClickFormatApply(){
  this.buttonFormatApply=true;
  this.buttonFormatCancel=false;
  this.columnName='revenue';

}

onClickFormatCancel(){
 this.buttonFormatCancel=true;
 this.buttonFormatApply=false;
}
 
}
