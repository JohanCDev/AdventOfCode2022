const fs = require('fs');


function main() {
    const rounds = fs.readFileSync('../input', 'utf8').split('\n');
    var totalScore = 0;
    // ROCK PAPER SCISSORS
    // 0 2 / 1 0 / 2 1
    const possibleLettersOpponent = ['A', 'B', 'C'];
    const possibleLetters = ['X', 'Y', 'Z'];


    rounds.forEach((round) => {
        const opponent = round.split(' ')[0];
        const me = round.split(' ')[1];

        switch (me) {
            case 'X':
                totalScore += 1;
                break;
            case 'Y':
                totalScore += 2;
                break;
            case 'Z':
                totalScore += 3;
                break;
        }

        const myIndex = possibleLetters.indexOf(me);
        const opponentIndex = possibleLettersOpponent.indexOf(opponent);

        if (myIndex === opponentIndex) {
            totalScore += 3;
        } else if (myIndex === 2 && opponentIndex === 1 || myIndex === 0 && opponentIndex === 2 || myIndex === 1 && opponentIndex === 0) {
            totalScore += 6;
        } else {
            totalScore += 0;
        }
    });

    console.log(totalScore);
}

main()