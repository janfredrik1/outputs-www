import {PageService} from "../../../core/services/pageService";


export default async (req, res) => {

    const {
        query: {page},
    } = req;

    const pageService = PageService.getInstance();

    const item = await pageService
        .fetchPageByKey(page)

    if (!item) {
        return res.status(404).json({
            status: 404,
            message: 'Fant ikke siden du lette etter'
        })
    }

    return res.json(item);

};
