import { Component, OnInit } from '@angular/core';
import { ProjectFilterPipe } from '../pipes/project-filter.pipe'

@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrls: ['./project-menu.component.css']
})
export class ProjectMenuComponent implements OnInit {

  constructor() { }

  filtro = '';
  lista = [
    {id: 1, name:"Página Web", status: true},
    {id: 2, name:"Control de Inventarios", status: true},
    {id: 3, name:"Tienda Online", status: true},
    {id: 4, name:"Aplicaciones móviles", status: true},
    {id: 5, name:"Control de Mantenimiento", status: true},
    {id: 6, name:"Control Escolar", status: true},
    {id: 7, name:"Manejo de Redes Sociales", status: true}
  ];
  ngOnInit() {
  }

}
