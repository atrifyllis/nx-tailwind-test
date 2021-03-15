import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUiNavMenu from './+state/ui-nav-menu/ui-nav-menu.reducer';
import { UiNavMenuEffects } from './+state/ui-nav-menu/ui-nav-menu.effects';
import { UiNavMenuFacade } from './+state/ui-nav-menu/ui-nav-menu.facade';
import { NavMenuContainerComponent } from './nav-menu/nav-menu-container.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forFeature(
      fromUiNavMenu.UI_NAV_MENU_FEATURE_KEY,
      fromUiNavMenu.reducer
    ),
    EffectsModule.forFeature([UiNavMenuEffects]),
  ],
  declarations: [NavMenuComponent, NavMenuContainerComponent],
  exports: [NavMenuContainerComponent],
  providers: [UiNavMenuFacade],
})
export class UiNavMenuModule {}
