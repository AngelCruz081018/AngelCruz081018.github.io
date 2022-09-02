import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
            fecha: "2020-2022",
            ubicacion: "Fortin, Ver",
            puesto: "Chalan",
            empresa: "miCasa",
            logros: [
              {descripcion: "Implementar una BD"},
              {descripcion: "Implementar metodologia agil"} 
            ]
    };
    let work2 = {
            fecha: "2016-2024",
            ubicacion: "Cordoba, Ver",
            puesto: "CEO",
            empresa: "Nose",
            logros: [
              {descripcion: "Creacion de interfaz de usuario amigable"},
              {descripcion: "Construir la base de datos"} 
            ]

    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);


  }

}
