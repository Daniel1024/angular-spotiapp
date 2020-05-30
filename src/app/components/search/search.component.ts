import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.spotifyService.getArtista(termino)
      .subscribe((data: any) => {
        this.artistas = data;
      })
  }

}
