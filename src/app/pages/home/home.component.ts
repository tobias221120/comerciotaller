import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email')as FormControl;
  }



formUser=new FormGroup({
  'name':new FormControl("", Validators.required),
  'email':new FormControl("", [Validators.required, Validators.email])
}

)
  

}
