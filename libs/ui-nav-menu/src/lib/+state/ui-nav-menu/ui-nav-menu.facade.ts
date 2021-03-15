import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as UiNavMenuActions from './ui-nav-menu.actions';
import * as UiNavMenuSelectors from './ui-nav-menu.selectors';
import { UiNavMenuPartialState } from './ui-nav-menu.reducer';

@Injectable()
export class UiNavMenuFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UiNavMenuSelectors.getUiNavMenuLoaded));
  allUiNavMenu$ = this.store.pipe(select(UiNavMenuSelectors.getAllUiNavMenu));
  selectedUiNavMenu$ = this.store.pipe(select(UiNavMenuSelectors.getSelected));

  constructor(private store: Store<UiNavMenuPartialState>) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(UiNavMenuActions.init());
  }
}
