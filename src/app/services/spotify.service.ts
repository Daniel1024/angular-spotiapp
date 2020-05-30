import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQB5Y7q4yNqgcdxy22-F0zogVjlYAx30cL9FqQe8bk-ULeDmb-E9lNOPNymE6DWmHgoe9ZNzfZIfbViMk40';

  constructor(
    private httpClient: HttpClient
  ) { }

  getNewRelease() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
