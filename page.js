function Films (title, year) {

    if(!(this instanceof Films)) {
        return new Films(title, year);
    }

    this.title = title;
    this.year = year;
    
};

Films.prototype.describe = function() {
    
    var description = this.title + " (" + this.year + ")";
    
    return description;
};

var film1 = new Films("Jurasic Park", 1993);
//var film2 = new Films("Titanic", 1997);
//var film3 = new Films("Toy Story", 1995);

var arrayFilms = [];
arrayFilms.push(film1);
//arrayFilms.push(film2);
//arrayFilms.push(film3);

arrayFilms.forEach(function (film) {
    console.log(film.describe());
    
});

for (var i = 0; i < arrayFilms.length; i++){
    
    console.log(arrayFilms[i].describe());
};