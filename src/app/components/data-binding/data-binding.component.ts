import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName:string ="Angular 19";

  inputType="checkbox";
  inputType2="radio"
 
  rollNo:number=100;

  isIndian:boolean=true;

  myClassName:string="bg-danger";
  myClassName2:string="bg-primary"

  currentData:Date=new Date();
  firstName= signal("Vaibhav Bhadane");



  constructor() { }

  showAlert(msg:string)
  {
    alert(msg);
  }

  changeCourseName(){
    this.courseName="java SpringBoot";
  }
  changeName(){
    this.firstName.set("Om bhadane");
  }

  


}
