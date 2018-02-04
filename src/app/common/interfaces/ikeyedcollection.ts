export interface IKeyedCollection<T> {
    Add(key: number, value: T);
    ContainsKey(key: number): boolean;
    Count(): number;
    Item(key: number): T;
    Keys(): string[];
    Remove(key: number): T;
    Values(): T[];
}
