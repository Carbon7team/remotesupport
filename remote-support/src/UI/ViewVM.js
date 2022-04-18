import { makeAutoObservable } from "mobx";

class ViewVM {
    constructor(rootstore){
        this.rootstore = rootstore;
        this.logged = rootstore.stateUIStore.logged;
        makeAutoObservable(this, {autoBind: true});
    }
}

export default ViewVM;