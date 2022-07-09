function fxMostrarProyecto(id) {
    for(let i = 1; i <= 6; i++) {
        document.getElementById('proyecto' + i).style.visibility = 'hidden';
    }

    document.getElementById(id).style.visibility = 'visible';
}