function countDown(num){
  setTimeout(function(){
    if(num > 1){
    num--;
    console.log(num)
    countDown(num)
    } else {
    return console.log("DONE!")  
    }
  }, 1000)
}

countDown(4)

//RANDOMGAME
function randomGame() {
  let numOfTries = 0;
  const tumbling = setInterval(() => {
      const randomNum = Math.random();
      numOfTries++;
      if (randomNum > 0.75) {
          console.log(`I tumble ${numOfTries} times, finally found the number, ${randomNum}!`);
          clearInterval(tumbling);    
      }
  }, 1000);
}
randomGame()

//with setInterval

// function countDown(num){
//   let stop = setInterval(function(){
//     num -= 1;
//     if(num > 0){
//       console.log(num)
//     }else {
//       console.log("DONE!")
//       clearInterval(stop)
//     }
//   }, 1000)
// }
 