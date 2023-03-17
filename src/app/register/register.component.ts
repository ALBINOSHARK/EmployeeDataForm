import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


// // @Component({
// //   selector: 'datepicker-overview-example',
// //   templateUrl: 'datepicker-overview-example.html',
// // })
// // export class DatepickerOverviewExample {}




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  title = 'EMPLOYEE DATA FORM';
  
  step: any=1;
  constructor(private builder:FormBuilder, private router: Router) { }
  ngOnInit() {
      // this.loginUser()
  }
 
  
      // loginForm!:FormGroup;

      //ngOnInit(){
      //this.
      loginForm = new FormGroup({

          First_Name: new FormControl(''),
          Middle_Name: new FormControl(''),
          Last_Name: new FormControl(''),
          date_of_joining: new FormControl(''),
          Birthday_day: new FormControl(''),
          Birthday_day_document: new FormControl(''),
          nationality: new FormControl(''),
          religion: new FormControl(''),
          country: new FormControl(''),
          Passport_Number: new FormControl(''),
          Aadhar_Number: new FormControl(''),
          Email_Id: new FormControl(''),
          Mobile_Number: new FormControl(''),
          Blood_group: new FormControl(''),
          Radio01: new FormControl(''),
          Radio02 :new FormControl(''),
          Reason :new FormControl(''),
          Name : new FormControl(''),
          Title : new FormControl(''),
          Department :new FormControl(''),
          Address:new FormControl(''),
          House_No1:new FormControl(''),
          House_No2:new FormControl(''),
          Street1:new FormControl(''),
          Street2:new FormControl(''),
          City1:new FormControl(''),
          Pin_Code1:new FormControl(''),
          City2:new FormControl(''),
          Pin_Code2:new FormControl(''),
          State1:new FormControl(''),
          State2:new FormControl(''),
          Telephone_No1:new FormControl(''),
          Telephone_No2:new FormControl(''),
          Name3:new FormControl(''),
          Relationship:new FormControl(''),
          Address2:new FormControl(''),
          City3:new FormControl(''),
          Phone2:new FormControl(''),
          Email_ID3:new FormControl(''),
          FatherName:new FormControl(''),
          Occupation:new FormControl(''),
          Dob:new FormControl(''),
          MotherName:new FormControl(''),
          Occupation2:new FormControl(''),
          Dob2:new FormControl(''),
          SpouseName:new FormControl(''),
          Occupation3:new FormControl(''),
          Dob3:new FormControl(''),
          ChildName1:new FormControl(''),
          Gender:new FormControl(''),
          Dob4:new FormControl(''),
          ChildName2:new FormControl(''),
          Gender2:new FormControl(''),
          Dob5:new FormControl(''),
          From:new FormControl(''),
          Organization:new FormControl(''),
          Designation:new FormControl(''),
          RM:new FormControl(''),
          REASONL:new FormControl(''),
          Qualification:new FormControl(''),
          University_Board:new FormControl(''),
          Specialization:new FormControl(''),
          YR:new FormControl(""),
          Grade_CGPA:new FormControl(''),
          Name6:new FormControl(''),
          Institute:new FormControl(''),
          MY:new FormControl(''),
          Name7:new FormControl(''),
          Name8:new FormControl(''),
          Designation2:new FormControl(''),
          Designation3:new FormControl(''),
          CN1:new FormControl(''),
          CN2:new FormControl(''),
          EM1:new FormControl(''),
          EM2:new FormControl(''),
          CLASS10:new FormControl(''),
          CLASS12:new FormControl(''),
          DEGREE1:new FormControl(''),
          ACADEMIC:new FormControl(''),
          PAN:new FormControl(''),
          PAYSLIP:new FormControl(''),
          RELIEVINGLETTER:new FormControl(''),
          Experienceletter:new FormControl(''),
          appointmentletter:new FormControl(''),
          PHOTO:new FormControl(''),
          Name_8:new FormControl(''),
          Signature:new FormControl(''),
          Date:new FormControl('')
      })
      
      loginUser() {
          console.warn(this.loginForm.value)
          this.step=this.step+1;
          
      }
  previous(){
      this.step=this.step-1;
  }

  submit() {
    // TODO form values
    // API Post call for submittiing data
    // redirect back to home page
    this.router.navigateByUrl('/');
  }
}
