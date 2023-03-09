let totalmoney = 100;
while (totalmoney < 200 && totalmoney > 0) {
    let temp = Math.round(Math.random())
    if (temp == 0) {
        console.log("player win", temp)
        totalmoney++
    }
    if (temp == 1) {
        console.log("player loss", temp)
        totalmoney--
    }
}
console.log("totalmoney", totalmoney)