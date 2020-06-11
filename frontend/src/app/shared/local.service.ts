import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  cart = JSON.parse(localStorage.getItem('cart')) || [];

  localSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('cart')));
  local = this.localSubject.asObservable();

  amountSubject = new BehaviorSubject<number>(this.cart.length);
  amount = this.amountSubject.asObservable();

  constructor() {}

  public addToCart(movieId: string) {
    this.cart.push(movieId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateLocal();
    this.updateAmount();
  }
  public removeFromCart(movieId: string) {
    let index = this.cart.indexOf(movieId);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateLocal();
    this.updateAmount();
  }

  public updateAmount () {
    this.amountSubject.next(this.cart.length)
  }
  public updateLocal () {
    this.localSubject.next(JSON.parse(localStorage.getItem('cart')))
  }

}
