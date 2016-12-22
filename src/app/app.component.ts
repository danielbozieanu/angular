import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apps works!';
  ninja = {
    name: "Ryu",
    belt: "Red"
  };

  suge(e){
      alert(e.type + ", asa ai supt-o.")
  }

}
