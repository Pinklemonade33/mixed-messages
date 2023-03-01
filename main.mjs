import fs from 'fs';

// Convert data from text files to an array
const convertTxtToArray = (path) => {
    return fs.readFileSync(path, 'utf8').split('\n').map(line => line.trim());
}

// Randomly selects items from an array
const randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

// Gives a randomly generated time
const generateTime = () => {
    const randomHour = Math.floor(Math.random() * 24); 
    const randomMinute = Math.floor(Math.random() * 60);
    const randomTime = new Date();
    randomTime.setHours(randomHour);
    randomTime.setMinutes(randomMinute);
    return randomTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true});
}

// Arrays containing data for randomly generated sentences
const femaleNames = (convertTxtToArray('female_names.txt'));
const maleNames = (convertTxtToArray('male_names.txt'));
const sports = ['Basketball', 'Baseball', 'Football', 'Hockey'];
const jobs = ['Software Engineering', 'Project Managment', 'Warehousing', 'Management', 'Phone Repair', 'Truck Driving'];
const hobbies = ['video games', 'reading', 'hiking', 'chess', 'drinking', 'camping', 'music'];
const drinks = ['lemonade', 'whiskey', 'coke', 'pepsi', 'tea', 'coffee', 'vodka', 'apple juice']
const food = ['chile', 'a hotdog', 'a steak', 'a hamburger', 'a taco', 'an apple', 'a cake', 'icecream', 'watermelon']
const misc = ['clean', 'walk the dog', 'shower', 'sleep']
const misc2 = ['forgot to', 'didnt want to', 'wouldnt', 'managed to',]
const misc3 = ['shopping', 'eating', 'cleaning', 'working', 'partying']
const misc4 = ['is', 'was', 'will be', 'is not']
const places = ['the mall', 'the store', 'work', 'school', 'home']
const misc5 = ['felt', 'was', 'can be']
const misc6 = ['fun', 'delicious', 'enjoyable', 'great']
const compounds = ['and', 'but', 'because']
const misc8 = ['at', 'inside', 'outside', 'next to']
const misc9 = ['dinner', 'lunch', 'breakfast', 'supper']
const misc10 = ['went', 'was', 'is']
const misc11 = ['ate', 'had']
const misc12 = ['with', 'without', 'next to', 'close to']
const misc13 = ['friends', 'family', 'co-workers']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const misc14 = ['the bane', 'the end', 'the greatest thing', 'the worst thing', 'the funniest thing']
const misc15 = ['my', 'your', 'his', 'her', 'their']
const misc16 = ['existence', 'life', 'days of breathing']
const misc17 = ['can', 'could never', 'cannot', 'will never', 'will always', 'will', 'might']
const misc18 = ['better', 'worse', 'the same']
const misc19 = ['than', 'without', 'with']

// Functions that generate each part of the sentence are below
// Each are made into functions so that their items can be re-initialized as each priece calls the randomItem function
// Each item is made into an object containing a string and tags, and some with id's to make sentences more comprehensible
/* the tags are a little messy, but the alternatives would have taken me an unreasonable amount of time(and probably be even more difficult to follow).
If an object has the same tag as another object, they can be Concatenated(joined).
If an object has the same id as another object, they cannot be Concatenated.
Above each object are examples of what strings they will generate.
*/ 

// Returns an array of randomly generated subjects
const generateSubjects = () => {
    return [
        {word:randomItem(femaleNames), tags:['female', 'person']},
        {word:randomItem(maleNames), tags:['male', 'person']},
        {word:randomItem(sports), tags:['activity']},
        {word:randomItem(jobs), tags:['activity']},
        {word:randomItem(hobbies), tags:['activity']},
        {word:randomItem(drinks), tags:['object']},
        {word:randomItem(food), tags:['object']},
    ]
}

// Returns an array of randomly generated statements 
const generateStatments = () => {
    return [
        // was out shopping
        {statement:`${randomItem(misc10)} out ${randomItem(misc3)}`, tags:['person', 'activity3', 'activity4', 'activity6'], id:'0'},
        // fotgot to clean
        {statement:`${randomItem(misc2)} ${randomItem(misc)}`, tags:['person', 'activity2', 'activity6'], id:'1'},
        // ate a steak
        {statement:`${randomItem(misc11)} ${randomItem(food)}`, tags:['person', 'activity2', 'activity3', 'activity4', 'activity6'], id:'2'},
        // is shopping
        {statement:`${randomItem(misc4)} ${randomItem(misc3)}`, tags:['person', 'activity2', 'activity3', 'activity4', 'activity6'], id:'3'},
        // felt fun
        {statement:`${randomItem(misc5)} ${randomItem(misc6)}`, tags:['activity', 'object', 'activity2', 'activity4', 'activity6'], id:'4'},
        // the bane of your existence
        {statement:`${randomItem(misc4)} ${randomItem(misc14)} of ${randomItem(misc15)} ${randomItem(misc16)}`, tags:['activity', 'object', 'activity2', 'activity4', 'activity6'], id:'5'},
        // can never be better than shopping
        {statement:`${randomItem(misc17)} be ${randomItem(misc18)} ${randomItem(misc19)} ${randomItem(misc13)}`, tags:['activity', 'object', 'activity2', 'activity4', 'activity6'], id:'6'}
    ]
}

// Returns an array of randomly generated Phrases
const generatePPhrases = () => {
    return [
        //at the mall
        {pPhrase:`${randomItem(misc8)} ${randomItem(places)}`, tags:['activity2', 'phrase1'], id:'5'},
        //for dinner
        {pPhrase:`for ${randomItem(misc9)}`, tags:['activity3', 'phrase1'], id:'6'},
        //with friends
        {pPhrase:`${randomItem(misc12)} ${randomItem(misc13)}`, tags:['activity4', 'phrase1'], id:'7'},
        //at 12:00 PM
        {pPhrase:`at ${generateTime()}`, tags:['activity5', 'phrase1'], id:'8'},
        //on Monday
        {pPhrase:`on ${randomItem(days)}`, tags:['activity6', 'phrase1'], id:'9'}
    ]
}

// Calls the generateSubjects function and randomly selects an item
// subjectPref can be ignored
const generateSubject = (subjectPref=null) => {
    if (subjectPref === null) {
        return randomItem(generateSubjects());
    } else if (typeof subjectPref === 'string') {
        let subject;

        do {
            subject = randomItem(generateSubjects())
        } while (subject.word != subjectPref || subject.tags.some(element => element === subjectPref))

        return subject;
    } else {
        console.log('subjectPref must be null value or string')
        return;
    }
}

// Calls generateStatements function and randomly selects an item
const generateStatement = (subject) => {
    let statement;
    do {
        statement = randomItem(generateStatments())
    } while (!statement.tags.some(element => subject.tags.includes(element)));

    return statement;
}

// Calls generatePPhrases function and randomly selects an item
// It may by random add an additional phrase to itself
const generatePPhrase = (statement) => {
    let pPhrase;
    let rPPhrase = {pPhrase:'', tags:[], id:null};
    const qty = Math.floor(Math.random() * 3)
    for (let i = 0; i < qty; i++) {

        do {
            pPhrase = randomItem(generatePPhrases())
        } while (!pPhrase.tags.some(element => statement.tags.includes(element)) || rPPhrase.id === pPhrase.id);

        if (rPPhrase.pPhrase.length > 0) {rPPhrase.pPhrase += ' ';}
        rPPhrase.pPhrase += pPhrase.pPhrase;
        rPPhrase.tags = pPhrase.tags;
        rPPhrase.id = pPhrase.id;
        statement = pPhrase;
    }
    return rPPhrase;
}

// Calls generateSubject, generateStatement, generatePPhrase and puts their string values together
const generateSentence = (subjectPref=null) => {
    const max = Math.floor(Math.random(0) * 3)
    let sentence;
    let i = 0;
    do  {
        const subject = generateSubject(subjectPref);
        const statement = generateStatement(subject);
        const pPhrase = generatePPhrase(statement)
        if (i > 0) {
            sentence += ' ' + randomItem(compounds) + ' ' + subject.word + ' ' + statement.statement
        } else {
            subject.word = subject.word.charAt(0).toUpperCase() + subject.word.slice(1);
            sentence = subject.word + ' ' + statement.statement
        }
        if (pPhrase.pPhrase != '') {
            sentence += ' ' + pPhrase.pPhrase;
        }
        i++
    } while (i < max)
    return sentence;
}

// Calls generateSentence a random number of times up to its set limit and add each generated sentence to the paragraph variable 
const generateParagraph = () => {
    const max = Math.floor(Math.random(0) * 6)
    let paragraph;
    let sentence;
    let i = 0;
    do {
        sentence = generateSentence();
        if (i > 0) {
            paragraph += ' ' + sentence + '.';
        } else {
            paragraph = sentence + '.';
        } 
        i++
    } while (i < max);
    return paragraph;
}

/* So just to re-iterate for more clarification: 
    generateParagraph generates a random number of sentences between 1 and the set number (6)
        generateSentence generates a random number between 1 and 2 of subjects, statements and phrases
            generateSubject selects a random subject
                each subject that can be randomly selected is an object with a randomly generated string
            generateStatement selects a random compatible statement
                each statment that can be randomly selected is an object with a randomly generated string
            generatePPhrase selects a random compatible phrase
                each phrase that can be randomly selected is an object with a randomly generated string
            */
            
console.log(generateParagraph())