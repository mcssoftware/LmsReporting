import { BillApi } from "mcs-lms-core";

export class BillDigestService {
    private _billApi: BillApi;
    constructor() {
        this._billApi = new BillApi();
    }
}