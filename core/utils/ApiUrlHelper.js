import absoluteUrl from 'next-absolute-url'

export default (path, req) => {

    //https://getoutputs.com
    const {origin} = absoluteUrl(req, 'getoutputs.com');
    const apiURL = `${origin}${path}`;
    return apiURL;
};
