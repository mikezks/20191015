import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello Angular!';

  constructor() {}
  
  ngOnInit(): void {
  }
}
