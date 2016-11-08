export default getConfig();

function getConfig() {
  if (process.env.NODE_ENV === 'production') {
    return [require('./webpack/webpack.config.back.babel').default,
            require('./webpack/webpack.config.front.babel').default];
  }
  return process.env.COMPONENT === 'back' ?
      require('./webpack/webpack.config.back.babel').default :
      require('./webpack/webpack.config.front.babel').default;
}
