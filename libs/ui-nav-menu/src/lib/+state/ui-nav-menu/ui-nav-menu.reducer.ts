import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as UiNavMenuActions from './ui-nav-menu.actions';
import { UiNavMenuEntity } from './ui-nav-menu.models';

export const UI_NAV_MENU_FEATURE_KEY = 'uiNavMenu';

export interface State extends EntityState<UiNavMenuEntity> {
  selectedId?: string | number; // which UiNavMenu record has been selected
  loaded: boolean; // has the UiNavMenu list been loaded
  error?: string | null; // last known error (if any)
}

export interface UiNavMenuPartialState {
  readonly [UI_NAV_MENU_FEATURE_KEY]: State;
}

export const uiNavMenuAdapter: EntityAdapter<UiNavMenuEntity> = createEntityAdapter<UiNavMenuEntity>();

export const initialState: State = uiNavMenuAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const uiNavMenuReducer = createReducer(
  initialState,
  on(UiNavMenuActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UiNavMenuActions.loadUiNavMenuSuccess, (state, { uiNavMenu }) =>
    uiNavMenuAdapter.setAll(uiNavMenu, { ...state, loaded: true })
  ),
  on(UiNavMenuActions.loadUiNavMenuFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return uiNavMenuReducer(state, action);
}
