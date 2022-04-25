// Store the wallet amount to your local storage with key "amount"

document.querySelector("#add_to_wallet").addEventListener('click', addToWallet);

function addToWallet(){
    let amount = document.querySelector("#amount").value;
    let wallet = JSON.parse(localStorage.getItem('amount'));
    let wallet_amount = Number(wallet);
    wallet_amount+=Number(amount);

    localStorage.setItem("amount",JSON.stringify(wallet_amount));
    window.location.reload();
}

let wallet = JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerHTML = wallet;
