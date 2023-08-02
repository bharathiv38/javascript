//1. Deposit some Money
//2. Determine number of lines to bet on
//3. Collect the bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user their winnings
//7. play again

//function deposit(){
//   return 1
//}

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT ={
    "A":2,
    "B":4,
    "C":6,
    "D":8
}

const SYMBOLS_VALUES ={
    "A":5,
    "B":4,
    "C":3,
    "D":2
}

const deposit = ()=>{
    while (true) {
        const depositAmount = prompt("Enter a Deposit Amount:  ");
        const numberdepositAmount = parseFloat(depositAmount);

    if(isNaN(numberdepositAmount)|| numberdepositAmount<=0){
        console.log("Invalid deposit amount, try again");
    }else {
        return numberdepositAmount
    }
}
};


const getNumberofLines = () =>{
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3):  ");
        const numberoflines = parseFloat(lines);

    if(isNaN(numberoflines)|| numberoflines<=0 || numberoflines > 3){
        console.log("Invalid number of lines, try again");
    }else {
        return numberoflines
    }
}
};

const getBet = (balance,lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line:   ");
        const numberofbet = parseFloat(bet);

    if(isNaN(numberofbet)|| numberofbet<=0 || numberofbet > balance /lines){
        console.log("Invalid bet, try again");
    }else {
        return numberofbet
    }
}
};

const spin = () => {
    const symbols = [];
    for (const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for (let i =0;i< count;i++){
            symbols.push(symbol);
        }
    }
    const reels =[[],[],[]];
    for (let i = 0; i< COLS;i++){
        reels.push([]);
        const reelSymbols =[...symbols];
        for (let j=0;j<ROWS;j++){
            const randomindex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol = reelSymbols[randomindex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomindex,1);

        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows =[];

    for (let i =0;i <ROWS;i++){
        rows.push([]);
        for (let j =0;j < COLS;j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows
}

let balance =deposit();
const numberoflines=getNumberofLines();
const bet = getBet(balance,numberoflines);
const reels = spin();
const rows = transpose(reels);
console.log(reels);
console.log(rows);
