import { Component, OnInit } from '@angular/core';
import { UiNavMenuFacade } from '../+state/ui-nav-menu/ui-nav-menu.facade';
import { Observable } from 'rxjs';
import { UiNavMenuEntity } from '@nx-tailwind-test/ui-nav-menu';

@Component({
  selector: 'nx-tailwind-test-nav-menu-container',
  template: `<nx-tailwind-test-nav-menu [menuItems]="menuItems$ | async"
    ><ng-content></ng-content
  ></nx-tailwind-test-nav-menu>`,
})
export class NavMenuContainerComponent implements OnInit {
  menuItems$: Observable<UiNavMenuEntity[]> = this.uiNavMenuFacade
    .allUiNavMenu$;
  constructor(private uiNavMenuFacade: UiNavMenuFacade) {}

  ngOnInit(): void {
    this.uiNavMenuFacade.init();
  }
}
