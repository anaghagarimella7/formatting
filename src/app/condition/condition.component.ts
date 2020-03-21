import { Component, OnInit } from '@angular/core';
import {data } from '../data';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {
  displayedColumns=['category','month','revenue'];
  operators=['>','<','<=','>=','='];
  fonts=['Arial','Lucida Sans Unicode','Verdana','Courier New','Tahoma','Palatino Linotype','Impact','Georgia','Times New Roman'];
  sizes=['8','10','11','12','14','16','20','25','30']; 
  col1='';
  col2='';
  column='';
  op1='>';
  op2='>';
  val1=0;
  val2=0;
  font1='';
  font2='';
  Col='';
 addCol=false;
 font='';
 fontsize=20;
  textcolor='';
  fontcolor='';
  fontsize1=20;
  fontsize2=20;
  fontcolor1='';
  fontcolor2='';
  textcolor1='';
  textcolor2='';
  apply=false;
  cancel=false;
  buttonConditionApply=false;
  buttonConditionCancel=false;
  addColumn=false;
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
  onSubmit(){
    console.log('Submitted');
  }
  onCol1(event:Event){
    this.col1=(<HTMLInputElement>event.target).value; 
this.buttonConditionApply=false;
  }
  onOp1(event:Event){
    this.op1=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;

  }
  onVal1(event:Event){
   this.val1=+(<HTMLInputElement>event.target).value; 
   this.buttonConditionApply=false;

  }
  onOp2(event:Event){
    this.op2=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;

  }
  onCol2(event:Event){
    this.col2=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;

  }
  onColumn(event:Event){
    this.column=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;

  }
  onVal2(event:Event){
    this.val2=+(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;

   }

   onFont1(event:Event){
     this.font1=(<HTMLInputElement>event.target).value; 
     this.buttonConditionApply=false;

   }
   onFontSize1(event:Event){
    this.fontsize1=+(<HTMLInputElement>event.target).value;
    this.buttonConditionApply=false;

   }
   onFontSize2(event:Event){
    this.fontsize2=+(<HTMLInputElement>event.target).value;
    this.buttonConditionApply=false;

  }

   onFontColor1(event:Event){
      this.fontcolor1=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;

    }
    onFontColor2(event:Event){
      this.fontcolor2=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;

    }
    onTextColor1(event:Event){
      this.textcolor1=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;

    }
    onTextColor2(event:Event){
      this.textcolor2=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;

    }
    onFont2(event:Event){
      this.font2=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;

    }
    onClickConditionApply(){
         
      this.buttonConditionApply=true;
       this.buttonConditionCancel=false;
      //this.buttonFormatApply=false;
      //this.buttonFormatCancel=false;
   }
   onClickConditionCancel(){
     this.buttonConditionCancel=true;
     this.buttonConditionApply=false;
   }
   onAdd(){
    this.addCol=true;
  }
  onClickColumn(event:Event){
    
    this.Col=(<HTMLInputElement>event.target).value; 
    console.log(event);
  }
  onFonts(event:Event){
    this.font=(<HTMLInputElement>event.target).value; 
  }
  onFontSizes(event:Event){
   this.fontsize=+(<HTMLInputElement>event.target).value; 
 }
 onFontColors(event:Event){
   this.fontcolor=(<HTMLInputElement>event.target).value; 
 }
 onTextColors(event:Event){
   this.textcolor=(<HTMLInputElement>event.target).value; 
 }
}
