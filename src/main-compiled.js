'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _vueValidator = require('vue-validator');

var _vueValidator2 = _interopRequireDefault(_vueValidator);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//注册插件
_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueValidator2.default);

/* eslint-disable no-new */
new _vue2.default({
  el: 'body',
  created: function created() {
    console.log(this.$data);
  },

  components: { App: _App2.default }
});

//# sourceMappingURL=main-compiled.js.map