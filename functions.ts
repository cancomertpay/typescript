const getAvarage = (...a: number[]):string => {
    let total = 0;
    let count = 0;

    for(let i = 0; i<a.length;i++){
        total+=a[i];
        count++;
    }

    const result = total / count;
    
    return "result = " + result;
}

console.log(getAvarage(10,20,30,40,50,60));
