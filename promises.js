let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

let is_shop_open=true;

let order=(work,time)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
           setTimeout(()=>{
            resolve(work());
           },time);
        }
        else{
            reject(console.log("Our shop  is closed"));
        }
    });
};

order(()=>{
    console.log(`${stocks.fruits[0]} was selected`)
},2000)

.then(()=>{
    return  order(()=>console.log("Production was  started"),0)
})

.then(()=>{
    return order(()=>console.log("The fruit was chopped"),2000)
})
.then(()=>{
    return order(()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`),1000)
})

.then(()=>{
    return order(()=>console.log("Machine is started"),1000)
})

.then(()=>{
    return order(()=>console.log(`Ice was placed on the ${stocks.holder[0]} `),2000)
})
.then(()=>{
    return order(()=>console.log(`${stocks.toppings[1]} was selected`),3000)
})

.then(()=>{
    return order(()=>console.log("Ice Cream is served !"),2000)
})

.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{
    console.log("DAY ENDED, SHOP CLOSED ...")
})