import fs from 'fs';

const convertTxtToArray = path => {
    return fs.readFileSync(path, 'utf8').split('\n').map(line => line.trim());
}

const randomItem = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

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

const subjects = [
    {word:randomItem(femaleNames), tags:['female', 'person']},
    {word:randomItem(maleNames), tags:['male', 'person']},
    {word:randomItem(sports), tags:['activity']},
    {word:randomItem(jobs), tags:['activity']},
    {word:randomItem(hobbies), tags:['activity']},
    {word:randomItem(drinks), tags:['object']},
    {word:randomItem(food), tags:['object']},
]

const statements = [
    // was out shopping
    {statement:`${randomItem(misc10)} out ${randomItem(misc3)}`, tags:['person', 'activity3', 'activity4', 'activity6']},
    // fotgot to clean
    {statement:`${randomItem(misc2)} ${randomItem(misc)}`, tags:['person', 'activity2', 'activity6']},
    // ate a steak
    {statement:`${randomItem(misc11)} ${randomItem(food)}`, tags:['person', 'activity2', 'activity3', 'activity4', 'activity6']},
    // is shopping
    {statement:`${randomItem(misc4)} ${randomItem(misc3)}`, tags:['person', 'activity2', 'activity3', 'activity4', 'activity6']},
    // felt fun 
    {statement:`${randomItem(misc5)} ${randomItem(misc6)}`, tags:['activity', 'object', 'activity2', 'activity4', 'activity6']},
]

const pPhrases = [
    // at the mall
    {pPhrase:`${randomItem(misc8)} ${randomItem(places)}`, tags:['activity2', 'phrase1']},
    // for dinner
    {pPhrase:`for ${randomItem(misc9)}`, tags:['activity3', 'phrase1']},
    // ate with
    {pPhrase:`${randomItem(misc12)} ${randomItem(misc13)}`, tags:['activity4', 'phrase1']},
    // at 12:00 PM
    {pPhrase:`at ${generateTime()}`, tags:['activity5', 'phrase1']},
    // on Monday
    {pPhrase:`on ${randomItem(days)}`, tags:['activity6', 'phrase1']}
]

const generateSubject = (subjectPref=null) => {
    if (subjectPref === null) {
        return randomItem(subjects);
    } else if (typeof subjectPref === 'string') {
        let subject;

        do {
            subject = randomItem(subjects)
        } while (subject.word != subjectPref || subject.tags.some(element => element === subjectPref))

        return subject;
    } else {
        console.log('subjectPref must be null value or string')
        return;
    }
}

const generateStatement = (subject) => {
    let statement;
    do {
        statement = randomItem(statements)
    } while (!statement.tags.some(element => subject.tags.includes(element)));

    return statement;
}

const generateSentence = (subjectPref=null) => {
    const subject = generateSubject(subjectPref);
    console.log(subject);
    const statement = generateStatement(subject);
    return subject.word + ' ' + statement.statement;
}

console.log(generateTime());