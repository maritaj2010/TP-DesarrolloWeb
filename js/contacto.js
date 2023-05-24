
	//Validación de un formulario con Javascript

		function valida_envia() {



			//valido el nombre
			if (document.fvalida.nombre.value.length == 0) {
				alert("Tiene que escribir su nombre");
				document.fvalida.nombre.focus();
				return 0;
			}

			//Valido apellido
			if (document.fvalida.apellido.value.length == 0) {
				alert("Tiene que escribir su apellido");
				document.fvalida.nombre.focus();
				return 0;
			}

			//valido la edad. tiene que ser entero mayor que 18
			edad = document.fvalida.edad.value
			//valido que sea un numerico
			edad = validarEntero(edad)
			document.fvalida.edad.value = edad
			//valido contenido edad
			if (edad == "") {
				alert("Tiene que introducir un número entero en su edad.");
				document.fvalida.edad.focus();
				return 0;
			} else {
				if (edad < 18) {
					alert("Debe ser mayor de 18 años.")
					document.fvalida.edad.focus();
					return 0;
				}
			}

			//Valido Correo
			if (document.fvalida.correo.value.length == 0) {
				alert("Tiene que escribir su correo electrónico");
				document.fvalida.nombre.focus();
				return 0;
			}else{
				if (!validateEmail(document.fvalida.correo.value)) {
					alert("El correo electronico no es válido. ");
					document.fvalida.nombre.focus();
					return 0;
				}
			}

			
			if (document.fvalida.interes.selectedIndex == 0) {
				alert("Debe seleccionar un motivo de su Contacto.")
				document.fvalida.interes.focus();
				return 0;
			}
			//valido region
			if (fvalida.region[0].checked == true ||
				fvalida.region[1].checked == true ||
				fvalida.region[2].checked == true){
			} else{
				alert("Completa el campo Región");
				e.preventDefault();
			}

			//valido texto
			if (document.fvalida.texto.value.length == 0) {
				alert("Tiene que escribir un texto para contactarnos.");
				document.fvalida.texto.focus();
				return 0;
			}

			//el formulario se envia
			alert("Muchas gracias por contactarnos. ");
			document.fvalida.submit();
		}

		// fuente https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
		function validateEmail(email) {
		  // Regular expression to match a valid email address
		  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		  // Return true if the email address matches the regular expression
		  return regex.test(email);
		}

		function validarEntero(valor) {
			//intento convertir a entero.
			//si era un entero no le afecta, si no lo era lo intenta convertir
			valor = parseInt(valor)

			//Compruebo si es un valor num�rico
			if (isNaN(valor)) {
				//entonces (no es numero) devuelvo el valor cadena vacia
				return "";
			} else {
				//En caso contrario (Si era un n�mero) devuelvo el valor
				return valor;
			}
		}