import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string="Nguyễn Thị Thúy Ngân"
  public email:string="ngannttk24411@st.uel.edu.vn"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=false
  public hello:string="Hellooooo!!!"

}
