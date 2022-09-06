import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience: Array<any> = [];
  
  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha : "2021-2023",
      ubicacion : "Cordoba, Veracruz",
      puesto : "CO-Founder",
      empresa : "Sinergia",
      logros : [
        {descripcion: "Implementacion de BD "},
        {descripcion: "Uso de nueva metodologia"},
      ]
  
    };
    let work2 = {
      fecha : "2022-2024",
      ubicacion : "FOrtin, Veracruz",
      puesto : "Salesman",
      empresa : "Burguis Los ciegs",
      logros : [
        {descripcion: "Implementacion de nueva estrategia de venta"},
        {descripcion: "Inovacon de B.D. "},
      ]
    };
   
     this.workExperience.push(work1);
     this.workExperience.push(work2);
   
   
   
   }
   
   }