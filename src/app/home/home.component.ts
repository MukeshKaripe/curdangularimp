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
     this.editreactiveForm=new FormGroup(
      {
        editusername:new FormControl(this.reactiveForm.get('username'),Validators.required),
        editplace:new FormControl(this.reactiveForm.get('place')?.value),
      edityear:new FormControl(this.reactiveForm.get('year')?.value),
    editeno:new FormControl(this.reactiveForm.get('eno')?.value),
  
      }
     )
     
  console.log(this.editreactiveForm.value);
  this.updateData=this.editreactiveForm.value;

     
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
  editDialog(user:any,i:any){
    this.visible1 = true;
    console.log(user);
    this.currentIndex = i;
    this.editreactiveForm.setValue(user);
    for (let i = 0; i <this.pushArray.length; i++) {
      const element = this.pushArray[i];
      
      
    }


    

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
updatet(){
this.pushArray[this.currentIndex]-this.reactiveForm.value;
console.log(this.editreactiveForm.value);

}
 }
