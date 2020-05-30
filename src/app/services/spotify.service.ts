import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQBJM5Usji5gXsRujoaN3YW3qQEhVCYhJm7Hba9goif5Df0C_xUVuotBigXUBBP_DveLAJj2Akn-KQ4FJTw';
  headers: HttpHeaders;
  url: string = 'https://api.spotify.com/v1/';

  constructor(
    private httpClient: HttpClient
  ) {
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  }

  getNewRelease() {
    return this.httpClient
      .get(`${this.url}browse/new-releases`, {headers: this.headers})
      .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.httpClient
      .get(`${this.url}search?q=${termino}&type=artist&limit=15`, {headers: this.headers})
      .pipe(map(data => data['artists'].items));
  }
}
