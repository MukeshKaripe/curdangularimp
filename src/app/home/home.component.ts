import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  updateUser: any;
  constructor(public http:HttpClient,
    private service:EmployeeService) {
    
    
  }
  editreactiveForm!:FormGroup;

  reactiveForm!:FormGroup;
  currentIndex:any;
  updateData:any[]=[];

  ngOnInit(): void {
    this.reactiveForm=new FormGroup(
      {
        username:new FormControl('',Validators.required),
        place:new FormControl(''),
      year:new FormControl(''),
    eno:new FormControl(''),
  
      }
     )
     
     this.editFormValidations();
     
  }
 
  visible: boolean = false;
  visible1: boolean = false;


  showDialog() {
      this.visible = true;
  }
 

  pushArray:any[]=[];
  

  onSubmit(){

    this.pushArray.push(this.reactiveForm.value)
    
    localStorage.setItem('userstorage', JSON.stringify( this.pushArray) );
    console.log(this.pushArray);

  }
editFormValidations(){

  this.editreactiveForm=new FormGroup(
    {
      editusername:new FormControl('',Validators.required),
      editplace:new FormControl(''),
    edityear:new FormControl(''),
  editeno:new FormControl(''),

    }
   )
  
}

  editDialog(user:any,i:any){
    this.visible1 = true;
  
    
    this.editreactiveForm=new FormGroup(
      {
        editusername:new FormControl(user.username,Validators.required),
        editplace:new FormControl(user.place),
      edityear:new FormControl(user.year),
    editeno:new FormControl(user.eno),
  
      }
     )
     
  console.log(this.editreactiveForm.value);
  this.updateData=this.editreactiveForm.value;

  }

  updatet(){
    
    console.log(this.pushArray);
    
    
    }



// edit
row:any[]=[];

  // edit(thisValues: { parentElement: { parentElement: any[]; }; }){

  // }

//   updateUserDetails() {
//     this.http.put(`http://your-api-endpoint/users/${this.pushArray}`, this.pushArray)
//       .subscribe((response: any) => {
//         console.log('User updated:', response);
//         // Perform any additional actions or updates after successful update
//       });
//   }
// delete
deleteRow(i:any){
  this.pushArray.splice(i,1);


}

 }
