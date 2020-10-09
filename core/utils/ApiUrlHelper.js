import absoluteUrl from 'next-absolute-url'

export default (path, req) => {

    const {origin} = absoluteUrl(req);
    const apiURL = `${origin}${path}`;
    console.log('apiUrl:');
    console.log(apiURL);
    return apiURL;
};
