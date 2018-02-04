import { IKeyedCollection } from 'app/common/interfaces/ikeyedcollection';

export class Dictionary<T> implements IKeyedCollection<T> {
    private items: { [index: number]: T } = {};

    private count = 0;

    public ContainsKey(key: number): boolean {
        return this.items.hasOwnProperty(key);
    }

    public Count(): number {
        return this.count;
    }

    public Add(key: number, value: T) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }
        this.items[key] = value;
    }

    public Remove(key: number): T {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }

    public Item(key: number): T {
        return this.items[key];
    }

    public Keys(): string[] {
        let keySet: string[] = [];

        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }

        return keySet;
    }

    public Values(): T[] {
        let values: T[] = [];

        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }

        return values;
    }
}