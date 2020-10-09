import absoluteUrl from 'next-absolute-url'

export default (path, req) => {

    //https://getoutputs.com
    const {origin} = absoluteUrl(req);
    const apiURL = `${origin}${path}`;
    return apiURL;
};
