const fs = require('fs');


function main() {
    const rounds = fs.readFileSync('../input', 'utf8').split('\n');
    var totalScore = 0;

    const movePointMap = {
        'X': {
            pointOfMove: {
                'A': 3,
                'B': 1,
                'C': 2
            },
            pointOfOutcome: 0
        },
        'Y': {
            pointOfMove: {
                'A': 1,
                'B': 2,
                'C': 3
            },
            pointOfOutcome: 3
        },
        'Z': {
            pointOfMove: {
                'A': 2,
                'B': 3,
                'C': 1
            },
            pointOfOutcome: 6
        }
    }


    rounds.forEach((round) => {
        const opponent = round.split(' ')[0];
        const outcome = round.split(' ')[1];

        totalScore += movePointMap[outcome].pointOfMove[opponent]
        totalScore += movePointMap[outcome].pointOfOutcome
    });

    console.log(totalScore);
}

main()