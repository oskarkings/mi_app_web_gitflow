document.getElementById('btnClick').addEventListener('click', function() {
    document.getElementById('output').textContent = '¡Botón clicado!';
});

//Este es un metodo
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    document.getElementById('formOutput').textContent = 'Nombre: ' + name + ', Email: ' + email;
});
<<<<<<< HEAD
//nueva FEACTURE al codigo
=======


////Agregamos ultimos cambios en realease antes de lanzar a produccion*/
<<<<<<< HEAD
>>>>>>> v1.0.0
=======


//Agregamosun nuevo HOTFIX    RECORDAR PRIMERO CREAR LA RAMA TEMPORA:*/
>>>>>>> v1.0.1
