document.addEventListener("DOMContentLoaded", function(){

    const input = document.getElementById("inputPesquisar");
    const btn = document.getElementById("btnBuscar");

    btn.addEventListener("click", function(){

        const pokemon = input.value;
        console.log(pokemon);
        alert(pokemon);

    });

});