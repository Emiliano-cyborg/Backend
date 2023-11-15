const obj = {};

for (let i = 0; i < 1000; i++) {
    const number = Math.floor(Math.random()*20+1)
    
    if(obj[number]){
        obj[number]++;
    }else{
        obj[number] = 1
    }
}

console.log(obj)