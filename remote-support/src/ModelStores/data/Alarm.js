import { makeAutoObservable } from 'mobx-react-lite';

class Alarm {
    constructor(code = "", name = "", severity = ""){
        this._code = code;
        this._name = name;
        this._severity = severity;
        makeAutoObservable(this);
    }

    get code(){
        return this._code;
    }

    get name(){
        return this._name;
    }

    get severity(){
        return this._severity;
    }
}

export default Alarm;