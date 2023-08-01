import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidenavComponent} from "./ components/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent],
  template: `<app-sidenav>
    <router-outlet></router-outlet>
  </app-sidenav>`,
  styles: [
    `
      :host {
        text-align: center;
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {}
