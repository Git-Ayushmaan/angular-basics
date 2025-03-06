import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
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
userName: string = "";
}