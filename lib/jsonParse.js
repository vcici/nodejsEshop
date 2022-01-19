// funkcija kuri moka is teksto "pagaminti" js objekta

function jsonParse (text){
    try {
        return JSON.parse(text)
    } catch (error){
        return false
    }

    
}

module.exports = jsonParse;