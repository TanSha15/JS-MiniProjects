function rolldice() {
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="diceImages/Dice-${value}-b.svg.png" alt="Dice ${value}" width="100">`);
    }

    diceresult.textContent = `Dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join(' ');
}
