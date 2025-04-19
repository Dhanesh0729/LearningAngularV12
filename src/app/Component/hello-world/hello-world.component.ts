import { NgClass } from '@angular/common';
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

  // JS object with properties and values for ngfor and ngclass directive
  // aniTitle: string = "Anime List";
  // animeDetailsList = [
  //   {
  //     title: "Attack on Titan",
  //     mainAntagonist: ["Titans", "Marley", "Eren Yeager"],
  //     protagonist: "Eren Yeager",
  //     mainCharacters: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert", "Levi Ackerman"],
  //     seasonCount: 4,
  //     episodeCount: 94,
  //     releaseDate: "2013-04-07",
  //     status: "Completed",
  //   },
  //   {
  //     title: "Demon Slayer: Kimetsu no Yaiba",
  //     mainAntagonist: "Muzan Kibutsuji",
  //     protagonist: "Tanjiro Kamado",
  //     mainCharacters: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
  //     seasonCount: "3 + Upcoming Arcs", 
  //     episodeCount: "55 + Upcoming",
  //     releaseDate: "2019-04-06",
  //     status: "Ongoing",
  //   },
  //   {
  //     title: "My Hero Academia",
  //     mainAntagonist: ["All For One", "Tomura Shigaraki"],
  //     protagonist: "Izuku Midoriya",
  //     mainCharacters: ["Izuku Midoriya", "Katsuki Bakugo", "Shoto Todoroki", "All Might", "Ochaco Uraraka"],
  //     seasonCount: "6 + Upcoming S7", 
  //     episodeCount: "138 + Upcoming",
  //     releaseDate: "2016-04-03",
  //     status: "Ongoing",
  //   },
  //   {
  //     title: "Jujutsu Kaisen",
  //     mainAntagonist: ["Ryomen Sukuna", "Kenjaku"],
  //     protagonist: "Yuji Itadori",
  //     mainCharacters: ["Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo"],
  //     seasonCount: "2 + Announced S3", 
  //     episodeCount: "47 + Upcoming",
  //     releaseDate: "2020-10-03",
  //     status: "Ongoing",
  //   },
  //   {
  //     title: "Chainsaw Man",
  //     mainAntagonist: "Makima",
  //     protagonist: "Denji",
  //     mainCharacters: ["Denji", "Makima", "Aki Hayakawa", "Power"],
  //     seasonCount: "1 + Upcoming Movie/Seasons", 
  //     episodeCount: "12 + Upcoming",
  //     releaseDate: "2022-10-12",
  //     status: "Ongoing",
  //   },

  //   {
  //     title: "Sakamoto Days",
  //     mainAntagonist: ["Slur / X", "ORDER (Antagonistic at times)"], 
  //     protagonist: "Taro Sakamoto",
  //     mainCharacters: ["Taro Sakamoto", "Shin Asakura", "Lu Xiaotang", "Aoi Sakamoto"],
  //     seasonCount: "1 (Airing)", 
  //     episodeCount: "Airing (TBD Total)", 
  //     releaseDate: "2025-01-11", 
  //     status: "Upcoming",
  //   },
  //   {
  //     title: "Dandadan",
  //     mainAntagonist: ["Various Yokai and Aliens", "Serpoians"], 
  //     protagonist: ["Momo Ayase", "Ken Takakura (Okarun)"], 
  //     mainCharacters: ["Momo Ayase", "Ken Takakura", "Seiko Ayase", "Turbo Granny", "Jin Enjoji"],
  //     seasonCount: "1 (Upcoming)", 
  //     episodeCount: "Upcoming (TBD Total)",  
  //     releaseDate: "Expected Oct 2025", 
  //     status: "Upcoming",  
  //   },
  // ];


  // <!-- ng Switch Directive with ngModel Directive -->
  // num: number;

  //<!-- ngIf directive -->
  //<!-- ngIf directive with then and else block in ng-template -->
  // isChecked: boolean = false;

  // isPrimary: boolean = false;
  // changeColor() {
  //   this.isPrimary = !this.isPrimary;
  // }
  // isItalic: boolean = false;
  // changeItalic() {
  //   this.isItalic = !this.isItalic;
  // }
  // isBold: boolean = false;
  // changeBold() {
  //   this.isBold = !this.isBold;
  // }
  // reset() {
  //   this.isPrimary = false;
  //   this.isItalic = false;
  //   this.isBold = false;
  // }

  // <!-- ngStyle Directive -->
  // color: string = "red";

  // <!-- Pipes -->
  // <!-- Date Pipe and its arguments -->
  // toDate: string = new Date().getTime().toString();
  // toDate: Date = new Date();

  message: string = "Using UpperCase and lowercase pipes";
}