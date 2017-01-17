function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = function (req, res, template, viewData) {
  var app = this,
      route = req.params.route || 'product';

  template = template || app.locals.templateMap[route];
  viewData = viewData || { title: capitalize(route), cache:false };

  res.render(template, viewData);
};
