/**
 * Created by oleksii on 18.11.17.
 */
(function (window, Handlebars) {
    function extractMovieData (item) {
        return {
            title: item.title,
            imgUrl: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
            release_date: item.release_date,
            votes: item.vote_average,
            overview: item.overview
        }
    };

    var data = window.getMovieData().results.map(extractMovieData);

    Handlebars.registerPartial('movie_row', Handlebars.templates.movie_row);

    Handlebars.registerHelper('rows_block', function(context, options) {
        var out ="";
        if (options.data) {
            data = Handlebars.createFrame(options.data);
        }

        for (var i=0; i<context.length; i++) {
            if (data) {
                i%2 == 0 ? data.evenOddClass = "even" : data.evenOddClass = "odd";
            }

            out += options.fn(context[i], { data: data });
        }

        return out;
    });

    var html = Handlebars.templates.rows_block({ movies: data });

    document.getElementById('generatedRows').innerHTML = html;

})(window, Handlebars);
