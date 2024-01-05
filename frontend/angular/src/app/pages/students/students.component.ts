import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {MatDialog} from '@angular/material/dialog';
import { StudentRegisterComponent } from 'src/app/components/modals/student-register/student-register.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
	// openXl(content:any) {
	// 	this.modalService.open(content, { size: 'xl' });
	//   }
	

  constructor(public dialog: MatDialog, public router:Router,overlay: Overlay) {
	// $('ul.nav-pills > li'),,overlay: Overlay
	// 			.on("click",(function (e) {
	// 				console.log(e);
	// 		$('ul.nav-pills > li')
	// 			.removeClass('active');
	// 		$(this).addClass('active');
	// 	}));
  
   }
   onView(){
	this.router.navigateByUrl('view')
   }
   openDialog(): void {
    const dialogRef = this.dialog.open(StudentRegisterComponent, {
		width: '1000px',
		height: '600px',
		hasBackdrop:true,
	  disableClose:false,
	//   scrollStrategy:Overlay.
    //   data: {name: this.name, animal: this.animal}
    });
	//  this.router.navigateByUrl('students')
	//  this.router.navigateByUrl('student')
	

    dialogRef.afterClosed().subscribe(result => {
    //   this.animal = result;
    });
  }


   

   onMenu(data:number){
	if(data===1){
		$('#all').addClass("active")
		$('#nont').removeClass("active")
		$('#pec').removeClass("active")
		$('#pacc').removeClass("active")
		$('#iac').removeClass("active")
		$('#rad').removeClass("active")
		$('#lda').removeClass("active")
		$('#sus').removeClass("active")
	
	
	}
	else if(data===2){
		$('#all').removeClass("active")
		$('#nont').addClass("active")
		$('#pec').removeClass("active")
		$('#pacc').removeClass("active")
		$('#iac').removeClass("active")
		$('#rad').removeClass("active")
		$('#lda').removeClass("active")
		$('#sus').removeClass("active")
	}
	else if(data=3){
		$('#all').removeClass("active")
		$('#nont').removeClass("active")
		$('#pec').addClass("active")
		$('#pacc').removeClass("active")
		$('#iac').removeClass("active")
		$('#rad').removeClass("active")
		$('#lda').removeClass("active")
		$('#sus').removeClass("active")
	}
	
   }

  ngOnInit(): void {
	//   // ---------horizontal-navbar-menu-----------
	//   var tabsNewAnim = $('#navbar-animmenu');
	//   var selectorNewAnim = $('#navbar-animmenu').find('li').length;
	//   //var selectorNewAnim = $(".tabs").find(".selector");
	//   var activeItemNewAnim = tabsNewAnim.find('.active');
	//   var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	//   var itemPosNewAnimLeft = activeItemNewAnim.position();
	//   $(".hori-selector").css({
	// 	  "left":itemPosNewAnimLeft.left + "px",
	// 	  "width": activeWidthNewAnimWidth + "px"
	//   });
	//   $("#navbar-animmenu").on("click","li",function(e){
	// 	  $('#navbar-animmenu ul li').removeClass("active");
	// 	  $(this).addClass('active');
	// 	  var activeWidthNewAnimWidth = $(this).innerWidth();
	// 	  var itemPosNewAnimLeft = $(this).position();
	// 	  $(".hori-selector").css({
	// 		  "left":itemPosNewAnimLeft.left + "px",
	// 		  "width": activeWidthNewAnimWidth + "px"
	// 	  });
	//   });


	//	console.log('bonjour')
 
		

	// $('button').click(function(){
	// 	alert('Wass up!');
	// 	 });
  }

}


@Component({
	selector: 'app-student-add',
	templateUrl: './student-add.component.html',
	// styleUrls: ['./student-add.component.scss']
  })
  export class StudentAddComponent implements OnInit  {
	value: any

  constructor() { 
    
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

  ngOnInit(): void {
    this.effect()
  }
  
	
	
  
  }
  