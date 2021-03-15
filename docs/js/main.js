//data base of questions
const data_base_questions = [
    ['Gatos podem ser alérgicos a humanos?',true],
    ['Aproximadamente um quarto dos ossos dos humanos estão no tronco?',false],
    ['É ilegal fazer xixi no oceano em Portugal',true],
    ['O som mais alto produzido por um animal chega à 188 decibéis. Esse animal é o Elefante africano',false],
    ['A gestação dos cavalos-marinhos é feita pelos machos.',true],
    ['Orcas não são baleias, mas sim uma espécie de golfinho.',true],
    ['Antigamente, costumava-se escovar os dentes com urina.',true],
    ['Existem mais átomos no corpo humano do que estrelas no Universo.',true],
    ['Um canhoto é mais vulnerável a doenças do que um destro.',true],
    ['O Pernalonga não é um coelho, mas sim uma espécie de lebre.',true],
    ['Há mais bactérias em sua boca do que pessoas no planeta Terra.', true],
    ['Os golfinhos costumam dar nomes uns aos outros.', true],
    ['Os ornitorrincos são os únicos mamíferos venenosos que se tem notícia.',true],
    ['Os louva-a-deus são capazes de capturar aranhas, lagartos e até ratos.',true],
    ['Apesar de serem os mais famosos, os morcegos não são os únicos mamíferos capazes de voar.',false],
    ['Existe uma espécie de pássaro que fica voando por até dez meses sem parar.',true],
    ['Algumas arraias conseguem dar saltos de até três metros de altura.',true],
    ['Os beija-flores são excelentes voadores, mas também conseguem usar suas patas para caminhar no solo.',false],
    ['Um bicho-preguiça possui mais vértebras cervicais que um elefante ou uma girafa.',true],
    ['Os golfinhos usam as toxinas liberadas pelos baiacus para ficarem doidões.',true],
    ['Por causa do tamanho, as girafas ficam o tempo todo em pé e só se deitam quando vão dar à luz.',false]
]



//taking buttons from HTML
const div_buttons = document.querySelector('.options_questions')
const left_button = document.querySelector('#left_option')
const right_button = document.querySelector('#right_option')
//taking texts from HTML
const label_question = document.querySelector('#question_text')
const label_points = document.querySelector('#text_points')
const label_streak = document.querySelector('#score_streak')



//variables
let point = 0 //player points
let current_question = 0 //show current question
let win_streak = 0 //amount of victories in a row
let lose_streak = 0 //amount of defeats in a row
let best_win_streak = 0 //count of the best win streak
let hit_count = 0 //records how many questions were answered
let answer = 0 //player answer (true or false)



//add functions on the answers buttons
const pressed_left = () => {answer = true; pressed_option_button()}
const pressed_right = () => {answer = false; pressed_option_button()}
left_button.addEventListener(onclick, pressed_left)
right_button.addEventListener(onclick, pressed_right)



//showing the texts
function show_question_and_points () {
    label_question.innerText = data_base_questions[current_question][0]
    label_points.innerText = point + ' Pts'
}
show_question_and_points()



//show variables in console
function console_teste_variables () {
    // console.log('point = ', point, '\nwin_streak = ', win_streak, '\nlose_streak = ', lose_streak, '\nhit_count = ', hit_count, '\ncurrent_question = ', current_question, 'best_win_streak = ', best_win_streak)
}



//whats happend when player answer 
function pressed_option_button () {
    if (data_base_questions[current_question][1] == answer) {
        if (current_question == 0) {
        point += 100
        win_streak += 1
        lose_streak = 0
        hit_count += 1
        next_question()
        console_teste_variables()
        } else {
            win_streak += 1
            lose_streak = 0
            hit_count += 1
            streak_points()
            next_question()
            console_teste_variables()
        } 
    } else {
        if (current_question == 0) {
            next_question()
            console_teste_variables()
        } else if (point > 0) {
            if (lose_streak == 0) {
                point -= 50
                win_streak = 0
                lose_streak += 1
                label_streak.innerText = ''
                next_question()
                console_teste_variables()
            } else {
                win_streak = 0
                lose_streak += 1
                streak_points()
                next_question()
                console_teste_variables()
            }
        } else {
            defeat()
        }
    }
}



//streak points count and show
function streak_points () {
    if (win_streak > 0){
        point += 100 * win_streak
        label_streak.innerText = '100 X ' + win_streak  
        label_streak.style.color = '#02732A' 
            if (win_streak > best_win_streak) {
                best_win_streak = win_streak
            }
    } else {
        point -= 50 * lose_streak
        label_streak.innerText = '-50 X ' + lose_streak
        label_streak.style.color = '#F24130'
    }
}



//change current question for the next question
function next_question () {
    if (current_question == data_base_questions.length-1 || point>=1000) {
        win()
    } else {
        current_question += 1
        show_question_and_points()
    }
}



//show win
function win (){
    label_question.innerText = 'Fim! ' + point + ' Pts \n Total de acertos: ' + hit_count + '\nTotal de erros: '+ (data_base_questions.length- hit_count) + '\nA melhor sequência de acerto foi: ' + best_win_streak
    div_buttons.innerHTML=''
    label_points.innerText =''
    label_streak.innerText =''
}



//show defeat
function defeat () {
    label_question.innerText = 'DERROTA'
    label_points.innerText = ''
    label_streak.innerText = ''
    div_buttons.innerHTML=''
    best_win_streak = 0
    point = 0
    win_streak = 0
    lose_streak = 0
    current_question = 0
    console_teste_variables()
}