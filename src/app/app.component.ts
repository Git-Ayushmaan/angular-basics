import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularbasics';
  ngOnInit(){
    this.title = 'Hello from Bridgelabz';
  }
  image ="BL-logo.jpg";
  url = "https://www.bridgelabz.com";
  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
}
}