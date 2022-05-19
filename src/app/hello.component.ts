import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <div>
    <p>send child comp value</p>
    <input type="text" [(ngModel)]="childVal">
    <br/>

    <button (click)="sendToParent()">Send To Parent</button>
  </div>
  `,
  styles: [`
  div{
    padding:5%;
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow:  20px 20px 60px #848484,
                 -20px -20px 60px #ffffff;
  }
  button{
    margin-top:5%;
    background-color:green;
    border-radius:5px;
    color:white;
  }
  input{
    padding:5px;
    border-radius:5px;
  }
  `]
})
export class HelloComponent  {
  @Output() sendChildVal: EventEmitter<string> = new EventEmitter<string>();
  childVal:string;

  sendToParent(){
    this.sendChildVal.emit(this.childVal)
  }
}
