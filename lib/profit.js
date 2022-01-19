//funkcija, kuri apskaiciuoja uzdirbtu pinigu kieki (kiek suprekiauta)

function profit(goodsInfo){
    let sum = 0;
    for (const item of goodsInfo){
        sum += item.sold * item.price.value;
    }
    return sum
}

module.exports = profit;