import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './addUser/addUser.component';
import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './displayDetails/displayDetails.component';
import { EditUserComponent } from './editUser/editUser.component';

const routes: Routes = [
  {
    path:'addUser',
    component:AddUserComponent
  },
  {
    path:'edit',
    component:EditUserComponent
  }
  // {
  //   path:"",
  //   redirectTo:'addUser',
  //   pathMatch:'full'
  // },
  // {

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
