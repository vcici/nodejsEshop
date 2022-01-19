// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

const IsValid = require("./IsValid.js")



function printList(list){
    let tableText = [];
    let i = 0;
    
    for (const item of list){
        const {name, price, inStock, sold} = item;
        tableText.push(`${++i}) ${name}: ${price.value} ${price.currency}; parduota: ${sold}; likutis: ${inStock};`);   
    }
    
    return tableText.join('\n');
}

module.exports = printList;