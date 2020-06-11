import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { LocalService } from 'src/app/shared/local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies;
  categories = [];

  constructor(private api: ApiService, private local: LocalService) { }

  ngOnInit(): void {

    this.api.findAll().subscribe((data: any[])=>{
      data.forEach(movie => {
        if( this.categories.includes(movie.category) == false ) {
          this.categories.push(movie.category);
        }
      });
      this.categories.sort();
    })

    this.api.category.subscribe((value)=>{
      if (value === "all") {
        this.api.findAll().subscribe((data)=>{
          this.movies = data;
        });
      } else {
        this.api.findByCategory(value).subscribe((data)=>{
          this.movies = data;
        })
      }
    })

  }

  changeCategory(category) {
    this.api.changeCategory(category)
  }

  addToCart(movieId) {
    this.local.addToCart(movieId);
  }

}
