class coinclicka
{
    constructor(type_of_coin)
    {
        this.coins = 1;
        this.mineTotal = 0;

        this.type_of_coin = type_of_coin;
    }
    updateDisplay() 
    {
        this.displayElement = document.getElementById(this.type_of_coin+"_balance");
        this.displayElement.innerText = `Coins: ${this.mineTotal}`;
    }
    mine()
    {
        this.mineTotal += this.coins;
        console.log("+${this.coins} coins");
        this.updateDisplay();
    }
}

const _CoveCoin = new coinclicka('CoveCoin');
const _AesopCoin = new coinclicka('AesopCoin');

