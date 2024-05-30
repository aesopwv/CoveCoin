class covecoin
{
    constructor()
    {
        this.coins = 1;
        this.mineTotal = 0;
        this.button = document.getElementById("mine");
        this.button.addEventListener("click", mine());
        const displayElement = document.getElementById("balance");
        this.updateDisplay();
    }
    updateDisplay() 
    {
        displayElement.innerText = `CoveCoins: ${this.mineTotal}`;
    }
    mine()
    {
        this.mineTotal += this.coins;
        console.log("+${this.coins} coins");
        updateDisplay();
    }    
}
