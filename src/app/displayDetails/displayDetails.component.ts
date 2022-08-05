import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditUserComponent } from '../editUser/editUser.component';
import { EmployeeService } from '../Employee.service';

@Component({
  selector: 'app-displayDetails',
  templateUrl: './displayDetails.component.html',
  styleUrls: ['./displayDetails.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  EmployeeDetails:any[] = []
  constructor(private serv:EmployeeService,private rout:Router) { }

  ngOnInit() {

    this.serv.getDetailsOnTable().subscribe(data=>{this.EmployeeDetails=data})
    console.log(this.EmployeeDetails);
    
  }

  delete(id:number){
    this.serv.deleteUser(id)
  }
  
  editUser(id:number){
    this.rout.navigateByUrl("edit",{state:{id:id}})
  }
  homepage(){
    this.rout.navigateByUrl("")
  }
}
