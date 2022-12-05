function solution(a, b) {
    b = b.split('');
    var strings = 0;
    var searching = true;
    var position;
    
    while(searching){
        for(var i = 0; i< a.length; i++){
            position = b.indexOf(a[i]);
            if(position >= 0){
                b.splice(position,1);
            } else{
                searching = false;
                break;
            }
        }
        if(searching){
            strings++;
        }
    }
    return strings;
}
