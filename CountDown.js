//countdown
function countdown(num){ // assume num is number
    let counting = setInterval(function(){
        if(2 > num--){
            clearInterval(counting);
            console.log("DONE!");
        }
        else{
            console.log(num);
        }
    }, 1000);
}
//randomGame
function randomGame(){ //assuming that exersize doesn't actually want (1), due to Math.random() = 0 ~ 0.999...
    let count = 0;
    let counting = setInterval(function(){
        if(0.75 < Math.random()){
            clearInterval(counting);
            console.log(count);
        }
        else{
            count++;
        }
    }, 1000);
}