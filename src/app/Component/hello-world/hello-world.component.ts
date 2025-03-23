import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: false,
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {

  // <!-- One way to bind data is with string interpolation. -->
  // firstName: string = 'Jane';
  // lastName: string = 'Doe';


  // <!-- Property Binding -->
  // title: string = 'Hello World';
  // isDisabled: boolean = true;


  // <!-- Two way Data Binding -->
  // Name: string = 'Jane Doe';


  // <!-- Event Binding -->
  // num1: number;
  // num2: number;
  // result: number;
  // color: string = "red";
  // getMax(num1: number, num2: number){
  //   this.result = Math.max(num1, num2);
  // }

  // Event Binding with Event Object
  // textInput: string = "";
  // textDisplay(event: any){
  //   this.textInput = (event.target as HTMLInputElement).value;
  // }

  // Event Binding without Event Object
  // textInput1: string = "";

  aniTitle: string = "Anime List";
  animeList: string[] = [
    "Attack on Titan",
    "One Piece",
    "Bleach",
    "Full Metal Alchemist",
    "Death Note"
  ]
}