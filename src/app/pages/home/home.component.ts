import { Component, OnInit } from '@angular/core';
import { APITMDBService } from '../../services/api-tmdb.service';
import { Film } from "../../models/film";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  films: Film[] = [];
  public inputSearchFilm = "";

  constructor(private apiTMDBService: APITMDBService) { }

  ngOnInit(): void {}

  onClickSearch(searchText = "a") {
    this.films = [];
    this.apiTMDBService.searchFilm(searchText).subscribe((data: any) => {
      for(const filmJson of data.results) {
        const film: Film = {
          "id": filmJson.id,
          "title": filmJson.title,
          "description": filmJson.overview ?? "",
          "popularite": filmJson.popularity,
          "note": filmJson.vote_average,
          "dateSortie": filmJson.release_date,
          "langueOriginel": filmJson.original_language,
          "posteImg": filmJson.poster_path ?? "",
          "adulte": filmJson.adult?? false
        };

        this.films.push(film);
      }
    });
  }

}
