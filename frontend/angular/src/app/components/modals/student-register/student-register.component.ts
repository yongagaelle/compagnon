import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbDateStruct,NgbCalendar, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements AfterViewInit {
  value: any
  model!: NgbDateStruct;
  // model: NgbDateStruct;
  placement = 'bottom';

  constructor(public calendar: NgbCalendar , private dateAdapter: NgbDateAdapter<string>,) {

//     let timer;

// document.addEventListener('input', e => {
//   const el = e.target;

//   if( el.matches('[data-color]') ) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
//     }, 100)
//   }
// })
  }

  effect(){
    $('input').on('focusin', function() {
      $(this).parent().find('label').addClass('active');
    });
    // $('select').on('focusin', function() {
    //   $(this).parent().find('label').addClass('active');
    // });

    // $('input').on('focusout', function() {
    //   if (!this.value) {
    //     $(this).parent().find('label').removeClass('active');
    //   }
    // });
    var loadFile = function (event: { target: { files: (Blob | MediaSource)[]; }; }) {
      var image = document.getElementById("output");
      // image.= URL.createObjectURL(event.target.files[0]);
    };
  }

  // ngOnInit(): void {
  //   this.effect()
  // }
  ngAfterViewInit() {
    //feather.replace();
  }

}
