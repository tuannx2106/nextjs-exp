// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require('next-plugin-antd-less');

const subPath = '/click-to-call-csv';

module.exports = {
  ...withAntdLess({
    lessVarsFilePath: './src/styles/variables.less',
    lessVarsFilePathAppendToEndOfContent: false,
    cssLoaderOptions: {},
  }),
  basePath: subPath,
  assetPrefix: `${subPath}/`,
};
