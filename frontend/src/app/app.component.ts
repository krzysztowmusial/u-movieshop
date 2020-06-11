import { Component, OnInit } from '@angular/core';
import { LocalService } from './shared/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  amount = undefined;

  constructor (private local: LocalService) {}

  ngOnInit(): void {
    this.local.amount.subscribe((data)=>{
      if (data === 0) {
        this.amount = undefined;
      } else {
        this.amount = data;
      }
    })
  }

}
