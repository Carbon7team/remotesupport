import { makeAutoObservable } from 'mobx-react-lite';

class Measurement{
    constructor(code = "", name = "", value = NaN, type = ""){
        this._code = code;
        this._name = name;
        this._value = value;
        this._type = type;
        makeAutoObservable(this);
    }

    get code(){
        return this._code;
    }

    get name(){
        return this._name;
    }

    get value(){
        return NaN ? null : this._value;
    }

    get type(){
        return this._type;
    }
}

export default Measurement;