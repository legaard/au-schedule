import { LocalWebStorage, WebStorage } from './local-storage';

describe('Local Storage', () => {
  let sut: WebStorage;

  beforeAll(() => {
    sut = new LocalWebStorage();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should save data correctly', () => {
    const keyOne = 'test-key-1';
    const keyTwo = 'test-key-2';
    const firstData = {
      id: 1,
      value: 'test-value-1'
    };
    const secondData = {
      id: 2,
      value: 'test-value-2'
    };

    sut.save(keyOne, firstData);
    sut.save(keyTwo, secondData);
    const firstSavedData = sut.get<{id: number, value: string}>(keyOne);
    const secondSavedData = sut.get<{id: number, value: string}>(keyTwo);

    expect(firstSavedData.id).toBe(firstData.id);
    expect(firstSavedData.value).toBe(firstData.value);
    expect(secondSavedData.id).toBe(secondData.id);
    expect(secondSavedData.value).toBe(secondData.value);
  });

  it('should remove data correctly', () => {
    const key = 'test-key';
    const data = {
      id: 1,
      value: 'test-value-1'
    };

    sut.save(key, data);
    sut.remove(key);
    const savedData = sut.get(key);

    expect(savedData).toBeNull();
  });

  it('should clear data correctly', () => {
    const array = [];

    for (let i = 0; i < 10; i ++) {
      array[i] = `key-${i}`;
    }

    array.forEach((value, index) => sut.save(value, index));

    sut.clear();

    array.forEach((value, index) => expect(sut.get(`key-${index}`)).toBeNull());
  });
});
