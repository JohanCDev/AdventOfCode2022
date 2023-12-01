const fs = require('fs');


function main() {
    const pairs = fs.readFileSync('../input', 'utf8').split('\n');
    var totalFullyContained = 0

    pairs.forEach((pair) => {
        const pairArray = pair.split(',');
        const first = pairArray[0];
        const second = pairArray[1];
        const firstShiftArray = first.split('-')
        const secondShiftArray = second.split('-')
        const firstStartShift = Number(firstShiftArray[0]);
        const firstEndShift = Number(firstShiftArray[1]);
        const secondStartShift = Number(secondShiftArray[0]);
        const secondEndShift = Number(secondShiftArray[1]);

        if ((firstStartShift >= secondStartShift && firstEndShift <= secondEndShift) || (secondStartShift >= firstStartShift && secondEndShift <= firstEndShift)) {
            totalFullyContained += 1;
        }
    })


    console.log(totalFullyContained);
}

main()