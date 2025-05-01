import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  UserName : string = '';
  UserEmail : string = '';
  UsersName: string[] = [];
  UsersMail: string[] = [];
  submit(){
    if(this.UserName && this.UserEmail){
      this.UsersName.push(this.UserName);
      this.UsersMail.push(this.UserEmail);
      this.UserName = '';
      this.UserEmail = '';
      console.log(this.UsersName);
      console.log(this.UsersMail);
      
    }
  }
}
