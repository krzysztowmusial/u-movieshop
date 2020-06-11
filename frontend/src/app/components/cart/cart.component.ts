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

  constructor(private api: ApiService, private local: LocalService) { }

  ngOnInit(): void {
    let temp = JSON.parse(localStorage.getItem('cart'))
    console.log(temp)

    for (let index = 0; index < temp.length; index++) {
      this.api.findById(temp[index]).subscribe((data)=>{
        this.items.push(data)
      });
    }
  }

  removeFromCart(movieId) {
    this.local.removeFromCart(movieId);
    this.local.updateAmount();
  }

}
