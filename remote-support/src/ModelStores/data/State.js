import { makeAutoObservable } from "mobx";


class State {
    constructor(code = "", name = "", active = false){
        this._code = code;
        this._name = name;
        this._active = active;
        makeAutoObservable(this);
    }

    get code(){
        return this._code;
    }

    get name(){
        return this._name;
    }

    get active(){
        return this._active;
    }
}

export default State;