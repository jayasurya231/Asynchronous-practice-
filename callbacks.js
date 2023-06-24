let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

let  order=(fruit_name,call_production)=>{

    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`)
        call_production();
    },2000);
}

let production=()=>{

   setTimeout(()=>{
    console.log("Production was started !");

    setTimeout(()=>{
        console.log("The fruits has been chopped...");

        setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added...`);

            setTimeout(()=>{
                console.log("The machine was started...");

                setTimeout(()=>{
                    console.log(`Ice Cream was placed on the ${stocks.holder[1]}... `);

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} was added...`);

                        setTimeout(()=>{
                            console.log("ice cream is served !");
                        },2000);
                    },3000);
                },2000);
            },1000);
        },1000);
    },2000);
   },0);
}
 order(0,production)
