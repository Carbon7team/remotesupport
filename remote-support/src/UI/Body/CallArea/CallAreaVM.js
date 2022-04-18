import { makeAutoObservable } from "mobx";

class CallAreaVM {
    constructor(rootstore){
        this.rootstore = rootstore;
        this.stream = rootstore.stateUIStore.stream;
        makeAutoObservable(this, {autoBind: true});
    }
}

export default CallAreaVM;