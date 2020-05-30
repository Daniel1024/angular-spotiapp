import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any;
  topTracks: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.activatedRoute.params
      .subscribe(params => {
        this.getArtista(params.id);
        this.getTopTracks(params.id);
      });
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.spotifyService.getArtista(id)
      .subscribe(
        res => {
          this.artista = res;
        },
        error => {
          console.error(error);
        }
      );
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
      .subscribe(
        res => {
          this.topTracks = res;
          console.log(res);
        },
        error => {
          console.error(error);
        }
      );
  }

}
