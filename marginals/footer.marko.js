function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('footer');
  };
}
(module.exports = require("marko").c(__filename)).c(create);