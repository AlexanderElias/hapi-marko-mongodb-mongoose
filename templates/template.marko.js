function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      ___marginals_header_marko = __loadTemplate(require.resolve("../marginals/header.marko"), require),
      ___marginals_footer_marko = __loadTemplate(require.resolve("../marginals/footer.marko"), require),
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><meta charset="utf-8"><title>' +
      escapeXml(data.title) +
      '</title><link rel="stylesheet" href="/css/all.css"></head><body><header>');
    __helpers.i(out, ___marginals_header_marko, data);

    out.w('</header><main>');
    __helpers.i(out, __loadTemplate(data.includeName, require), data);

    out.w('</main><footer>');
    __helpers.i(out, ___marginals_footer_marko, data);

    out.w('</footer></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);