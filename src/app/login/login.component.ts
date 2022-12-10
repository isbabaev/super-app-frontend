import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly form: FormGroup;

  constructor(readonly formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  logIn() {
    console.log('helloo')
    console.log(this.form.value);
  }
}
