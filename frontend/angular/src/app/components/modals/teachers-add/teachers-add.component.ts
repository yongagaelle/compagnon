import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teachers-add',
  templateUrl: './teachers-add.component.html',
  styleUrls: ['./teachers-add.component.scss']
})
export class TeachersAddComponent implements OnInit {
  model!: NgbDateStruct;
  constructor(public calendar: NgbCalendar , private dateAdapter: NgbDateAdapter<string>) { }

  ngOnInit(): void {

  }

}
