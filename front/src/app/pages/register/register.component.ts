import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Iuser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  email!: Iuser;
  password!: Iuser;
  // confirmPassword!: Iuser;

  constructor() {}

  ngOnInit(): void {
    
  }

  register() {
    console.log(this.email);
    console.log(this.password); 
  }
}
