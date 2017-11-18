(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tvshows_box'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.tvshow,depth0,{"name":"tvshow","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!-- Box -->\n<div class=\"box\">\n    <div class=\"head\">\n        <h2>"
    + container.escapeExpression(((helper = (helper = helpers.shows_head || (depth0 != null ? depth0.shows_head : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"shows_head","hash":{},"data":data}) : helper)))
    + "</h2>\n        <p class=\"text-right\"><a href=\"#\">See all</a></p>\n    </div>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tvshows : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n<!-- end Box -->";
},"usePartial":true,"useData":true});
})();