import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    homeTitle = "Welcome to the ninja directory!";
    @Input() ninja;
    @Output() onSuge = new EventEmitter();

    fireSugere(e){
        this.onSuge.emit(e);
    }

  constructor() { }

  ngOnInit() {
  }

}
