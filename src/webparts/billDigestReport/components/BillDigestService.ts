import { IBills, BillApi, BillDigestApi } from "mcs-lms-core";

export class BillDigestService {
    private _billDigestApi: BillDigestApi;
    private _billApi: BillApi;
    constructor() {
        this._billDigestApi = new BillDigestApi();
        this._billApi = new BillApi();
    }

    public getBillDigest(lsonumber: string): void {
        this._billApi.getBill(lsonumber).then((result: IBills) => {
            this.getBillDigestByBill(result);
        });
        // this._billDigestApi.getListItems("")
    }

    public getBillDigestByBill(bill: IBills): void {
        this._billDigestApi.getBillDigestForBill(bill);
    }
}