

/* Elementos */

const btnCriptografar = document.getElementById("btn-criptografar") // Elemento botão de criptografar
const btnDescriptografar = document.getElementById("btn-descriptografar"); // Elemento botão de descriptografar
const btnCopiar = document.getElementById("btn-copiar") // Elemento botão de copiar texto
const input = document.querySelector('.input'); // Elemento input
const output = document.querySelector('.output'); // Elemento output

const frameValidation = document.querySelector('.frame-validation'); // Elemento frame da validação
const frameAsk = document.querySelector('.frame-ask'); // Elemento frame de boas vindas e solicitação de input
const frameFeedback = document.querySelector('.frame-feedback'); // Elemento frame da imagem svg "not found"
const frameOutput = document.querySelector('.frame-output'); // Elemento frame do output

var textoDigitado = input.value; // Valores do input
var textoDescriptografado = output.innerHTML; // Valores do output


/* Eventos */

const btnCopiarClick = btnCopiar.addEventListener("click", copiar); // Evento do botão "copiar"
const btnCriptografarClick = btnCriptografar.addEventListener("click", criptografar); // Evento do botão "criptografar"
const btnDescriptografarClick = btnDescriptografar.addEventListener("click", descriptografar); // Evento do botão "descriptografar"


/* Fluxos e estilos */

// Comment! O desenvolvimento das jornadas e interações poderá ser feito em React. Meu planejamento é, com o passar do tempo, melhorar a qualidade e agilidade no trabalho enquanto aprendo a desenvolver em linguagens mais utilizadas na web (e que, por consequência, vão me possibilitar chegar onde desejo).


function telaReset() {
    document.querySelector('.input').reset();
    
}

function selecionarTexto() { 
    input.focus();
    input.select();
}  

function telaAfterCriptografia() {
    frameOutput.style.display='flex';
    frameFeedback.style.display='none';
    btnCopiar.style.display='inline-block';
}



/* Funções criptografar, descriptografar e copiar clipboard */

// Content! Replace e glogal flag /g: https://www.javascripttutorial.net/javascript-string-replace/
// Content! Função para o botão copiar : https://linuxhint.com/create-copy-to-clipboard-button-javascript/


function criptografar() {
    var textoDigitado = input.value;
    let matrizCriptografia = [["a" ,"ai"], ["e" , "enter"], ["i" , "imes"],  ["o" , "ober"], ["u" , "ufat"]];
    textoDigitado = textoDigitado.toLowerCase();
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoDigitado.includes(matrizCriptografia[i][0])) {
            textoCriptografado = textoDigitado.replaceAll(matrizCriptografia[i][0], matrizCriptografia[i][1]);
            output.innerHTML = textoCriptografado;
            telaAfterCriptografia()
        }
    }
    return;
}


function descriptografar() {
    var textoDigitado = input.value;
    let matrizCriptografia = [["ai" ,"a"], ["enter" , "e"], ["imes" , "i"],  ["ober" , "o"], ["ufat" , "u"]];    textoDigitado = textoDigitado.toLowerCase();
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoDigitado.includes(matrizCriptografia[i][0])) {
            textoCriptografado = textoDigitado.replaceAll(matrizCriptografia[i][0], matrizCriptografia[i][1]);
            output.innerHTML = textoCriptografado;
            telaAfterCriptografia()
        }
    }
    return;
}




function copiar() {
    var textoDescriptografado = output.innerHTML;
    navigator.clipboard.writeText(textoDescriptografado);
}



/* Restrições do input */

// Content NA! Validação RegEx : https://stackoverflow.com/questions/8694023/allow-only-lowercase-characters
// Content NA! Função .val() jQuery: https://api.jquery.com/val/#:~:text=The%20.,the%20multiple%20attribute%20set)%2C%20.
// Content NA! Teste de expressões regulares: https://regex101.com/
// Extra! Meu post-dúvida no fórum Alura: https://cursos.alura.com.br/forum/topico-como-permito-apenas-caracteres-minusculos-267172eee7654718dc7dc0e7e3ccb9ee64
