const fs = require('fs');


function main() {
    const elfsLoad = fs.readFileSync('../input', 'utf8').split('\n\n');
    var threeMostCalories = [0, 0, 0];

    elfsLoad.map((elfLoad) => {
        var calories = 0;
        elfLoad.split('\n').map((caloryValue) => {
            calories += parseInt(caloryValue);
        });

        var shouldReplace = false;

        threeMostCalories.map((caloryValue) => {
            if (calories > caloryValue) {
                shouldReplace = true;
            }
        })

        if (shouldReplace) {
            threeMostCalories.push(calories);
            threeMostCalories.sort((a, b) => {
                return b - a;
            })
            threeMostCalories.pop();
        }
    })

    console.log(threeMostCalories[0] + threeMostCalories[1] + threeMostCalories[2]);
}

main()