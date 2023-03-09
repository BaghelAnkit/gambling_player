let totalmoney = 100;
let wincounter = 0,
    losscounter = 0,
    totalchance = 0;
while (totalmoney < 200 && totalmoney > 0) {
    totalchance++
    let temp = Math.round(Math.random())
    if (temp == 0) {
        console.log("player win", temp)
        totalmoney++
        wincounter++
    }
    if (temp == 1) {
        console.log("player loss", temp)
        totalmoney--
        losscounter++
    }
}
let totalchance2 = wincounter + losscounter
console.log("totalmoney", totalmoney)
console.log("wincounter", wincounter)
console.log("losscounter", losscounter)
console.log("totalchance", totalchance)
console.log("totalchance2", totalchance2)