//funkcija, kuri skaiciuoja visu neparduotu prekiu kieki sandelyje

function inStockTotalCount(goodsInfo){
    let sum = 0;

    for(const a of goodsInfo){
        sum += a.inStock;
    }
    return sum
}

module.exports = inStockTotalCount;