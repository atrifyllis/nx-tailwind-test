import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  State,
  UI_NAV_MENU_FEATURE_KEY,
  uiNavMenuAdapter,
  UiNavMenuPartialState,
} from './ui-nav-menu.reducer';

// Lookup the 'UiNavMenu' feature state managed by NgRx
export const getUiNavMenuState = createFeatureSelector<
  UiNavMenuPartialState,
  State
>(UI_NAV_MENU_FEATURE_KEY);

const { selectAll, selectEntities } = uiNavMenuAdapter.getSelectors();

export const getUiNavMenuLoaded = createSelector(
  getUiNavMenuState,
  (state: State) => state.loaded
);

export const getUiNavMenuError = createSelector(
  getUiNavMenuState,
  (state: State) => state.error
);

export const getAllUiNavMenu = createSelector(
  getUiNavMenuState,
  (state: State) => selectAll(state)
);

export const getUiNavMenuEntities = createSelector(
  getUiNavMenuState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUiNavMenuState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUiNavMenuEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
