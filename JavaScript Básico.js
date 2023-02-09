function suma(numero, numero2, numero3) {

    let suma = numero + numero2 + numero3;

    console.log("La suma de " + numero + " + " + numero2 + " y " + numero3 + " es igual a = " + suma);
}

function comparacion(numero, numero2) {

    if (numero > numero2) {
        console.log("El numero " + numero + " es mayor que " + numero2);
    } else if (numero < numero2) {
        console.log("El numero " + numero + " es menor que " + numero2);
    } else if (numero == numero2) {
        console.log("El numero " + numero + " es igual que " + numero2);
    } else if (numero != numero2) {
        console.log("El numero " + numero + " es diferente que " + numero2);
    }

}

function sumaFecha(fecha, dias) {

    let date = new Date(fecha);
    let fecha1 = new Date(fecha);

    fecha1.setDate(fecha1.getDate() + dias);

    console.log("La fecha " + date.toLocaleDateString() + " + " + dias + " días es " + fecha1.toLocaleDateString());

}

function compararFecha(fecha1, fecha2) {

    let date1 = new Date(fecha1);
    let date2 = new Date(fecha2);

    if (new Date(fecha1).getDate() > new Date(fecha2).getDate()) {
        console.log("La fecha " + date1.toLocaleDateString() + " es mayor a " + date2.toLocaleDateString());
    } else if (new Date(fecha1).getDate() < new Date(fecha2).getDate()) {
        console.log("La fecha " + date1.toLocaleDateString() + " es menor a " + date2.toLocaleDateString());
    } else if (new Date(fecha1).getDate() == new Date(fecha2).getDate()) {
        console.log("La fecha " + date1.toLocaleDateString() + " es igual a " + date2.toLocaleDateString());
    }

}

function desestructuracion() {

    const usuario = {
        id: 898,
        nombre: "Irving",
        tipo: "Estudiante",
        instituto: "UTHuejotzingo",
        especialidad: "Redes"
    };

    const { nombre, instituto, especialidad } = usuario;

    console.log("Resultado: " + nombre, instituto, especialidad);

}

function desestructuracion2() {

    const usuario = {
        id: 898,
        telefono: 2278789,
        nombre: "Irving",
        tipo: ["Estudiante", "Ingeniero"],
    };

    const { nombre, telefono, tipo } = usuario;

    console.log("Resultado: " + nombre, telefono, tipo[1]);

}