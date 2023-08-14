
function isWinner(borad, symbol) {
    if (borad[0]==borad[1]&&borad[1]==borad[2]&&borad[2]==symbol)return symbol 
    if (borad[3]==borad[4]&&borad[4]==borad[5]&&borad[5]==symbol)return symbol 
    if (borad[6]==borad[7]&&borad[7]==borad[8]&&borad[8]==symbol)return symbol 
        
     if (borad[0] == borad[3] && borad[3] == borad[6] && borad[6] == symbol)
       return symbol;
     if (borad[1] == borad[4] && borad[4] == borad[7] && borad[7] == symbol)
       return symbol;
     if (borad[2] == borad[5] && borad[5] == borad[8] && borad[8] == symbol)
        return symbol; 
    
     if (borad[0] == borad[4] && borad[4] == borad[8] && borad[4] == symbol)
       return symbol;
     if (borad[2] == borad[4] && borad[4] == borad[6] && borad[4] == symbol)
        return symbol;

    return "";
    
}

export default isWinner
//012
//345
//678