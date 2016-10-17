
function validateForm(){
	/* Escribe tú código aquí */
	var uno = document.getElementById("name").value;
	var dos = document.getElementById("lastname").value;
	var tres = document.getElementById("input-email").value;
	var cuatro = document.getElementById("input-password").value;

	if( uno == null || uno.length == 0 || /^\s+$/.test(uno) ) {
		alert('Campo de Nombre vacio');
		return false;
	} else if (!(/^[a-zA-Z\s]*$/.test(uno))){
		alert('El Nombre no es valido');
	} else if (!(/^[A-Z\s]*$/.test(uno[0]))) {
		alert('Primera letra de Nombre debe ser mayuscula');
	}

	if( dos == null || dos.length == 0 || /^\s+$/.test(dos) ) {
		alert('Campo de Apellido vacio');
		return false;
	} else if (!(/^[a-zA-Z\s]*$/.test(dos))){
		alert('El Apellido no es valido');
	}else if (!(/^[A-Z\s]*$/.test(dos[0]))) {
		alert('Primera letra de Apellido debe ser mayuscula');
	}

	if( tres == null || tres.length == 0 || /^\s+$/.test(tres) ) {
		alert('Campo de correo vacio');
		return false;
	} else if (!(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(tres))){
		alert('Correo incorrecto');
	}

	if( cuatro == null || cuatro.length == 0 || /^\s+$/.test(cuatro) ) {
		alert('Campo de contraseña vacio');
		return false;
	} else if (cuatro.length > 5 || cuatro =='password' || cuatro =="123456" || cuatro =="098754") {
		alert("Contraseña no valida");
	}

	var indice = document.getElementById("op").selectedIndex;
	if( indice == null || indice == 0 ) {
  		alert("Seleccione una opcion");
  		return false;
	}
}

