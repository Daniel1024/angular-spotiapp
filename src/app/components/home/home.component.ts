import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  mensaje = '';

  constructor(
    private spotifyService: SpotifyService
  ) {
    this.spotifyService.getNewRelease()
      .subscribe(
        (data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        },
        error => {
          this.loading = false;
          this.error = true;
          this.mensaje = error.error.error.message;
        });
  }

  ngOnInit(): void {
  }

}
