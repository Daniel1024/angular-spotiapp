import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  verArtista(item: any) {
    let artistaId = item.id;
    if (item.type == 'album') {
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistaId]);
  }

}
