/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
export default async function loadNewsData(requetData) {
    const { url, requestTypeParams } = requetData;
    const req = new Request(url);
    console.log(url, requestTypeParams);
    const newsResponse = await fetch(req, requestTypeParams)
        .then((data) => {
            console.log('News response is success!');
            return data;
        }).catch((e) => console.log(e));
    const newsData = await newsResponse.json();
    return newsData;
}
