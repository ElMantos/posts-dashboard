const path = require('path');

const PREFIX = 'src';

const createSourceAlias = (dirName) => path.resolve(__dirname, `${PREFIX}/${dirName}`);

module.exports = {
    '@components': createSourceAlias('components'),
    '@api': createSourceAlias('api')
}