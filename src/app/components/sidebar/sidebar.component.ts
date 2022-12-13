import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//@ts-ignore
import Typewriter from 't-writer.js'

interface LinkModel {
  link: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('asTitle') asTitle!: ElementRef;
  links: Array<LinkModel> = [
    {
      link: 'https://github.com/AlmironLeandro',
      icon: ' <i class="uil uil-github-alt"></i>'
    },
    {
      link: 'https://www.linkedin.com/in/leandro-almiron-/',
      icon: ' <i class="uil uil-linkedin"></i>'
    },
    {
      link: 'mailto:leandroealmiron@hotmail.com',
      icon: ' <i class="uil uil-envelope"></i>'
    },
  ]
  constructor() { }
  ngAfterViewInit(): void {
    this.initEffect()
  }

  ngOnInit(): void {
  }


  initEffect = () => {
    const target = this.asTitle.nativeElement;



    const options = {
      loop: true,
      typeColor: 'white',

    }

    const writer = new Typewriter(target, options)

    writer
      .changeCursorColor('white')
      .type('Leandro Almirón')
      .rest(10000)
      .start();
  }

}
