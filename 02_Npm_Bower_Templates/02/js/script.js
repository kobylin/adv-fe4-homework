/**
 * Created by oleksii on 18.11.17.
 */
(function (window, Handlebars) {
    function getShowData (item) {
        return {
            title: item.name,
            imgUrl: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
            popularity: parseInt(item.popularity,10),
            votes: item.vote_count,
            stars: item.vote_average
        }
    };

    var data = window.getTvData().results;

    var new_shows_data = data.sort(function (a, b) {
        return new Date(b.first_air_date) - new Date(a.first_air_date);
    }).slice(0, 6).map(getShowData);

    var top_shows_data = data.sort(function (a, b) {
        return b.vote_average - a.vote_average
    }).slice(0, 6).map(getShowData);

    var voted_shows_data = data.sort(function (a, b) {
        return b.vote_count - a.vote_count
    }).slice(0, 6).map(getShowData);

    Handlebars.registerPartial('tvshow', Handlebars.templates.tvshow);
    Handlebars.registerPartial('tvshows_box', Handlebars.templates.tvshows_box);
    Handlebars.registerPartial('content', Handlebars.templates.content);

    Handlebars.registerHelper('adjust_stars', function(votes) {
        return Math.round(votes / 2)
    });

    var html = Handlebars.templates.content({ new_shows: new_shows_data, top_shows: top_shows_data, voted_shows: voted_shows_data });

    var oldHTML = document.getElementById('main').innerHTML;
    document.getElementById('main').innerHTML = html + oldHTML;

})(window, Handlebars);
