//! FUNCIONES ANONIMAS AUTOEJECUTABLES

(function() {
    console.log("Mi primer IIFE");
})();

(function(d, w, c) {
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("Este es un console.log desde la variable asignada")
})(document, window, console);

// ? Formas de escribir las Funciones Anonimas Autoejecutables
// * Clasica
(function() {
    console.log("Forma clasica");
})();

// * La Crockford (JavaScript The God Parts)
((function() {
    console.log("Versión Crockford");
})());

// * Unaria
+function() {
    
}