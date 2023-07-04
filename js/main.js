// Cambio de foto al colocar el mouse
var imagen = document.querySelector('#foto');
imagen.addEventListener('mouseover', function() {
    imagen.src = 'sources/img/avatar.png';
});
imagen.addEventListener('mouseout', function() {
    imagen.src = 'sources/img/FiorellaG.jpg';
});

// Cambio de color de fuente al colocar mouse
var menu_inicio = document.querySelector('#menu_inicio');
menu_inicio.addEventListener('mouseover', function() {
    menu_inicio.style.color = "black";
});
menu_inicio.addEventListener('mouseout', function() {
    menu_inicio.style.color = "white";
});

var menu_contacto = document.querySelector('#menu_contacto');
menu_contacto.addEventListener('mouseover', function() {
    menu_contacto.style.color = "black";
});
menu_contacto.addEventListener('mouseout', function() {
    menu_contacto.style.color = "white";
});

var boton_cv = document.querySelector('#button');
boton_cv.addEventListener('mouseover', function() {
    boton_cv.style.color = "black";
});
boton_cv.addEventListener('mouseout', function() {
    boton_cv.style.color = "white";
});

// cambio de color de iconos de skills

var ccs3 = document.querySelector('#ccs3');
    ccs3.addEventListener('mouseover', function() {
    ccs3.style.fill = "cyan";
});
ccs3.addEventListener('mouseout', function() {
    ccs3.style.fill = "#b49a9a";
});

var html5 = document.querySelector('#html5');
html5.addEventListener('mouseover', function() {
    html5.style.fill = "orange";
});
html5.addEventListener('mouseout', function() {
    html5.style.fill = "#b49a9a";
});

var js = document.querySelector('#js');
js.addEventListener('mouseover', function() {
    js.style.fill = "yellow";
});
js.addEventListener('mouseout', function() {
    js.style.fill = "#b49a9a";
});

var trello = document.querySelector('#trello');
trello.addEventListener('mouseover', function() {
    trello.style.fill = "blue";
});
trello.addEventListener('mouseout', function() {
    trello.style.fill = "#b49a9a";
});

var github = document.querySelector('#github');
github.addEventListener('mouseover', function() {
    github.style.fill = "purple";
});
github.addEventListener('mouseout', function() {
    github.style.fill = "#b49a9a";
});

var sql = document.querySelector('#sql');
sql.addEventListener('mouseover', function() {
    sql.style.fill = "gray";
});
sql.addEventListener('mouseout', function() {
    sql.style.fill = "#b49a9a";
});
