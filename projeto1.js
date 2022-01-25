var prompt = require('prompt-sync')();

/////////////////////HISTÓRIA/////////////////////

console.log("-----------------------------------------------------------------------------------------------");
console.log("Você é um detetive paranormal, e deverá solucionar o caso com base na história.\n");
console.log("  Você recebeu um chamado, e logo se dirigiu ao local. Quem o recebe é Letícia, a viúva.\n");
console.log("Após detalhar o caso, o deixa no local da ocorrência, e segue para a casa de um parente.\n");
console.log("Na casa viviam Letícia e seu esposo, duas filhas e um cachorro.\n");
console.log("A primeira morte foi do cão, e alguns dias depois o esposo de Letícia.\n");
console.log("O cão foi encotrado morto sem marcas, porém não constava em seu sanguê algum tipo de veneno.\n");
console.log("O Cão era muito querido, mesmo por seu marido, que estava sempre tapando os buracos que o cão\n");
console.log("fazia em seu jardim.\n");
console.log("O esposo de Letícia cometeu suicídio após alguns dias da morte do cão.\n");

let p = 0; //VARIÁVEL QUE DETERMINA O SUCESSO DO PERSONAGEM//
let ctl=0;//VARIÁVEL DE CONTROLE DE LOOP//////

do{ //////////////////// TELA 1 //////////////////

    let ctl_r =0;//VARIÁVEL DE CONTROLE DE RESPOSTA//
    ctl = 0;//VARIÁVEL DE CONTROLE DE LOOP//////
    

console.log("\nvocê já está a algumas horas investigando a casa, e por voltas das 00:20hs ouve um ruído");
console.log("\nestranho vindo de algum cômodo do segundo andar. Você vai averiguar?");

ctl_r = +prompt("Tecle [1] para sim ou [2] pra Não? ");

if(ctl_r==1){
    p++;
    ctl++;
}
else if(ctl_r==2){
    ctl++;    
} 
else{
    console.log("ERRO! DIGITE ENTRE [1] E [2]!!!");
}
   
}while(ctl<1);


do{ ///////////////TELA 2 /////////////

ctl_r =0;//VARIÁVEL DE CONTROLE DE RESPOSPA//
ctl = 0;//VARIÁVEL DE CONTROLE DE LOOP//////
console.log("-----------------------------------------------------------------------------------------------");
console.log("A porta do banheiro do segundo andar está aberta, e as luzes estão acesas.");
console.log("\nEntrando você se depara com arranhões na parede, que formam uma mensagem:");
console.log("\nEu sou o verme da terra, o que come a carne dos vivos!");
console.log("\nA mensagem parece não fazer sentido, e você logo se dirige ao quarto do casal.");
console.log("\nApós alguns minutos no quarto, você encontra um livro de adestramento.");
console.log("\nEle estava em uma caixa preta com um símbolo estranho.");
console.log("\nvocê abre o livro ou não?");

ctl_r = +prompt("Tecle [1] para sim ou [2] para Não! ");

if(ctl_r==1){////////CONDIÇÃO POSITIVA////////////
    p++;
    ctl++;

}else if(ctl_r==2){/////CONDIÇÃO NEGATIVA/////////
    ctl++;

}else{//////////////////ERRO//////////////////

    console.log("ERRO! DIGITE ENTRE [1] E [2]!!!");
}

}while(ctl<1); ////lIBERAÇÃO PARA A PRÓXIMA TELA////


do{ ///////////////TELA 3 /////////////

ctl_r =0;//VARIÁVEL DE CONTROLE DE RESPOSPA//
ctl = 0;//VARIÁVEL DE CONTROLE DE LOOP//////
console.log("-----------------------------------------------------------------------------------------------");
console.log("\nVocê sente muita sede, afinal, está vasculhando a casa a horas.");
console.log("\nResolve descer até a cozinha, fazer uma pausa antes de continuar.");
console.log("\n A Cozinha está bem perto do jardim. Você aproveita para investigar");
console.log("\no local?")

ctl_r = +prompt("Tecle [1] para sim ou [2] para Não?  ");

if(ctl_r==1){////////CONDIÇÃO POSITIVA////////////
    p++;
    ctl++;

}else if(ctl_r==2){/////CONDIÇÃO NEGATIVA/////////
    ctl++;

}else{//////////////////ERRO/////////////////////

    console.log("ERRO! DIGITE ENTRE [1] E [2]!!!");
}

}while(ctl<1); //lIBERAÇÃO PARA A PRÓXIMA TELA//


do{ ///////////////TELA 4 /////////////

ctl_r =0;//VARIÁVEL DE CONTROLE DE RESPOSPA//
ctl = 0;//VARIÁVEL DE CONTROLE DE LOOP//////
console.log("-----------------------------------------------------------------------------------------------");   
    console.log("\nVocê ouve novamente um som vindo do segundo andar.");
    console.log("\nDessa vez parece um latido de um cachorro de grande porte.");
    console.log("\nVocê sente um frio na espinha, porém o desejo de saber a");
    console.log("\nverdade e encontrar respostas é maior.  chegando ao segundo");
    console.log("\nandar, já se depara com algo estranho. Uma forte respiração");
    console.log("\nvem do quarto das crinças. Parece um cão sendo sufocado.");
    console.log("\nVocê continua, e logo entrando no quarto, vê que não há nada.");
    console.log("\nApenas uma caixa com fotos caída no chão.");
    console.log("\nVocê pega a caixa e fica mais alguns minutos no quarto?");
    

ctl_r = +prompt("Tecle [1] para sim ou [2] para Não?  ");

if(ctl_r==1){////////CONDIÇÃO POSITIVA////////////
    ctl++;
    p++;

}else if(ctl_r==2){/////CONDIÇÃO NEGATIVA/////////
    ctl++;

}else{//////////////////ERRO//////////////////

    console.log("ERRO! DIGITE ENTRE [1] E [2]!!!");
}

}while(ctl<1); ////lIBERAÇÃO PARA A PRÓXIMA TELA////


do{ ///////////////TELA 5 /////////////

ctl_r =0;//VARIÁVEL DE CONTROLE DE RESPOSPA//
ctl = 0;//VARIÁVEL DE CONTROLE DE LOOP//////
console.log("-----------------------------------------------------------------------------------------------");

    console.log("\nCom todas as evidências, você retorna ao jardim. Chegando no local");
    console.log("\nvocê avista a casinha de madeira, construída com intúito de organizar");
    console.log("\nas ferramentas. Letícia havia dito sobre o hobby do marido.");
    console.log("\nVocê pega uma pá, e começa a escavar o quintal?");

    

ctl_r = +prompt("Tecle [1] para sim ou [2] para Não?  ");

if(ctl_r==1){////////CONDIÇÃO POSITIVA////////////
    p++;
    ctl++;

}else if(ctl_r==2){/////CONDIÇÃO NEGATIVA/////////
    ctl++;

}else{//////////////////ERRO//////////////////

    console.log("ERRO! DIGITE ENTRE [1] E [2]!!!");
}
console.log("-----------------------------------------------------------------------------------------------");

}while(ctl<1); ////lIBERAÇÃO PARA A PRÓXIMA TELA////

//////////////////////RESULTADO/////////////////////////

if (p==5){ //////////PARA TODAS AS RESPOSTAR POSITIVAS//////////////
    console.log("\nCom base nos dados coletados na casa, você deduz que o cão");
    console.log("\nencontrou algo e enterrou no quintal da família, como de costume.");
    console.log("\nApartir desse momento o cão morre e logo em seguida o esposo de Letícia.");
    console.log("\nEle adorava cuidar do jardim, e sempre encontrava tudo que o cão");
    console.log("\nenterrava, uma hora iria encontrar o objeto responsável pelos óbitos,");
    console.log("\ne por isso foi abatido.\nVocê escava o quintal a procura de tal objeto,");
    console.log("\ne após algumas horas o encontra. \nCom base em sua experiência, sabia como proceder,");
    console.log("\ne logo o colocou em sua bolsa, para evitar o contato com a terra,");
    console.log("\nseu domínio e de onde tira todo o seu poder para açoitar os vivos.");
    console.log("\nParabéns detetive! Mais um caso encerrado. Até o próximo caso!");
    console.log("\nfim!");

}
else if (p==4) {/////PARA 4 RESPOSTAS POSITIVAS //////////
    console.log("\nCom base nos dados coletados na casa, você deduz que o cão");
    console.log("\nencontrou algo e enterrou no quintal da família, como de costume.");
    console.log("\nApartir desse momento o cão morre e logo em seguida o esposo de Letícia.");
    console.log("\nEle adorava cuidar do jardim, e sempre encontrava tudo que o cão");
    console.log("\nenterrava, uma hora iria encontrar o objeto responsável pelos óbitos,");
    console.log("\nE por isso foi abatido.  Você escava o quintal a procura de tal objeto,");
    console.log("\ne após algumas horas o encontra. Com base em sua experiência, sabia como proceder,");
    console.log("\ne logo o colocou em sua bolsa, para evitar o contato com a terra,");
    console.log("\nseu domínio e de onde tira todo o seu poder para açoitar os vivos.");
    console.log("\nVocê já estava sob alguns efeitos da entidade, e por pouco não perdeu");
    console.log("\na sanidade, porém o caso foi resolvido. Até o próximo caso!");
    console.log("\nfim!");

}else if (p==3) { ///////////PARA 3 RESPOSTAS POSITIVAS////////////
    console.log("\nCom base nos dados coletados na casa, você deduz que o cão");
    console.log("\nencontrou algo e enterrou no quintal da família, como de costume.");
    console.log("\nApartir desse momento o cão morre e logo em seguida o esposo de Letícia.");
    console.log("\nEle adorava cuidar do jardim, e sempre encontrava tudo que o cão");
    console.log("\nenterrava, uma hora iria encontrar o objeto responsável pelos óbitos,");
    console.log("\ne por isso foi abatido.  Você escava o quintal a procura de tal objeto,");
    console.log("\nporém se sente tonto e desmaia. Acorda apenas em uma câma de hospital,");
    console.log("\nsem se lembrar de nada sobre o caso ou de quem você é.");   
    console.log("\nfim!");
    

}else if (p==2||p==1) { ////PARA 1 OU 2 RESPOSTAS POSITIVAS/////////
    console.log("\nVocê não entende oque está ocorrendo no local, está totalmente confuso.");
    console.log("\n Após várias horas no local, você já não é mais o mesmo. Sente muito sono!");
    console.log("\nNo dia seguinte Letícia chega em casa. Você está nú e cuidando do jardim.");
    console.log("\nNão há mais sentido em suas palavras, e Letícia já havia passado por isso com seu esposo.");
    console.log("\nApós te levar ao hospital, você é encaminhado para uma clínica psiquiátrica,");
    console.log("\nonde vive até os dias de hoje.");
    console.log("\nfim!");
    
}else{ ////////PARA NENHUMA RESPOSTA POSITIVA////////////
    console.log("\nVocê não entende oque está ocorrendo no local, está totalmente confuso.");
    console.log("\nVocê decide ir embora, continuar o trabalho em casa, porém não parece");
    console.log("\nestar no mesmo local. Droga! Já está fora de sí. Era assim que a entidade");
    console.log("\nfazia suas vítimas. No outro dia Letícia retorna a residência, e o");
    console.log("\nencontra morto na sala!  A família nunca mais retornou ao local, e as autoridades");
    console.log("\nnão acreditaram na versão de Letícia. A casa recentemente foi posta a locação.");
    console.log("\nfim!");
}
