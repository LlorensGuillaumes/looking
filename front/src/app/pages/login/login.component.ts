import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Iuser } from 'src/app/interfaces/iuser';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  email!: Iuser;
  password!: Iuser;

  constructor(
    private form: FormBuilder,
    
  ){ }
  

  ngOnInit(): void {
    
  }


  login() {
    console.log(this.email);
    console.log(this.password);
  }

}
