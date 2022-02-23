export class Vino {

    public _name: string = "";
    public _pvp: number = 0;
    
    constructor(name: string, pvp: number){
        this._name=name;
        this._pvp=pvp;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get pvp(): number {
        return this._pvp;
    }
    public set pvp(value: number) {
        this._pvp = value;
    }

    insertaVino(name:string,pvp:number){
        this._name=name;
        this._pvp=pvp;
    }
    
}
