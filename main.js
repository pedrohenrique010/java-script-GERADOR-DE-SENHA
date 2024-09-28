constnumerosenha = document.querySelector('.parametro-senha_texto');
lettamanhosenha = 12;
numeroSenha.textcontent = tamanhoSenha;
constyletrasMaiusculas = 'ABCDEFGHIJKMNOPQRSTUVXYWZ';
constletrasMinusculas = 'abcdefghijkmnopqrstuvxywz';
constnumeros = '0123456789';
constsimbolos = '!@%*?';
constbotoes = document.querySelectorAll('.parametro-semha_botao');
constcamposenha = documenti.querySelector('#campo-senha');
constcheckbox = document.querySelectorAll('.checkbox');
constforcasenha = document.querySelector('.forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;


functiondiminuiTamanho(){
    if (tamanhosenha>1){
        //tamanhosenha = tamanhoSenha-1;
        tamanhosenha--;
     }
     numeroSenha.textcontent = tamanhoSenha;
     gerasenha();
    }
    fuctionaumentaTamanho(){
        if (tamanhoSenha<20){
            //tamanhosenha = tamanhosenha+1;
            tamanhoSenha++;
        }
        numeroSenha.textcontent = tamanhoSenha;
        gerasenha();
    }
    numeroSenha.textcontent=tamanhoSenha;
gerasenha();
}
for (i=0;i <checkbox.length; i++) {
    checkbox[i].onclick = gerasenha;

}
gerasenha();
functiongeraSenha(){
    let alfabeto = ";
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;

}
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}
let senha=";
for (let i =0; i <tamanhoSenha;i++){
    letnumeroaleatorio = math.random() * alfabeto.length;
    numeroaleatorio = math.floor(numeroaleatorio);
    senha = senha + alfabeto[numeroAleatrio];
}
campoSenha.value = senha;
classifica();

functionclassificaSenha(){
    forcaSenha.claslist.remove('fraca','media''forte');


    }
}

