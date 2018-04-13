const htmlLoader = require('html-loader');

module.exports = {
    process(src) {
        console.log(src);
        return htmlLoader(src);
    }
};
