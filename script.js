//Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);
$~11!A      jmh
var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'Jogn';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;
*/
//console.log(job);
/*
job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last Name?');

alert('His last name is ' + lastName);
*/


//Lecture 3: operators

/*var now = 2018;
var birthYear = now - 26;
birthYear = now - 26 * 2;
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn++;
ageMark *= 2;

console.log('Jogn is ' + ageJohn);
console.log('Mark is ' + ageMark);*/


//Lecture 4: ifelse statement

/*var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes'){
    console.log(name + ' is married!')
}else{
    console.log('Hopefully ' + name + ' will marry soon!');
}

isMarried = true;

if(isMarried){
    console.log('Is married');
}*/

// Lecture 5: boolean logic and switches

var age = 26;

if (age < 20){
    console.log('John is a teenager');
}else if (age >= 20 && age < 30){
    console.log('John is a young man');
}
else{
    console.log('John is a man');
}

var job = 'developer';

job = prompt('What does John do?');

switch(job){
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives cab in Lisbon');
        break;
    default:
        console.log('John does something else');
}























