SOBRE O ENCRIPTADOR APP

Este é um trabalho para o programa ONE Oracle + Alura, onde o desafio se trata de trabalhar em uma aplicação que criptografa textos, permitindo que outras pessoas troquem mensagens secretas sem que saibam o segredo da criptografia utilizada. 

1- As "chaves" de criptografia

1.a- A letra "e" é convertida para "enter"
1.b- letra "i" é convertida para "imes"
1.c- letra "a" é convertida para "ai"
1.d- letra "o" é convertida para "ober"
1.e- letra "u" é convertida para "ufat"

2- Requisitos

2.a- Deve funcionar apenas com letras minúsculas;
2.b- Não devem ser utilizados letras com acentos nem caracteres especiais;
2.c- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original;

Exemplo:
"gato" => "gaitober"
gaitober" => "gato"

2.d- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções;

2.e- O resultado deve ser exibido na tela.

+Extras: um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.


ROADMAP E FUTURO

Depois de desenvolvido o raciocínio lógico principal para a encriptação e feito o visual design básico para que o usuário consiga interagir com o app, pensei em algumas features e novidades para tornar o app mais interativo, conciso e bonito.

1- Code e design reviews: sempre começar e terminar revisando;

2- Funções para ativar e desativar botões conforme o usuário interage com o app

2.a- Ligar btn-criptografar:

function btnCriptografarEnable() {
    btnCriptografar.disable = false;
}

2.b- Ligar btn-descriptografar:

function btnDescriptografarEnable() {
    btnCriptografar.disable = false;
}

2.c. Ligar btn-copiar:

function btnCopiarfarEnable() {
    btnCriptografar.disable = false;
}

3- Validar texto digitado: criar restrições para que o usuário só possa criptografar texto com letras minúsculas;

3.a- O aviso em "div-aviso" deve sempre estar sendo mostrado;

3.b- Os botões devem estar ativados enquanto o textarea não estiver vazio;

3.c- Ao digitar letras maiúsculas ou caracteres especiais e clicar nos botões de criptografar ou descriptografar, algum componente do app deve sinalizar ao usuário que só são permitidas letras minúsculas. 
Exemplo1: o aviso em "div-aviso" pode se tornar vermelho com texto bold por alguns segundos, o que chama atenção do usuário e faça ele se auto-corrigir;
Exemplo2: Textarea para input pode também ter seu contorno em vermelho enquanto a regra não for obedecida;

4- Criar estilo para dark theme e outros temas de interface. A biblioteca de cores tailwindcss pode ajudar a ter idéias;

4.a- Deve ser feito um botão com ícone e texto que, com o click, abre uma pequena lista-modal com os temas;

4.b- Sugestões de temas: Alura (default), Jungle (tons de verde), Metal (tons de cinza), Black (dark theme);

5- Encriptação live: enquanto o usuário digita, se o texto estiver passar pelas validações de caracteres, ele já é encriptado e aparece automaticamente na área input. Para a live, é preciso alterar o esquema de botões. Os botões, que por enquanto fazem click-ação, em live podem ser referentes à modos.
Exemplo: o btn-codificar + btn-descodificar se tornam um botões para ativar ou desativar cada uma das funções da codificação. Enquanto isso, o texto digitado é automaticamente convertido...

6- Tornar o app responsivo desktop-mobile.