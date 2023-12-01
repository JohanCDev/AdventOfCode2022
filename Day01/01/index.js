const fs = require('fs');


function main() {
    const elfsLoad = fs.readFileSync('../input', 'utf8').split('\n\n');
    var maxCalories = 0;

    elfsLoad.map((elfLoad) => {
        console.log(elfLoad)
        var calories = 0;
        elfLoad.split('\n').map((caloryValue) => {
            calories += parseInt(caloryValue);
        });

        if (calories > maxCalories) {
            maxCalories = calories;
        }
    })

    console.log(maxCalories);
}

main()