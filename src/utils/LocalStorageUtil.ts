export class LocalStorageUtil
{
    static setItem(key: string, value: string): void
    {
        localStorage.setItem(key, value);
    }

    static getItem(key: string): string | null
    {
        return localStorage.getItem(key);
    }

    static removeItem(key: string): void
    {
        localStorage.removeItem(key);
    }

    static clear(): void
    {
        localStorage.clear();
    }

    // 监听localStorage指定Key
    static watch(key: string, callback: (value: string | null) => void): void
    {
        const value = this.getItem(key);
        callback(value);
        window.addEventListener('storage', (event) =>
        {
            if (event.key === key) {
                callback(event.newValue);
            }
        });
    }

    // 取消监听localStorage指定Key
    static unwatch(key: string, callback: (value: string | null) => void): void
    {
        window.removeEventListener('storage', (event) =>
        {
            if (event.key === key) {
                callback(event.newValue);
            }
        });
    }

    // 监听所有localStorage
    static watchAll(callback: (key: string, value: string | null) => void): void
    {
        window.addEventListener('storage', (event) => {
            return callback(event?.key, event.newValue);
        });
    }
    // 取消监听所有localStorage
    static unwatchAll(callback: (key: string, value: string | null) => void): void
    {
        window.removeEventListener('storage', (event) => {
            return callback(event?.key, event.newValue);
        });
    }
}
