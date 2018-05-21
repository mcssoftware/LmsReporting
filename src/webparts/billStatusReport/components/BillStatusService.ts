import { BillDigestApi } from "mcs-lms-core";
import { groupBy } from "@microsoft/sp-lodash-subset";

export class BillStatusService {
    private _billDigestApi: BillDigestApi;
    constructor() {
        this._billDigestApi = new BillDigestApi();
    }

    public getBillStatus(): void {
        // tslint:disable-next-line:max-line-length
        // this._billDigestApi.getListItems("AmendmentLookupId eq null and StatusDate ne null and Duplicate eq 0 and BillDigestReportable eq 1",
        //     null, null, "StatusDate", false)
        //     .then((result) => {
        //         groupBy(result, )
        //     });
    }

}