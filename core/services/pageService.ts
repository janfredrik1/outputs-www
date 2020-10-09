import {ConstantsContentTypes} from "../constants/constants.content.types";
import {ContentfulApi} from "../ext-api/contentfulApi";

export class PageService {

    private static instance: PageService;
    private client = ContentfulApi.getInstance().getContentfulClient();

    private constructor() {
    }

    static getInstance(): PageService {
        if (!PageService.instance) {
            PageService.instance = new PageService();
        }

        return PageService.instance;
    }

    public async fetchPostBySlug(slug) {

        const entries = await this.client.getEntries(
            {
                include: 3,
                'fields.slug': slug,
                'content_type': ConstantsContentTypes.CONTENT_TYPE_POST
            }
        )
        if (entries.items) return entries.items[0];
        console.log(`Error getting Entries for ${ConstantsContentTypes.CONTENT_TYPE_POST}.`)
    }

    public async fetchPageBySlug(slug) {

        const entries = await this.client.getEntries(
            {
                include: 3,
                'fields.slug': slug,
                'content_type': ConstantsContentTypes.CONTENT_TYPE_PAGE
            }
        )
        if (entries.items) return entries.items[0];
        console.log(`Error getting Entries for ${ConstantsContentTypes.CONTENT_TYPE_PAGE}.`)
    }

    public async fetchPageByKey(key) {
        const entries = await this.client.getEntries(
            {
                include: 3,
                'fields.key': key,
                'content_type': ConstantsContentTypes.CONTENT_TYPE_PAGE
            }
        ).catch((error) => {
            console.log(error);
        });
        if (entries.items) return entries.items[0];
        console.log(`Error getting Entries for ${ConstantsContentTypes.CONTENT_TYPE_PAGE}.`)
    }
}
