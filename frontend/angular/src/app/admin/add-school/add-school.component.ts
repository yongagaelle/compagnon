import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgbDateStruct,NgbCalendar, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {
  value: any
  model!: NgbDateStruct;

  isLinear = false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  startDate = new Date(1990, 0, 1);
  date = new FormControl(new Date());
  islocalisation=false;
  islangue=false;
  isinfogeneral=false;
  ismotdepasse=false;
  isSaisielicence=false;
  constructor(public calendar: NgbCalendar ,public route:Router, private dateAdapter: NgbDateAdapter<string>,private _formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
  }
  onHome(){
    this.route.navigate(['/Accueil']);
      

  }

}
