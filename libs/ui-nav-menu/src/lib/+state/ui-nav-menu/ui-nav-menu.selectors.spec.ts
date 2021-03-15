import { UiNavMenuEntity } from './ui-nav-menu.models';
import {
  initialState,
  uiNavMenuAdapter,
  UiNavMenuPartialState,
} from './ui-nav-menu.reducer';
import * as UiNavMenuSelectors from './ui-nav-menu.selectors';

describe('UiNavMenu Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUiNavMenuId = (it: UiNavMenuEntity) => it['id'];
  const createUiNavMenuEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UiNavMenuEntity);

  let state: UiNavMenuPartialState;

  beforeEach(() => {
    state = {
      uiNavMenu: uiNavMenuAdapter.setAll(
        [
          createUiNavMenuEntity('PRODUCT-AAA'),
          createUiNavMenuEntity('PRODUCT-BBB'),
          createUiNavMenuEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('UiNavMenu Selectors', () => {
    it('getAllUiNavMenu() should return the list of UiNavMenu', () => {
      const results = UiNavMenuSelectors.getAllUiNavMenu(state);
      const selId = getUiNavMenuId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UiNavMenuSelectors.getSelected(state);
      const selId = getUiNavMenuId(<UiNavMenuEntity>result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUiNavMenuLoaded() should return the current loaded status', () => {
      const result = UiNavMenuSelectors.getUiNavMenuLoaded(state);

      expect(result).toBe(true);
    });

    it('getUiNavMenuError() should return the current error state', () => {
      const result = UiNavMenuSelectors.getUiNavMenuError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
