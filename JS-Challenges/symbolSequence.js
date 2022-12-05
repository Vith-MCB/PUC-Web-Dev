function solution(sequence) {
    var isValidSymbol = true;
    var tmpStr = "";
    
    if(sequence.length % 2 != 0) {
      return false;
    }
    
     for(var i = 0; i < sequence.length; i++) {
       var tmpChr = sequence[i];
       if(tmpChr == "(" || tmpChr == "{" || tmpChr == "[") {
         tmpStr += tmpChr;
       } else {
           if(tmpChr == ")" && tmpStr[tmpStr.length - 1] != "(") {
               isValidSymbol = false;
           } else if(tmpChr == "}" && tmpStr[tmpStr.length - 1] != "{") {
               isValidSymbol = false;
           } else if(tmpChr == "]" && tmpStr[tmpStr.length - 1] != "[" ) {
               isValidSymbol = false;
           } else {
               tmpStr = tmpStr.substring(0, tmpStr.length - 1);
           }
        }
     }
      
    return isValidSymbol;
  }
