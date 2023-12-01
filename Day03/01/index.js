const fs = require('fs');


function main() {
    const rucksacks = fs.readFileSync('../input', 'utf8').split('\n');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var totalPriorities = 0;

    rucksacks.forEach((rucksack) => {
        const firstPart = rucksack.slice(0, rucksack.length / 2);
        const secondPart = rucksack.slice(rucksack.length / 2, rucksack.length);
        var letter = '';

        for (let i = 0; i < firstPart.length; i++) {
            for (let j = 0; j < secondPart.length; j++) {
                if (firstPart[i] === secondPart[j]) {
                    letter = firstPart[i];
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

        if (letter.toUpperCase() === letter) {
            totalPriorities += 26;
        }
        letter = letter.toLowerCase();
        totalPriorities += alphabet.indexOf(letter) + 1;
    })


    console.log(totalPriorities);
}

main()