const btnConvert = document.getElementById("convert-btn");
const inInput = document.getElementById("number");
const pOutput = document.getElementById("output");

const arrConversion = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
]


btnConvert.addEventListener("click", onConvertClick)

function onConvertClick() {
    if (!inInput.value) {
        pOutput.textContent = "Please enter a valid number";
    } else if (inInput.value < 0) {
        pOutput.textContent = "Please enter a number greater than or equal to 1";
    } else if (inInput.value >= 4000) {
        pOutput.textContent = "Please enter a number less than or equal to 3999";
    } else {
        let iNumber = 0
        iNumber = inInput.value;
        pOutput.textContent = "";
        let mi = 0;
        let sAdd = "";
        while (iNumber > 0 && mi < 11) {
            mi++;
            let imax = 9999999;

            for (let i = 0; i < arrConversion.length; i++) {
                if (iNumber >= arrConversion[i][0]) {

                    if (imax > i) {
                        imax = i;
                    }

                }
            }

            sAdd += arrConversion[imax][1];
            iNumber -= arrConversion[imax][0];

        }
        pOutput.textContent = sAdd;

    }
}