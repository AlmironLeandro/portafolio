import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


interface itemSkillModel {
  porcent: string;
  icon: string;

}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, AfterViewInit {
  // @ViewChild('itemSkill') itemSkill!: ElementRef

  public itemSkill: Array<itemSkillModel> = [
    {
      porcent: '70%',
      icon: '<i class="fa-brands fa-angular"></i>'
    },
    {
      porcent: '60%',
      icon: '<i class="fi fi-brands-typescript"></i>'
    },
    {
      porcent: '55%',
      icon: '<i class="uil uil-java-script"></i>'
    },
    {
      porcent: '50%',
      icon: '<i class="uil uil-html5"></i>'
    },
    {
      porcent: '45%',
      icon: '<i class="uil uil-react"></i>'
    },
    {
      porcent: '40%',
      icon: '<i class="fa-brands fa-github"></i>'
    },
    {
      porcent: '30%',
      icon: '<i class="fa-brands fa-sass"></i>'
    },
  ]
  constructor() { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

}
