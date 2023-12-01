const fs = require('fs');


function main() {
    const rucksacks = fs.readFileSync('../input', 'utf8').split('\n');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var totalPriorities = 0;
    var groupedRucksacks = [];
    var currentGroup = [];

    rucksacks.forEach((rucksack, index) => {
        currentGroup.push(rucksack);
        if ((index + 1) % 3 === 0 && index !== 0) {
            groupedRucksacks.push(currentGroup);
            currentGroup = []
        }
    })

    groupedRucksacks.forEach((group) => {
        var letter = '';

        for (let i = 0; i < group[0].length; i++) {
            for (let j = 0; j < group[1].length; j++) {
                for (let k = 0; k < group[2].length; k++) {
                    if (group[0][i] === group[1][j] && group[0][i] === group[2][k]) {
                        letter = group[0][i];
                        break;
                    }
                    if (letter !== '') {
                        break;
                    }
                }
                if (letter !== '') {
                    break;
                }
            }
            if (letter !== '') {
                break;
            }
        }

        if (letter.toUpperCase() === letter) {
            totalPriorities += 26;
        }
        letter = letter.toLowerCase();
        totalPriorities += alphabet.indexOf(letter) + 1;
    })

    console.log(totalPriorities);
}

main()