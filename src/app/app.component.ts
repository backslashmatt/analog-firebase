import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AsyncPipe } from '@angular/common';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [HelloService],
  imports: [RouterOutlet, SidenavComponent, AsyncPipe],
  template: `
    <app-sidenav
      [userName]="helloService.getHello() | async"
      [userSignedIn]="true">
      <router-outlet></router-outlet>
    </app-sidenav>
  `,
  styles: [
    `
      :host {
        text-align: center;
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {
  helloService = inject(HelloService);
}
