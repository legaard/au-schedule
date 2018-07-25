import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { LocalWebStorage, WebStorage } from '../../common/utils/local-storage';

export function localStorageSync(config: LocalStorageConfiguration): (actionReducer: ActionReducer<any>) => ActionReducer<any> {
  const { slices, key } = config;
  let storage = config.storage;

  if (!storage) {
    storage = new LocalWebStorage();
  }

  return (reducer) => {
    return(state, action) => {
      // tslint:disable-next-line:prefer-const
      let newState = reducer(state, action);

      if (action.type === INIT || action.type === UPDATE) {
        const loadedData = storage.get<any>(key);

        if (loadedData) {
          slices.forEach(x => newState[x] = loadedData[x]);
        }
      } else {
        const dataToSave = slices.reduce((prev, value) => {
          prev[value] = newState[value];
          return prev;
        }, {});

        storage.save<any>(key, dataToSave);
      }

      return newState;
    };
  };
}

export interface LocalStorageConfiguration {
  slices: string[];
  key: string;
  storage?: WebStorage;
}
