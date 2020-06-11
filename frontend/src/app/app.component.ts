import { Component, OnInit } from '@angular/core';
import { LocalService } from './shared/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  amount = 0;

  constructor (private local: LocalService) {}

  ngOnInit(): void {
    this.local.amount.subscribe((data)=>{
      this.amount = data;
    })
  }

}
