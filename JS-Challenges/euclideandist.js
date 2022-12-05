function calc_euclidean_dist(p1, p2){
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

function solution(p) {
    let min_dist = Number.MAX_VALUE;
    for(var i = 0; i < p.length; i++){
        for(var j = i+1; j < p.length; j++){
            var dist = calc_euclidean_dist(p[i], p[j])
            if(dist < min_dist){
                min_dist = dist;
            }
        }
    }
 return min_dist;
}