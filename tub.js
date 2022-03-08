function myFunc(a) {
    while(true){
        let del = 0;
        for(let i = 2; i <= a; i++){
            if(a % i === 0){
                del++;
            }
        }
        if(del === 1){
            return a
        }
        a++;
    }
}

console.log(myFunc(4));