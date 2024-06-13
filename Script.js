const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você entra em uma floricultura. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Uau, que lugar lindo e cheio de vida!",
                afirmacao: "Quando você entra em uma floricultura, a primeira coisa que pode chamar sua atenção é a explosão de cores e fragrâncias. O ambiente é frequentemente um festival para os sentidos, com uma variedade de flores em diferentes estágios de florescimento. A visão das flores, com suas cores vibrantes e formas únicas, pode ser incrivelmente encantadora. O aroma das flores frescas, muitas vezes misturado com o cheiro da terra úmida, cria uma experiência sensorial completa. Esse primeiro pensamento de deslumbramento pode ser seguido por uma sensação de calma e felicidade, pois as flores têm um efeito conhecido de elevar o humor e reduzir o estresse."
            },
            {
                texto: "Quais flores seriam perfeitas para a ocasião?",
                afirmacao: "Outra possível reação ao entrar em uma floricultura é um pensamento mais direcionado e intencional. Talvez você esteja lá para comprar flores para uma ocasião especial, como um aniversário, um casamento, ou para decorar sua casa. Nesse caso, seu foco pode estar em encontrar a flor perfeita que se encaixe na sua necessidade específica. Você pode começar a pensar sobre as cores, o significado das flores, e até mesmo a durabilidade delas. Por exemplo, você pode se perguntar se rosas ou lírios seriam mais apropriados para expressar seus sentimentos ou se plantas de interior seriam uma boa escolha para melhorar a estética do seu espaço. Esse tipo de pensamento envolve uma análise mais detalhada e um planejamento cuidadoso para garantir que você faça a melhor escolha possível.."
            }
        ]
    },
    {
        enunciado: "Curiosidade e Descoberta",
        alternativas: [
            {
                texto: "Quais são as flores mais exóticas e raras que eles têm aqui?.",
                afirmacao: "Entrar em uma floricultura pode despertar sua curiosidade sobre a variedade de plantas e flores disponíveis. Você pode se sentir atraído por explorar e descobrir espécies de flores que nunca viu antes. Esse pensamento pode levar você a caminhar entre as prateleiras, examinando de perto cada flor, lendo os rótulos e perguntando ao florista sobre as origens e os cuidados necessários para cada planta."
            },
            {
                texto: "Qual flor simboliza melhor meus sentimentos?.",
                afirmacao: "Depois de analisar a loja, outra linha de pensamento pode envolver a busca por flores que carreguem um significado especial. Talvez você esteja procurando um presente que vá além da beleza estética e realmente toque o coração de quem vai recebê-lo. Você pode começar a considerar o significado das flores e a linguagem das flores (floriografia). Por exemplo, você pode pensar em comprar violetas para expressar fidelidade, margaridas para simbolizar a pureza e a inocência, ou girassóis para transmitir admiração e amor platônico."
            }
        ]
    },
    {
            enunciado: "Variedade",
        alternativas: [
            {
                texto: "Há tantas opções incríveis, como vou escolher apenas algumas",
                afirmacao: "Após entrar e analisar a loja, você pode ficar encantado com a vasta variedade de flores disponíveis. As diferentes espécies, cores, tamanhos e fragrâncias podem parecer infinitas. Cada flor tem sua própria beleza e características únicas, tornando a escolha difícil. Você pode se sentir tentado a explorar todas as opções, considerando como cada flor se encaixaria no ambiente que você deseja criar. Esse pensamento pode levar você a passar mais tempo na loja, apreciando cada detalhe e aprendendo sobre diferentes tipos de flores e plantas, talvez até conversando com o florista para obter recomendações e descobrir novas possibilidades."
            },
            {
                texto: "Quais flores estão mais saudáveis e frescas?.",
                afirmacao: "Depois de analisar a loja, outro pensamento possível é focar na qualidade e saúde das flores. Você pode começar a examinar as plantas mais de perto, procurando sinais de frescor, como folhas verdes e sem manchas, pétalas sem murchar e um aroma forte e natural. Pode ser importante para você garantir que as flores que está comprando sejam as mais saudáveis possíveis, para que durem mais tempo e mantenham sua beleza. Esse pensamento envolve uma avaliação mais cuidadosa e crítica das opções disponíveis, garantindo que você esteja investindo em flores que não apenas são bonitas, mas também estão em excelentes condições."
            }
        ]
    },
    {
        enunciado: "Inspiração e Criatividade",
        alternativas: [
            {
                texto: "Que combinações maravilhosas posso criar?.",
                afirmacao: ""
            },
            {
                texto: "Como vou transportar e cuidar dessas flores?",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Cuidados e Cultivo",
        alternativas: [
            {
                texto: "Como posso cuidar dessas plantas em casa?",
                afirmacao: "."
            },
            {
                texto: "Como posso cuidar melhor das minhas plantas em casa?",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Flores...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
