function luas() {
    alas = Number(document.getElementById("alas").value);
    tinggi = Number(document.getElementById("tinggi").value);
    document.getElementById("luas").innerHTML = (tinggi / 2) * alas;
}

function keliling() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = Number(document.getElementById("c").value);
    document.getElementById("keliling").innerHTML = a + b + c;
}