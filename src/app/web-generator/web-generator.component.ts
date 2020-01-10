import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-generator',
  templateUrl: './web-generator.component.html',
  styleUrls: ['./web-generator.component.css']
})
export class WebGeneratorComponent implements OnInit {

  hola = [
    {id: 1, name: "Tienda", status: true, type: 1 },
    {id: 2, name: "Legal", status: true, type: 1 },
    {id: 3, name: "Contabilidad", status: true, type: 1 },
    {id: 4, name: "Industrial", status: true, type: 1 },
    {id: 5, name: "Música", status: true, type: 1 },
    {id: 6, name: "Informática", status: true, type: 1 },
    {id: 7, name: "Escolar", status: true, type: 1 },
    {id: 8, name: "Médico", status: true, type: 1 },
    {id: 9, name: "Religión", status: true, type: 1 },
    {id: 10, name: "Científica", status: true, type: 1 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
