import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-tailwind-test-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  @Input() menuItems: string[] = [];
}
