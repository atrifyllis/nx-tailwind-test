import { Component, Input } from '@angular/core';
import { UiNavMenuEntity } from '@nx-tailwind-test/ui-nav-menu';

@Component({
  selector: 'nx-tailwind-test-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  @Input() menuItems: UiNavMenuEntity[] | null = [];
}
