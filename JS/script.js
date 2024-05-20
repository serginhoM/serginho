const carros = [];

for(let i = 0; i < 4; i++){
    const escolha = prompt(`digite o nome do ${i+1}º carro`);
    carros.push(escolha);

}

alert (carros);