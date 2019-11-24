const restResponses = {
    commonSerever: {
        text: 'Something went wrong',
        code: 500,
    },
    incorrectData: {
        text: 'Bad request (probably data incorrect)',
        code: 400,
    },
};

module.exports.sendErr = function sendErr(res, err = restResponses.commonSerever) {
    const html = `<h1>${err.code}</h1><h2>${err.text}</h2>`;
    res.status(err.code).send(html);
};

module.exports.sendOk = function sendOk(res) {
    res.status(200).end();
};

module.exports.restResponses = restResponses;
