export class ContentfulApi {

    private static instance: ContentfulApi;
    private client = require('contentful').createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    });

    private constructor() {
    }

    static getInstance(): ContentfulApi {
        if (!ContentfulApi.instance) {
            ContentfulApi.instance = new ContentfulApi();
        }

        return ContentfulApi.instance;
    }

    public getContentfulClient() {
        return this.client;
    }
}
