var testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('../src', true, /^((?!__tests__).)*.js$/);
srcContext.keys().forEach(srcContext);
