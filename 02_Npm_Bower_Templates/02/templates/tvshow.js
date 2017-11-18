(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tvshow'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"movie\">\n    <div class=\"movie-image\">\n        <a href=\"#\">\n                <span class=\"play\">\n                    <span class=\"name\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n                </span>\n            <img src=\""
    + alias4(((helper = (helper = helpers.imgUrl || (depth0 != null ? depth0.imgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"/>\n        </a>\n    </div>\n\n    <div class=\"rating\">\n        <p>RATING</p>\n\n        <div class=\"stars\">\n            <div class=\"stars-in stars-"
    + alias4((helpers.adjust_stars || (depth0 && depth0.adjust_stars) || alias2).call(alias1,(depth0 != null ? depth0.stars : depth0),{"name":"adjust_stars","hash":{},"data":data}))
    + "\"></div>\n        </div>\n        <span class=\"comments\">"
    + alias4(((helper = (helper = helpers.votes || (depth0 != null ? depth0.votes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"votes","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n</div>\n";
},"useData":true});
})();