/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
export default async function getTopNewsData(country) {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
    const req = new Request(url);
    const newsResponse = await fetch(req)
        .then((data) => {
            console.log('News response is success!');
            return data;
        }).catch((e) => console.log(e));
    const newsData = await newsResponse.json();
    return newsData;
}
