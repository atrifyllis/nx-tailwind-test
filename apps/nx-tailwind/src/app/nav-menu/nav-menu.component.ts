import { Component } from '@angular/core';

@Component({
  selector: 'nx-tailwind-test-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  readonly MENU_ITEMS = ['Menu Item 1', 'Menu Item 2'];
}
