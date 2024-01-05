import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentRegisterComponent } from 'src/app/components/modals/student-register/student-register.component';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

  constructor(public dialog: MatDialog, public router:Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentRegisterComponent, {
      width: '1300px',
	  height: '800px',
	  hasBackdrop:true,
    disableClose:false,
    

    //   data: {name: this.name, animal: this.animal}
    });
	//  this.router.navigateByUrl('students')
	//  this.router.navigateByUrl('student')
	

    dialogRef.afterClosed().subscribe(result => {
    //   this.animal = result;
    });
  }

}
