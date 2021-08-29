// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require('next-plugin-antd-less');

const subPath = '/nextjs-exp';

// @ts-check

/**
 * @type {import('next').NextConfig}
 * */

module.exports = {
  ...withAntdLess({
    lessVarsFilePath: './src/styles/variables.less',
    lessVarsFilePathAppendToEndOfContent: false,
    cssLoaderOptions: {},
  }),
  images: {
    domains: ['static.tvmaze.com'],
  },
  basePath: subPath,
  assetPrefix: `${subPath}/`,
};
