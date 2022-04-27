import { makeAutoObservable } from 'mobx';

class Measurement{
    constructor(code = "", name = "", value = NaN, unitOfMeasure = ""){
        this._code = code;
        this._name = name;
        this._value = value;
        this._unitOfMeasure = unitOfMeasure;
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

    get unitOfMeasure(){
        return this._unitOfMeasure;
    }
}

export default Measurement;