import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  nrTelefon = 7234546;

  number:number = 0;

  increment(){
      this.number++;
  }

  decrement(){
    this.number--;
  }
}
