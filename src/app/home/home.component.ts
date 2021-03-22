import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  locations: [];

  searchCarForm = this.fb.group({
    location: new FormControl(null, Validators.required),
    start_date: new FormControl(new Date().toISOString().substring(0, 10), Validators.required)
  });

  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.api.getLocations().subscribe(res => this.locations = res);
  }

  onSubmit(form) {
    if (this.searchCarForm.valid) {
      const path = [
        'details',
        this.searchCarForm.controls.location.value,
        this.searchCarForm.controls.start_date.value
      ];

      this.router.navigate(path);
    }
  }

}
