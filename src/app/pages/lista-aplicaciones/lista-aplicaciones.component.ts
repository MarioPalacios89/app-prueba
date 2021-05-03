import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-aplicaciones',
  templateUrl: './lista-aplicaciones.component.html',
  styleUrls: ['./lista-aplicaciones.component.scss'],
})
export class ListaAplicacionesComponent implements OnInit {
  listServices = [];
  _listServices = [];

  @ViewChild('searcher') searcher:ElementRef;

  constructor() {
    this.listServices = [
      {
        name: 'Aplicación 1',
        identifier: 'rgwcyGQ1mu',
        environment: 'Producción',
        org: 'RENIEC',
        logo: 'android.jpg',
      },
      {
        name: 'Aplicación 2',
        identifier: 'gMYw2JWQKn',
        environment: 'Desarrollo',
        org: 'RENIEC',
        logo: 'android.jpg',
      },
      {
        name: 'Aplicación 3',
        identifier: 'novGTzaRBt',
        environment: 'Desarrollo',
        org: 'RENIEC',
        logo: 'android.jpg',
      },
      {
        name: 'Aplicación 4',
        identifier: '27ZBBIoLXr',
        environment: 'Desarrollo',
        org: 'RENIEC',
        logo: 'android.jpg',
      },
    ];
    this._listServices = [...this.listServices];
    console.log(this._listServices);
  }

  ngOnInit(): void {}

  filterServices(name: string = '') {
    if (name === '') {
      this.listServices = [];
      this.listServices = [...this._listServices];
      return true;
    }

    this.listServices = [];
    this.listServices = this._listServices.filter(
      (x) => x.name.indexOf(name) > -1
    );
    return true;
  }
}
