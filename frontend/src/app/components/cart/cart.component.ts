import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { LocalService } from 'src/app/shared/local.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = [];
  sum = 0;

  constructor(private api: ApiService, private local: LocalService) { }

  ngOnInit(): void {
    this.local.local.subscribe((data)=>{
      this.items = [];
      this.sum = 0;
      for (let i = 0; i < data.length; i++) {
        this.api.findById(data[i]).subscribe((movie)=>{
          this.items.push(movie)
          this.sum += movie['price'];
        });
      }
    })
  }

  removeFromCart(movieId) {
    this.local.removeFromCart(movieId);
  }

}
