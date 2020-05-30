import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQCPytFjqoYV1vseN3B0WN_5sfAoSuUYdk-h8PfJkwuQWFqXX_OIKCukF4CfuPf2IWirUdWfGpLwm78o_i0';

  constructor(
    private httpClient: HttpClient
  ) { }

  getQuery(query: string): Observable<any> {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.httpClient.get(url, {headers});
  }

  getNewRelease() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
