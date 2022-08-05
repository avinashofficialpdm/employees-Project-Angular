import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private serv:EmployeeService) { }

  currentUser:any

  ngOnInit() {
    console.log(history.state.id);
    this.serv.getOneUser(history.state.id)
   this.currentUser =  this.serv.getOneUser(history.state.id)
   console.log(typeof(this.currentUser));
  
   
  }

  // getCurrentUser(){
  //   this.serv.getOneUser(history.state.id)
  //   // console.log(typeof(this.serv.getOneUser(id)));
    
  // }


}
