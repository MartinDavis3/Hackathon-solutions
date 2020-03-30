
// Sum of Peoples Budgets
// https://edabit.com/challenge/tmnCStcrkdWbreKP5

//Class constructor
class PersonalBudget {
    constructor ( name, age, budget ) {
        this.name = name;
        this.age = age;
        this.budget = Number( budget );
    }

    setBudget( budget ) {
        this.budget = Number( budget );
    }

}

const getBudgets = ( ...budgetObjs ) => {
    var budgetSum = 0;
    for ( let i = 0; i < budgetObjs.length; i++) {
        var budgetVal = budgetObjs[i].budget;
        budgetSum += budgetVal;
    }
    return budgetSum;    
}

var johnBudget = new PersonalBudget( 'John', 25, 3000 );
var jillBudget = new PersonalBudget( 'Jill', 47, 5650 );
var jeffBudget = new PersonalBudget( 'Jeff', 68, 1625 );

console.log( 'Sum of Peoples Budgets' );
console.log( johnBudget );
console.log( jillBudget );
console.log( jeffBudget );
console.log( 'Sum:', getBudgets( johnBudget, jillBudget, jeffBudget) );
console.log();

//Get Century
// https://edabit.com/challenge/SAdqaWKRpjLfZnGKA

const getCentury = ( year ) => {
    var ordinalIndicator = 'th';
    var century = Math.floor( ( year + 99 ) / 100 );
    if (century > 20 ) { 
        ordinalIndicator = 'st';
    }
    return `${century}${ordinalIndicator} century`;
}

console.log( 'Get Century' )
console.log( 'Year 1000:', getCentury( 1000) );
console.log( 'Year 1701:', getCentury( 1701) );
console.log( 'Year 2005:', getCentury( 2005) );
console.log();

// Object to Array
// https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

class ChemElement {
    constructor( name, chemSymbol, atomicWeight, wtVariance) {
    this.name = name;
    this.chemSymb = chemSymbol;
    this.atomicWeight = Number(atomicWeight);
    this.wtVariance = Number(wtVariance);
    }
}

//This is the routine as requested for the challenge.
const objectToArray = ( obj ) => {
    var objVals = Object.values( obj );
    var objKeys = Object.keys( obj );
    var objArray = [];
    var pairArray = [];
    for ( let i = 0; i < objKeys.length; i++ ) {
        pairArray = [ objKeys[ i ] , objVals[ i ] ];
        objArray.push( pairArray );
    }
    return objArray;
}

//This is perhaps an even better option - putting the key, value pairs into a map
const objectToMap = ( obj ) => {
    var objVals = Object.values( obj );
    var objKeys = Object.keys( obj );
    var objMap = new Map();
    for ( let i = 0; i < objKeys.length; i++ ) {
        objMap.set( objKeys[ i ] , objVals[ i ] );
    }
    return objMap;
}

hydrogen = new ChemElement( 'hydrogen', 'H', 1.00784, 6.075E-09 );
carbon = new ChemElement( 'carbon', 'C', 12.0096, 3.333E-07 );


console.log( 'Object to Array' );

console.log( 'hydrogen object:', hydrogen );

var hArray = objectToArray( hydrogen );
console.log( 'hydrogen object as array:', hArray );

console.log( 'carbon object:', carbon );

var cMap = objectToMap( carbon );
console.log( 'carbon object as map:', cMap );

console.log();


// Index Multiplier
// https://edabit.com/challenge/3Efavz8YmSBia4p8s

const reducingFunction = ( acc, val, ind ) => (acc + ind * val);

// Initial value of 0 used to ensure empty array returns 0 rather than an error
// and also starts index at zero, rather than 1.
const indexMultiplier = ( anArray) => anArray.reduce( reducingFunction, 0 );

console.log( 'Index Multiplier' );
var testArrayOne = [ 1, 2, 3 ];
console.log( testArrayOne, ' gives: ', indexMultiplier( testArrayOne ) );
var testArrayTwo = [];
console.log( testArrayTwo, ' gives: ', indexMultiplier( testArrayTwo ) );
var testArrayThree = [ 23, -4, 1, 2 ];
console.log( testArrayThree, ' gives: ', indexMultiplier( testArrayThree ) );
console.log();
