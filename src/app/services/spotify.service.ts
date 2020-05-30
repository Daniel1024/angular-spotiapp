import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNewRelease() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDNLbvTc_iRkdyPsh2lJROnmJCxwlZP9xJOd8ixRut3cRK2sFxsc0WRYWVIkdHzEnb9Ez_sf5QZJYLiXAM'
    });

    this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      });
  }
}
