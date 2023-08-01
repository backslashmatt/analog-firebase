import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import {AuthService} from "../../services/auth.service";

export interface RouteLayout {
  path: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styles: [
    `
      .sidenav-container {
        height: 95vh;
      }

      .sidenav-content {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      .sidenav {
        min-width: 10%;
        box-shadow: darkgray 1px 0 10px;
      }

      .no-click {
        pointer-events: none;
      }

      .right-align {
        text-align: center;
      }

      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class SidenavComponent {
  @Input() title: string = 'Test App';
  @Input() routes: RouteLayout[] = [];

  private _auth = inject(AuthService);

  public get userName(): string {
    return this._auth.userData?.displayName ?? '';
  }

  public get userSingedIn(): boolean {
    return this._auth.isLoggedIn;
  }

  public async login(): Promise<void> {
    await this._auth.GoogleAuth();
  }

  public async logout(): Promise<void> {
    await this._auth.SignOut();
  }
}
