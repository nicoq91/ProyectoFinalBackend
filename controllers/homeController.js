exports.index = function(req, res) {
    res.render('home', {title: 'Mi página  inicio', body: 'Contenido de mi página'});
};
