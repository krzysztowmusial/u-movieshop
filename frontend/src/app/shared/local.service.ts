import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  temp = localStorage.getItem('cart');
  cart = JSON.parse(this.temp) || [];
  amountSubject = new BehaviorSubject<number>(this.cart.length);
  amount = this.amountSubject.asObservable();

  constructor() {}

  public addToCart(movieId: string) {
    this.cart.push(movieId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  public removeFromCart(movieId: string) {
    let index = this.cart.indexOf(movieId);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public updateAmount () {
    this.amountSubject.next(this.cart.length)
  }

}
