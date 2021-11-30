//This program is going to generate random one-liner jokes with the category they belongs to
// creating an object named one liner where array is stored
const oneLiner = {
    jokeToday: ['1. When your only tool is a hammer, all problems start looking like nails.',
        '2. Talk is cheap. Until you hire a lawyer.',
        '3. Isnt it scary that doctors call what they do practice?',
        '4. Living on Earth is expensive, but it does include a free trip around the sun.',
        '5. A bartender is just a pharmacist with a limited inventory.',
        '6. To steal ideas from one person is plagiarism; to steal from many is research.',
        '7. Life isnt about waiting for the storm to pass ... its about learning to dance in the rain!',
        '8. When everything is coming your way, you are in the wrong lane and going the wrong way.'],
    
    
    typeToday: [ 'Inspirational', 
            'Motivational', 
            'Just for fun', 
            'Funny quote', 
            'Logically true', 
            'This is 100% true', 
            'A fun in strom', 
            'Time to change way']
};

// Generating fuction for randomly display the oneLiners

function randNums(nums) {
    return Math.floor(Math.random() * nums)
    }

//function to print out jokes randomly

    function theMessage(message) {
        //random selection of oneLiner jokes
        let jokeRand = randNums(message.jokeToday.nums)
        //random selection of its type
        let typeRand = randNums(message.typeToday.nums)
        //printing the combination of the whole oneLiner jokes with its type to the console
        console.log(`One liner Joke for today: ${message.jokeToday[jokeRand]} and this is ${message.typeToday[typeRand]}`)

    };
    theMessage(oneLiner);