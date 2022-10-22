let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
let bot = false;

function check_win(){
    if((arr[0] == arr[1]) && (arr[1] == arr[2])){
        return "win";
    }else if((arr[3] == arr[4]) && (arr[4] == arr[5])){
        return "win";
    }else if((arr[6] == arr[7]) && (arr[7] == arr[8])){
        return "win";
    }else if((arr[0] == arr[3]) && (arr[3] == arr[6])){
        return "win";
    }else if((arr[1] == arr[4]) && (arr[4] == arr[7])){
        return "win";
    }else if((arr[2] == arr[5]) && (arr[5] == arr[8])){
        return "win";
    }else if((arr[0] == arr[4]) && (arr[4] == arr[8])){
        return "win";
    }else if((arr[2] == arr[4]) && (arr[4] == arr[6])){
        return "win";
    }else if((arr[0] != '0') && (arr[1] != '1') && (arr[2] != '2') && (arr[3] != '3') && (arr[4] != '4') && (arr[0] != '5') && (arr[0] != '5') && (arr[6] != '6') && (arr[7] != '7') && (arr[8] != '8')){
        return "draw";
    }else{
        return "nothing";
    }
}

function clicked(idx){
    if(arr.includes(idx) && !bot){
        document.getElementsByClassName("xo")[Number(idx)].innerHTML = "<i class='fa-solid fa-xmark'></i>";
        arr[Number(idx)] = 'x';
        if(check_win() == "nothing"){
            bot = true;
            setTimeout(bot_turn, 1000);
        }else{
            if(check_win() == "win"){
                setTimeout(function(){alert("You Win!");window.location.reload();}, 400);
            }else if(check_win() == "draw"){
                setTimeout(function(){alert("Draw!");window.location.reload();}, 400);
            }
        }
    }
}

function bot_turn(){
    let random = Math.round(Math.random() * 8);
    while(arr[random] == 'x' || arr[random] == 'o'){
        random = Math.round(Math.random() * 8);
    }
    document.getElementsByClassName("xo")[random].innerHTML = "<i class='fa-solid fa-o'></i>";
    arr[random] = 'o';
    if(check_win() == "nothing"){
        bot = false;
    }else{
        if(check_win() == "win"){
            setTimeout(function(){alert("Bot Wins!");window.location.reload();}, 400);
        }else if(check_win() == "draw"){
            setTimeout(function(){alert("Draw!");window.location.reload();}, 400);
        }
        window.location.reload();
    }
}