

/* Elementos */

const btnCriptografar = document.getElementById("btn-criptografar") // Elemento botão
const btnDescriptografar = document.getElementById("btn-descriptografar"); // Elemento botão
const btnCopiar = document.getElementById("btn-copiar") // Elemento botão
const input = document.querySelector('.input'); // Elemento input
const output = document.querySelector('.div-output'); // Elemento output
const ilustra = document.querySelector('.div-ilustra'); // Elemento ilustração "not found"
const aviso = document.querySelector('.div-aviso'); // Elemento aviso
var textoDigitado = input.value; // Valores do input
var textoDescriptografado = output.innerHTML; // Valores do output


/* Eventos */

const btnCopiarClick = btnCopiar.addEventListener("click", copiar); // Evento do botão "copiar"
const btnCriptografarClick = btnCriptografar.addEventListener("click", criptografar); // Evento do botão "criptografar"
const btnDescriptografarClick = btnDescriptografar.addEventListener("click", descriptografar); // Evento do botão "descriptografar"


/* Fluxos e estilos */


function screenCriptografar() {
    output.style.display = 'flex';
    btnCopiar.style.display = 'flex';
    ilustra.style.display = 'none';
}


/* Funções criptografar, descriptografar e copiar clipboard */

// Content! Replace e glogal flag /g: https://www.javascripttutorial.net/javascript-string-replace/
// Content! Função para o botão copiar : https://linuxhint.com/create-copy-to-clipboard-button-javascript/


function criptografar() {
    screenCriptografar();
    var textoDigitado = input.value;
    textoDigitado = textoDigitado.toLowerCase();
    var textoCriptografado = textoDigitado.replace(/a/g, 'ai')
                                            .replace(/e/g, 'enter')
                                            .replace(/i/g, 'imes')
                                            .replace(/o/g, 'ober')
                                            .replace(/u/g, 'ufat');
    output.innerHTML = textoCriptografado;
}

function descriptografar() {
        var textoDigitado = input.value;
        textoDigitado = textoDigitado.toLowerCase();
        var textoDescriptografado = textoDigitado.replace(/aimes/g, 'a')
                                                    .replace(/enter/g, 'e')
                                                    .replace(/imes/g, 'i')
                                                    .replace(/ober/g, 'o')
                                                    .replace(/ufat/g, 'u');
        output.innerHTML = textoDescriptografado;
}
  
function copiar() {
    var textoDescriptografado = output.innerHTML;
    navigator.clipboard.writeText(textoDescriptografado);
}


/* Restrições do input */

// Content NA! Validação RegEx : https://stackoverflow.com/questions/8694023/allow-only-lowercase-characters
// Content NA! Função .val() jQuery: https://api.jquery.com/val/#:~:text=The%20.,the%20multiple%20attribute%20set)%2C%20.
// Meu post-dúvida no fórum Alura: https://cursos.alura.com.br/forum/topico-como-permito-apenas-caracteres-minusculos-267172