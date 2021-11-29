const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://api.coinranking.com/v2/coins'
const apiKey = "coinranking3cb06aa2dba77d1db2252dfa4eb4262d4f08a8add5e98388"

fetch(`${proxyUrl}${baseUrl}`, {
    method : 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if(response.ok){
        response.json().then((json) =>{
            console.log(json.data.coins)

            let coinsData = json.data.coins

            if(coinsData.length > 0){
                var cryptoCoins = "" 
            }

            //For Loop Starts
            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>"
                cryptoCoins += `<td> ${coin.uuid} </td>`;
                cryptoCoins += `<td> ${coin.btcPrice} </td>`;
                cryptoCoins += `<td> ${coin.rank} </td>`;
                cryptoCoins += `<td> ${coin.tier} </td>`;
                cryptoCoins += `<td> ${coin.name} </td>`;
                cryptoCoins += `<td> ${Math.round(coin.price)} Billions </td>`;
                cryptoCoins += `<td> ${coin.symbol} </td>`;"<tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins
        })
    }
}).catch((error) => {
    console.log(error)
})

