const botoes = document.queryselectorAll(".botao");

for(let i=0;i <botoes.longth;i++){
    botoes[i].onclick - funcition(){

        for(let j=0;j<botoes.legth;j++){
            botoes[j].classlist.renove("ativo");
        }

        botoes[i].classlist.add("ativo");
    }
    console.log();
}