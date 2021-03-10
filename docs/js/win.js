function win (){
    console.log(actual_question, perguntas.length)
    if (actual_question == perguntas.length){
    pergunta.innerText = 'Fim!' + point + ' pts \n Total de acertos: ' + win_count + ' total de erros: '+ (perguntas.length - win_count);  
}}