import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { localStorageSync } from './local-storage-sync.reducer';
import { WebStorage } from '../../common/utils/local-storage';

describe('Local Storage Sync', () => {
  let sut: ActionReducer<any>;
  let reducerMock: ActionReducer<any>;
  let storageMock: WebStorage;
  let reducerValue: any;
  const storageKey = 'test-storage-key';

  beforeEach(() => {
    storageMock = {
      get: (key) => undefined,
      save: (key, value) => {},
      remove: (key) => {},
      clear: () => {}
    };

    reducerMock = (state, action) => reducerValue;

    sut = localStorageSync({
      slices: ['sliceOne', 'sliceTwo'],
      key: storageKey,
      storage: storageMock
    })(reducerMock);
  });

  it('should on Action with type \'INIT\' load data from storage and update state properties', () => {
    reducerValue = { sliceOne:  undefined, sliceTwo: undefined };
    spyOn(storageMock, 'get').and.returnValue({ sliceOne: 1, sliceTwo: 2 });

    const newState = sut({}, { type: INIT });

    expect(newState.sliceOne).toBe(1);
    expect(newState.sliceTwo).toBe(2);
    expect(storageMock.get).toHaveBeenCalledWith(storageKey);
  });

  it('should on Action with type \'UPDATE\' load data from storage and update state properties', () => {
    reducerValue = { sliceOne:  undefined, sliceTwo: undefined };
    spyOn(storageMock, 'get').and.returnValue({ sliceOne: 1, sliceTwo: 2 });

    const newState = sut({}, { type: UPDATE });

    expect(newState.sliceOne).toBe(1);
    expect(newState.sliceTwo).toBe(2);
    expect(storageMock.get).toHaveBeenCalledWith(storageKey);
  });

  it('should only update state based on slices provided in configuration', () => {
    reducerValue = { sliceOne:  undefined, sliceTwo: undefined, sliceThree: undefined };
    spyOn(storageMock, 'get').and.returnValue({ sliceOne: 1, sliceTwo: 2, sliceThree: 3 });

    const newState = sut({}, { type: UPDATE });

    expect(newState.sliceOne).toBe(1);
    expect(newState.sliceTwo).toBe(2);
    expect(newState.sliceThree).toBeUndefined();
  });

  it('should on Action with type \'INIT\' only update properties on state if data exists in storage', () => {
    reducerValue = { sliceOne:  undefined, sliceTwo: undefined };
    spyOn(storageMock, 'get').and.returnValue(undefined);

    const newState = sut({}, { type: INIT });

    expect(newState.sliceOne).toBeUndefined();
    expect(newState.sliceTwo).toBeUndefined();
  });

  it('should on Action with type \'UPDATE\' only update properties on state if data exists in storage', () => {
    reducerValue = { sliceOne:  undefined, sliceTwo: undefined };
    spyOn(storageMock, 'get').and.returnValue(undefined);

    const newState = sut({}, { type: UPDATE });

    expect(newState.sliceOne).toBeUndefined();
    expect(newState.sliceTwo).toBeUndefined();
  });

  it('should on Action with type \'UPDATE\' only update properties on state if data exists in storage', () => {
    reducerValue = { sliceOne:  undefined, sliceTwo: undefined };
    spyOn(storageMock, 'get').and.returnValue(undefined);

    const newState = sut({}, { type: UPDATE });

    expect(newState.sliceOne).toBeUndefined();
    expect(newState.sliceTwo).toBeUndefined();
  });

  it('should on Action save data to storage and return state', () => {
    reducerValue = { sliceOne:  1, sliceTwo: 2, sliceThree: 3 };
    spyOn(storageMock, 'save');

    const newState = sut({}, { type: 'Random Action' });

    expect(storageMock.save).toHaveBeenCalledWith(storageKey, { sliceOne: 1, sliceTwo: 2 });
    expect(newState.sliceOne).toBe(1);
    expect(newState.sliceTwo).toBe(2);
    expect(newState.sliceThree).toBe(3);
  });
});
