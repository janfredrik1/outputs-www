import fetch from "isomorphic-unfetch";
import ApiUrlHelper from "../../core/utils/ApiUrlHelper";

export class ApiFetchService {

    private static instance: ApiFetchService;

    private constructor() {
    }

    static getInstance(): ApiFetchService {
        if (!ApiFetchService.instance) {
            ApiFetchService.instance = new ApiFetchService();
        }

        return ApiFetchService.instance;
    }

    public async fetch(path, req) {
        const apiUrl = ApiUrlHelper(path, req)
        const res = await fetch(apiUrl);
        const json = await res.json();
        return json;
    }
}
