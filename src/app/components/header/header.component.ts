import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme: Theme = 'light-theme';
  public isDarkTheme = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
    this.isDarkTheme = !this.isDarkTheme
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
}

export type Theme = 'light-theme' | 'dark-theme';