export class LocalWebStorage implements WebStorage {
  save<T>(key: string, value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Failed to save data to local storage', error);
    }
  }

  remove(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove data from local storage:', error);
    }
  }

  get<T>(key: string): T {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data);
    } catch (error) {
      console.warn('Failed to get data from local storage:', error);
      return null;
    }
  }

  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('Failed to get data from local storage', error);
    }
  }
}

export interface WebStorage {
  save<T>(key: string, value: T): void;
  get<T>(key: string): T;
  remove(key: string): void;
  clear(): void;
}
