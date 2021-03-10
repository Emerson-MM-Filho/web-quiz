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