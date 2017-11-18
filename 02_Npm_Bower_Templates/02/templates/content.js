(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['content'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Content -->\n<div id=\"content\">\n\n"
    + ((stack1 = container.invokePartial(partials.tvshows_box,depth0,{"name":"tvshows_box","hash":{"tvshows":(depth0 != null ? depth0.new_shows : depth0),"shows_head":"NEW TV SHOWS"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.tvshows_box,depth0,{"name":"tvshows_box","hash":{"tvshows":(depth0 != null ? depth0.top_shows : depth0),"shows_head":"TOP RATED"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.tvshows_box,depth0,{"name":"tvshows_box","hash":{"tvshows":(depth0 != null ? depth0.voted_shows : depth0),"shows_head":"MOST VOTED"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</div>\n<!-- end Content -->\n";
},"usePartial":true,"useData":true});
})();