import { UiNavMenuEntity } from './ui-nav-menu.models';
import * as UiNavMenuActions from './ui-nav-menu.actions';
import { initialState, reducer, State } from './ui-nav-menu.reducer';

describe('UiNavMenu Reducer', () => {
  const createUiNavMenuEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UiNavMenuEntity);

  describe('valid UiNavMenu actions', () => {
    it('loadUiNavMenuSuccess should return set the list of known UiNavMenu', () => {
      const uiNavMenu = [
        createUiNavMenuEntity('PRODUCT-AAA'),
        createUiNavMenuEntity('PRODUCT-zzz'),
      ];
      const action = UiNavMenuActions.loadUiNavMenuSuccess({ uiNavMenu });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
