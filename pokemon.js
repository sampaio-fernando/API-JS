// const url = "https://pokeapi.co/api/v2/type"

// async function carregarPokemons(){
//     debugger
//     const resp = await fetch(url);
//     const data = await resp.json();
//     console.log(data);
// }

// carregarPokemons();

const input = document.getElementById("nome");
const btn = document.getElementById("btn");
const saida = document.getElementById("saida");

btn.addEventListener("click", async () => {
    const nome = input.value.trim().toLowerCase();
    if(nome.length === 0){
        saida.textContent = "Digite o nome do Pokemon.";
        return
    }   

    saida.textContent = "Buscando...";

    try{
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nome)}`);
        if(!res.ok)throw new Error("Não encontrado");
        const p = await res.json();

        const sprite = p.sprites.other?.["official-artwork"]?.front_default ||
                       p.sprites.front_default || "";
        
        saida.innerHTML = `
           <h2>#${p.id} ${p.name}</h2>
           <img src="${sprite}" />
        ` 
    }catch{
        saida.textContent = "Pokemon não encontrado!";
    }
})