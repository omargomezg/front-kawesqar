import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageDataService} from '../../core/services/storage-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private localStorage: StorageDataService) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  send() {
    this.localStorage.setRutUser('14081226-9');
    this.router.navigateByUrl('/invoice-cancellation-order');
  }
}
