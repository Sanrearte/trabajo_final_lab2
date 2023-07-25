function actividades_talamp(){
    var c_adultos1 = document.getElementById("cant_adultos1").value;
    var c_menores1 = document.getElementById("cant_menores1").value;
    let opcion = document.getElementById("actividad").value;
    var resultado;

    if(c_adultos1 < 0 || c_menores1 < 0){
        alert("Ingrese un valor igual a cero o mayor en las casillas de (Adultos, Menores y Bebes)")
        borrar_talamp();
        return -1;
    }

    if(opcion == "petro"){
        resultado = 0;
    }
    else if(opcion == "jardin"){
        resultado = (9850 * c_adultos1) + (4925 * c_menores1);
    }
    else if(opcion == "monje"){
        resultado = (12800 * c_adultos1) + (6400 * c_menores1);
    }
    else if(opcion == "trekking"){
        resultado = (15250 * c_adultos1) + (7625 * c_menores1);
    }
    else if(opcion == ""){
        alert("Se debe seleccionar una opcion en la casilla de (Actividades)");
        borrar_talamp();
        return -1;
    }

    document.getElementById("result1").innerHTML = resultado;
}

function borrar_talamp(){
    document.getElementById("cant_adultos1").value = "";
    document.getElementById("cant_menores1").value = "";
    document.getElementById("cant_bebes1").value = "";
    document.getElementById("actividad").value = "";
}

function actividades_laguna(){
    var c_adultos2 = document.getElementById("cant_adultos2").value;
    var c_menores2 = document.getElementById("cant_menores2").value;
    var cont = 0;
    var resultado2;

    if(c_adultos2 < 0 || c_menores2 < 0){
        alert("Ingrese un valor igual a cero o mayor en las casillas de (Adultos, Menores y Bebes)")
        borrar_laguna();
        return -1;
    }

    if(document.getElementById("tour_si").checked){
        cont++;
    }
    if (document.getElementById("tour_no").checked) {
        cont++;
    }

    if(cont == 0 || cont > 1){
        alert("Se debe seleccionar solamente una casilla de (Guia)");
        borrar_laguna();
        return -1;
    }

    if(document.getElementById("tour_si").checked){
        resultado2 = (5500 * c_adultos2) + (2750 * c_menores2);
    }
    else if(document.getElementById("tour_no").checked){
        resultado2 = 2750 * c_adultos2;
    }

    document.getElementById("result2").innerHTML = resultado2;
}

function borrar_laguna(){
    document.getElementById("cant_adultos2").value = "";
    document.getElementById("cant_menores2").value = "";
    document.getElementById("cant_bebes2").value = "";
    document.getElementById("tour_si").checked = false;
    document.getElementById("tour_no").checked = false;
}

function actividades_chaya(){
    var c_adultos3 = document.getElementById("cant_adultos3").value;
    var c_menores3 = document.getElementById("cant_menores3").value;
    var cont = 0;
    var resultado3;

    if(c_adultos3 < 0 || c_menores3 < 0){
        alert("Ingrese un valor igual a cero o mayor en las casillas de (Adultos, Menores y Bebes)")
        borrar_chaya();
        return -1;
    }

    if(document.getElementById("platea_vip").checked){
        cont++;
    }
    if (document.getElementById("rancho_general").checked) {
        cont++;
    }

    if(cont == 0 || cont > 1){
        alert("Se debe seleccionar solamente una casilla de (Entrada)");
        borrar_chaya();
        return -1;
    }

    if(document.getElementById("platea_vip").checked){
        resultado3 = (5000 * c_adultos3) + (1500 * c_menores3);
    }
    else if(document.getElementById("rancho_general").checked){
        resultado3 = 1500 * c_adultos3;
    }

    document.getElementById("result3").innerHTML = resultado3;
}

function borrar_chaya(){
    document.getElementById("cant_adultos3").value = "";
    document.getElementById("cant_menores3").value = "";
    document.getElementById("cant_bebes3").value = "";
    document.getElementById("platea_vip").checked = false;
    document.getElementById("rancho_general").checked = false;
}