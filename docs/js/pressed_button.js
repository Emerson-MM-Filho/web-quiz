//imports
import {defeat} from './defeat.js'
import {next_question} from './next_question.js'
import {streak_point} from './streak_point.js'
import {win} from './win.js'
import {all_questions} from './data_base_questions.js'



//define consts for imports
const defeat_condition = defeat
const next_question_condition = next_question
const streak_point_condition = streak_point
const win_condition = win
const questions_list = all_questions



//taking the question text from HTML
const question_text = document.querySelector('#question_text')



//showing the first question of the quiz
question_text.innerText = questions_list[0][0];



//define variables
let actual_question = 0;



//define the main function
export function pressed_option_button (valor) {
    console.log(valor,questions_list[actual_question][1])
    if (questions_list[actual_question][1] == valor){
        console.log('acertou')
        win_streak += 1
        lose_streak = 0
        next_question_condition
        streak_point_condition
        win_condition
    }
    else {
        if(point == 0 && actual_question==0){
            console.log('errou de primeira')
            next_question_condition        
        }
        else if(point<=0 && actual_question>=1){
            defeat_condition
        } else {
            console.log('errou')
            win_streak = 0
            lose_streak += 1
            next_question_condition
            streak_point_condition
            win_condition
        }
    }
}