import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Array<any> =[];
  
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

  
    this.skills.push(work1);
    this.skills.push(work2);
  
  
  
  }

}
