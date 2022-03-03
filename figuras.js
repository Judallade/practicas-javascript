// Codigo del cuadrado.
console.group("Cuadrados");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
     return lado * lado;
}
console.groupEnd();

// Codigo del Triangulo.
console.group("Triangulos");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del círculo.
console.group("Círculo");

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);
// Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.groupEnd();


// Aqui interactuamos con el HTML del cuadrado.
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Interacción con el HTML del triangulo.
function calculaPerimetroTriangulo(){  
    const input1 = document.getElementById("InputPrimerLado");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputSegundoLado");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputBase");
    const value3 = Number(input3.value);

    const input4 = document.getElementById("InputAltura");
    const value4 = Number(input4.value);

    const perimetroT = perimetroTriangulo (value1, value2, value3);
    alert(perimetroT);
}


function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputPrimerLado");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputSegundoLado");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputBase");
    const value3 = Number(input3.value);

    const input4 = document.getElementById("InputAltura");
    const value4 = Number(input4.value);

    const areaT = areaTriangulo (value3, value4);
    alert(areaT);
}

// Interacción con el círculo.

function calculaDiametro(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = diametroCirculo(value);
    alert(perimetro);
}

function calculaCircunferencia(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularArea(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = areaCirculo(value);
    alert(perimetro);
}
