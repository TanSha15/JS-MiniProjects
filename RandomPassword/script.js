const pl = document.getElementById("pl");
const inclower = document.getElementById("inclower");
const incupper = document.getElementById("incupper");
const incnumber = document.getElementById("incnumber");
const incsymb = document.getElementById("incsymb");

const sub = document.getElementById("sub"); // button
const randpass = document.getElementById("randpass");

sub.onclick = function () {
    const passlength = parseInt(pl.value);

    let includelower = false;
    let includeupper = false;
    let includenumber = false;
    let includesymbol = false;


    if (inclower.checked){
         includelower = true;
    }
    if (incupper.checked){
         includeupper = true;
    }
    if (incnumber.checked){
         includenumber = true;
    }
    if (incsymb.checked){
         includesymbol = true;
    }

    if (!includelower && !includeupper && !includenumber && !includesymbol) {
        randpass.innerText = "Please select at least one character type.";
        return;
    }

    function generatePassword(length, useLower, useUpper, useNumber, useSymbol) {
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const number = "0123456789";
        const symbol = "!@#$%^&*()_+";

        let allChars = "";
        if (useLower){
             allChars += lower;
        }
        if (useUpper){
             allChars += upper;
        }
        if (useNumber){
             allChars += number;
        }
        if (useSymbol){
             allChars += symbol;
        }

        let password = "";
        for (let i = 0; i < length; i++) {
            const randIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randIndex];
        }

        return password;
    }

    const password = generatePassword(
        passlength,
        includelower,
        includeupper,
        includenumber,
        includesymbol
    );

    randpass.innerText = `Random password: ${password}`;
};
