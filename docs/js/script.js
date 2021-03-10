const pergunta = document.querySelector('#question_text')
const points = document.querySelector('#text_points')
const streak = document.querySelector('#score_streak')

//definindo o valor do ponto
let point = 0;
//definindo a pergunta atual da lista
let actual_question = 0;
//defindo a quantidade de vitórias/derrotas seguidas
let win_streak = 0;
let lose_streak = 0;
let win_count = 0;


//lista de perguntas
let perguntas = [
    ['Gatos podem ser alérgicos a humanos?',true],
    ['Aproximadamente um quarto dos ossos dos humanos estão nos no tronco?',false],
    ['É ilegal fazer xixi no oceano em Portugal',true],
//  ['O som mais alto produzido por um animal chega à 188 decibéis. Esse animal é o Elefante africano',false],
//  ['A gestação dos cavalos-marinhos é feita pelos machos.',true],
//  ['Orcas não são baleias, mas sim uma espécie de golfinho.',true],
//  ['Antigamente, costumava-se escovar os dentes com urina.',true],
//  ['Existem mais átomos no corpo humano do que estrelas no Universo.',true],
//  ['Um canhoto é mais vulnerável a doenças do que um destro.',true],
//  ['O Pernalonga não é um coelho, mas sim uma espécie de lebre.',true],
//  ['Há mais bactérias em sua boca do que pessoas no planeta Terra.', true],
//  ['Os golfinhos costumam dar nomes uns aos outros.', true],
//  ['Os ornitorrincos são os únicos mamíferos venenosos que se tem notícia.',true],
//  ['Os louva-a-deus são capazes de capturar aranhas, lagartos e até ratos.',true],
//  ['Apesar de serem os mais famosos, os morcegos não são os únicos mamíferos capazes de voar.',false],
//  ['Existe uma espécie de pássaro que fica voando por até dez meses sem parar.',true],
//  ['Algumas arraias conseguem dar saltos de até três metros de altura.',true],
//  ['Os beija-flores são excelentes voadores, mas também conseguem usar suas patas para caminhar no solo.',false],
//  ['Um bicho-preguiça possui mais vértebras cervicais que um elefante ou uma girafa.',true],
//  ['Os golfinhos usam as toxinas liberadas pelos baiacus para ficarem doidões.',true],
//  ['Por causa do tamanho, as girafas ficam o tempo todo em pé e só se deitam quando vão dar à luz.',false],
];

pergunta.innerText = perguntas[0][0];

function pressed_option_button (valor) {
    console.log(valor,perguntas[actual_question][1])
    if (perguntas[actual_question][1] == valor){
        console.log('acertou')
        win_streak += 1
        lose_streak = 0
        next_question()
        streak_point()
        win()
    }
    else {
        if(point == 0 && actual_question==0){
            console.log('errou de primeira')
            next_question()        
        }
        else if(point<=0 && actual_question>=1){
            defeat()
        } else {
            console.log('errou')
            win_streak = 0
            lose_streak += 1
            next_question()
            streak_point()
            win()
        }
    }
}


function streak_point(){
    if (win_streak>0){
        win_count += 1
        point += 100*win_streak
        streak.innerText = '100 x' + win_streak
        streak.style.color = "#02732A";
        points.innerText = point + ' pts'
    } else {
        point -= 50*lose_streak
        streak.innerText = '-50 x' + lose_streak
        streak.style.color = "#F24130";
        points.innerText = point + ' pts'
        if (point<=0 && actual_question>=1){
            defeat()
        }
    }
}

function next_question(){
    actual_question +=1
    if (actual_question != perguntas.length){
        pergunta.innerText = perguntas[actual_question][0]
    }
    
}

function win (){
    console.log(actual_question, perguntas.length)
    if (actual_question == perguntas.length){
    pergunta.innerText = 'Fim!' + point + ' pts \n Total de acertos: ' + win_count + ' total de erros: '+ (perguntas.length - win_count);  
}}

// mudança de questão
function change_question(){
    pergunta.innerText = perguntas[actual_question][0]
    points.innerText = point + ' pts'
}

//derrota
function defeat(){
    pergunta.innerText = 'Fim! Você chegou em zero pontos :('
    streak.innerText = ''
    point = 0
    points.innerText = '0 pts'
    actual_question = -1
}
