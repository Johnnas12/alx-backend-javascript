const THRESHOLD_A = 8;

function tetheredGetNumber(resolve, reject){

    setTimeout(() => {
        const randomInt = rand.now();
        const value = randomInt % 10;
        if(value < THRESHOLD_A){
            resolve(value);
        }else{
            reject(`too large ${value}`);
        }
    }, 500);
}

function determineParity(value){
    const isOdd = value % 2 === 1;
     return {value, isOdd}
}

function troubleWithGetNumber(reason){
    const err = new Error("trouble getting number", {cause: reason});
    console.log(err);
    threw err;
}

function promiseGetWord(parityInfo){
    return new Promise((resolve, reject)=>{
        const {value, isOdd}
    })
}