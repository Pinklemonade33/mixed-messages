import fs from 'fs';

const convertTxtToArray = path => {
    return fs.readFileSync(path, 'utf8').split('\n');
}

const randomItem = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const femaleNames = (convertTxtToArray('female_names.txt'));
const maleNames = (convertTxtToArray('male_names.txt'));
const sports = ['Basketball', 'Baseball', 'Football', 'Hockey'];
const jobs = ['Software Engineering', 'Project Managment', 'Warehousing', 'Management', 'Phone Repair', 'Truck Driving'];
const hobbies = ['video games', 'reading', 'hiking', 'chess', 'drinking', 'camping', 'music'];
const drinks = ['lemonade', 'whiskey', 'coke', 'pepsi', 'tea', 'coffee', 'vodka', 'apple juice']
const food = ['chile', 'hotdog', 'steak', 'hamburger', 'taco', 'apple', 'cake', 'icecream', 'watermelon']
const misc = ['clean', 'walk the dog', 'shower', 'sleep']
const misc2 = ['forgot to', 'didnt want to', 'wouldnt', 'managed to',]
const misc3 = ['shopping', 'eating', 'cleaning', 'working', 'partying']
const misc4 = ['is', 'was', 'will be', 'is not']
const places = ['the mall', 'the store', 'work', 'school', 'home']
const misc5 = ['felt', 'was', 'can be']
const misc6 = ['fun', 'delicious', 'enjoyable', 'great']

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
    {statement:`was out ${randomItem(misc3)}`, tags:['person']},
    {statement:`${randomItem(misc2)} ${randomItem(misc)}`, tags:['person']},
    {statement:`ate ${randomItem(food)}`, tags:['person']},
    {statement:`${randomItem(misc4)} ${randomItem(misc3)} at ${randomItem(places)}`, tags:['person']},
    {statement:`${randomItem(misc5)} ${randomItem(misc6)}`, tags:['activity', 'object']},
]

const generateSentence = () => {
    const subject = randomItem(subjects)
    let statement;
    do {statement = randomItem(statements)} while (!statement.tags.some(element => subject.tags.includes(element)));
    return statement;
}