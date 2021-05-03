import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  listServices = [];

  constructor() {
    this.listServices = [
      {
        name: 'Autenticación Digital',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntzzril dfderteertc',
        logo: 'IDGOBPEVERDE.png',
      },
      {
        name: 'Firma Digital',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntzzril dfderteertc',
        logo: 'ico_firmadigital.png',
      },
      {
        name: 'Validación de Firma Digital',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntzzril dfderteertc',
        logo: 'ico_validacion_firma_digital.png',
      }
    ];

  }

  ngOnInit(): void {
  }

}
