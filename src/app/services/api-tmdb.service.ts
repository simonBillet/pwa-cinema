import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APITMDBService {
  private URL: string = "https://api.themoviedb.org/3/search/movie";
  private API_KEY: string = 'be78c8d843b409be95d1c798c1621457';

  constructor(private http: HttpClient) { }

  searchFilm(searchText = "", page = 1) {
    let params = new HttpParams();
    params = params.append('api_key', this.API_KEY);
    params = params.append('query', searchText);
    params = params.append('pages', page.toString());

    return this.http.get(this.URL, {params: params});
  }
}
