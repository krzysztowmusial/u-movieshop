import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { LocalService } from 'src/app/shared/local.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  id;
  movie;

  constructor(private api: ApiService, private local: LocalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.movieId;
    });
    this.api.findById(this.id).subscribe((data)=>{
      this.movie = data;
    })
  }

  addToCart(movieId) {
    this.local.addToCart(movieId);
  }

}
