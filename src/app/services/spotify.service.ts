import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQCLd53ZIQhUuYgp91kuLYhpBGwEelCve0Qb72RzqxKjtNbd9hT5TdpeE06nt2WshyJMown4N4nDRyGPKLY';

  constructor(
    private httpClient: HttpClient
  ) {
  }

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

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string, country: string = 'us') {
    return this.getQuery(`artists/${id}/top-tracks?country=${country}`)
      .pipe(map(data => data['tracks']));
  }
}
