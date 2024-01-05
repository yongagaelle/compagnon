import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'
import { TeachersAddComponent } from 'src/app/components/modals/teachers-add/teachers-add.component';
@Component({
  selector: 'app-dossiersteachers',
  templateUrl: './dossiersteachers.component.html',
  styleUrls: ['./dossiersteachers.component.scss']
})
export class DossiersteachersComponent implements OnInit {

  constructor(public dialog: MatDialog, public router:Router,overlay: Overlay){ }

  openDialog(): void {
    const dialogRef = this.dialog.open(TeachersAddComponent, {
		width: '1000px',
		height: '600px',
		hasBackdrop:true,
	  disableClose:false,
	//   scrollStrategy:Overlay.
    //   data: {name: this.name, animal: this.animal}
    });
  }

  ngOnInit(): void {
  }

}
