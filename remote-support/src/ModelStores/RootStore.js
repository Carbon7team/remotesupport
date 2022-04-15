import DatasetStore from "./DatasetStore";
import StateUIStore from "./StateUIStore";

class Rootstore{
    constructor(){
        this.datasetStore = new DatasetStore(this);
        this.stateUIStore = new StateUIStore(this)
    }
}

export default Rootstore;