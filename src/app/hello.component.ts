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
    border: 1px solid black;
    background-color: yellow;
  }
  button{
    margin-top:5%;
    background-color:grey;
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
