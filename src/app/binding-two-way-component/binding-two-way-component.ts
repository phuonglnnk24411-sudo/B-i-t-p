import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  public hsa:number=0;
  public hsb:number=0;
  public hsc:number=0;
  public ketqua: string = "";
  giaiPT2(){
    if(this.hsa==0)
    {
      if(this.hsb==0 && this.hsc==0)
      {
        this.ketqua="Tùm Lum Nghiệm"
      }
      else if (this.hsb==0 && this.hsc!=0)
      {
        this.ketqua="Không tìm ra nghiệm nha"
      }
      else
      {
        this.ketqua="x="+(-this.hsc/this.hsb)
      }
    }
    else
    {
      let delta=Math.pow(this.hsb,2)-4*this.hsa*this.hsc
      if (delta<0)
      {
        this.ketqua="Phương trình vô nghiệm"
      }
      else if (delta==0)
      {
        this.ketqua="Phương trình có nghiệm kép x1=x2="+(-this.hsb/(2*this.hsa))
      }
      else
      {
        let x1=(-this.hsb-Math.sqrt(delta)/(2*this.hsa))
        let x2=(-this.hsb+Math.sqrt(delta)/(2*this.hsa))
        this.ketqua="x1="+x1+"\n"+"x2="+x2
      }
    }
  }
}
