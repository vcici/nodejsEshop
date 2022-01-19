// funkcija, kuri apskaiciuoja kiek dar galima gauti is likusiu prekiu
function futureProfit(goodsInfo){
    let sum = 0;
    for (const item of goodsInfo){
        sum += item.inStock * item.price.value;
    }
    return sum
}

module.exports = futureProfit;