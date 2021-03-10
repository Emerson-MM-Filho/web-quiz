function next_question(){
    actual_question +=1
    if (actual_question != perguntas.length){
        pergunta.innerText = perguntas[actual_question][0]
    }
    
}