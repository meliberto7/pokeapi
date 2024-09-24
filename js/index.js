document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("btnBuscar");
    const input = document.getElementById("inputPesquisar");

    button.addEventListener("click", function() {

        const pokemon = input.value;
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        fetch(url)

            .then(response => {
                
                if(!response.ok) {

                    throw new Error("Erro ao realizar API: ",response.status);

                }

                return response.json();

            })

            .then(data => {

                console.log(data);

                const altura = data.height * 10;
                const peso = data.weight / 10;

                let list = [];

                for (let i = 0; i < 6; i++) {

                    console.log("Atakes", data.stats[i].stat.name,": ", data.stats[i].base_stat);
                    list.push(data.stats[i].base_stat);

                }

                const visor = document.getElementById("divTela");

                visor.innerHTML = "";

                const listInfos = document.createElement("div");
                listInfos.classList.add("container-list");
                listInfos.innerHTML = 
                `<ul class="divListInfos">
                    <li>
                        <ul class="divInfosTexts">
                            <li><p>Nome: ${data.name}</p></li>
                            <li><p>Altura: ${altura} cm</p></li>
                            <li><p>Peso: ${peso} kg</p></li>
                            <li><p>Status: </p></li>
                            <li><p>Hp: ${list[0]}</p></li>
                            <li><p>Attack : ${list[1]}</p></li>
                            <li><p>Defesa : ${list[2]}</p></li>
                            <li><p>Attack-especial: ${list[3]}</p></li>
                            <li><p>Desefa-especial: ${list[4]}</p></li>
                            <li><p>Velocidade : ${list[5]}</p></li>
                        </ul>
                    </li>
                    <li>
                        <ul class="divListImgs">
                            <li><img src="${data.sprites.other.showdown.front_default}"></li>
                            <li><img src="${data.sprites.other.showdown.front_shiny}"></li>
                        </ul>
                    </li>
                </ul>`;

                visor.appendChild(listInfos);

            })

            .catch(error => {

                console.log("Erro ao utilizar API: ",error);

            })

    });

});