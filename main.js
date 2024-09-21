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