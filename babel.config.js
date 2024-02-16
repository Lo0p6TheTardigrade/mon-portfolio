module.exports = {
  targets: '>0.5%',
  assumptions: {
    noDocumentAll: true,
    noClassCalls: true,
  },
  presets: [['@babel/preset-flow'], ['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
};
