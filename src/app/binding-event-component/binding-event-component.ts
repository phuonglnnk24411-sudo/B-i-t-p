import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  public hsa:number=5
  public hsb:number=8
  giaiPT(hsa:string, hsb:string, view:HTMLElement){
    let a=parseFloat(hsa)
    let b=parseFloat(hsb)
    if(a==0 && b==0)
    {
      view.innerHTML="Tùm Lum Nghiệm"
    }
    else if (a==0 && b!=0)
    {
      view.innerHTML="Không tìm ra nghiệm nha"
    }
    else
    {
      view.innerHTML="x="+(-a/b)
    }
    let tdketqua2=document.getElementById("tdketqua2")
  }
}
