var path = require('path'),
    isMainModule = require.main === module,
    isRunningthroughMocha = global.describe !== undefined && global.it !== undefined,
    pathFix = isMainModule || isRunningthroughMocha ? '/' : '/../';

module.exports = function (thePath) {
  if (!thePath) return new Error('You must supply a path');
  return require(path.normalize(__dirname + pathFix + thePath));
};
