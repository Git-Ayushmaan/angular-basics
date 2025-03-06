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
}