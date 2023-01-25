

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


/* 

Roadmap: futuras implementações

// Próximos passos e novidades para o app encriptador de mensagens.
// Sync design com Figma: [link futuro]

1. Code e design reviews: sempre começar e terminar revisando.

2. Funções para ativar e desativar botões conforme o usuário interage com o app:

2-a. Ligar btn-criptografar

function btnCriptografarEnable() {
    btnCriptografar.disable = false;
}

2-b. Ligar btn-descriptografar

function btnDescriptografarEnable() {
    btnCriptografar.disable = false;
}

2-c. Ligar btn-copiar

function btnCopiarfarEnable() {
    btnCriptografar.disable = false;
}

3. Criar restrições para que o usuário só possa criptografar texto com letras minúsculas

3-a. O aviso em "div-aviso" deve sempre estar sendo mostrado;

3-b. Os botões devem estar ativados enquanto o textarea não estiver vazio;

3-c. Ao digitar letras maiúsculas ou caracteres especiais e clicar nos botões de criptografar ou descriptografar, algum componente do app deve sinalizar ao usuário que só são permitidas letras minúsculas. 
Exemplo1: o aviso em "div-aviso" pode se tornar vermelho com texto bold por alguns segundos, o que chama atenção do usuário e faça ele se auto-corrigir;
Exemplo2: Textarea para input pode também ter seu contorno em vermelho enquanto a regra não for obedecida;

4. Criar estilo para dark theme e outros temas de interface. A biblioteca de cores tailwindcss pode ajudar a ter idéias;

4-a. Deve ser feito um botão com ícone e texto que, com o click, abre uma pequena lista-modal com os temas;

4-b. Sugestões de temas: Alura (default), Jungle (tons de verde), Metal (tons de cinza), Black (dark theme);

5- Encriptação live: enquanto o usuário digita, se o texto estiver passar pelas validações de caracteres, ele já é encriptado e aparece automaticamente na área input. Para a live, é preciso alterar o esquema de botões. Os botões, que por enquanto fazem click-ação, em live podem ser referentes à modos.
Exemplo: o btn-codificar + btn-descodificar se tornam um botões para ativar ou desativar cada uma das funções da codificação. Enquanto isso, o texto digitado é automaticamente convertido...

6- Tornar o app responsivo desktop-mobile.

*/