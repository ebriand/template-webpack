export default getConfig();

function getConfig() {
  let config;
  switch (process.env.NODE_ENV) {
  case 'production':
    config = [require('./webpack/webpack.config.back.babel').default,
      require('./webpack/webpack.config.front.prod.babel').default];
    break;
  default:
    config = process.env.COMPONENT === 'back' ?
      require('./webpack/webpack.config.back.babel').default :
      require('./webpack/webpack.config.front.dev.babel').default
    break;
  }
  console.log(config);
  return config;
}
