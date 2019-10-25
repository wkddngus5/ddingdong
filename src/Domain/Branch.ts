import Domain from './Domain.ts';


@Domain
export default class Branch {
    private _make: string;
    constructor(make: string) {
        console.log('-- this constructor invoked --');
        this._make = make;
    }
}
