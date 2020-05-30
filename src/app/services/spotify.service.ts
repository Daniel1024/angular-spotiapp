import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQBxtHKO53hHPT42ao3-V23Ezuy86L1J9mvu0tX43CMUH8gTCZiFkJ8IkzgFRhT9OP3ok9L3JoQy-id-KVQ';

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
