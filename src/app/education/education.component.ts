import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = []
  
  constructor() { }

  ngOnInit(): void {
    let ed1 = {
      fecha : "2021-2023",
      ubicacion : "Fortin, Veracruz",
      puesto : "ofimatica",
      empresa : "CETIS",
      logros : [
        {descripcion: "Titulo ofi"},

      ]
  
    };
  
    this.education.push(ed1);

  
  
  
  }

}
