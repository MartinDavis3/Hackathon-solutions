Class Assignment: 30-Mar Hackathon

# Sum-of-Peoples-Budgets

https://edabit.com/challenge/tmnCStcrkdWbreKP5

Create the function that takes an array with objects and returns the sum of people's budgets.

Examples

getBudgets([

  { name: "John", age: 21, budget: 23000 },
  
  { name: "Steve",  age: 32, budget: 40000 },
  
  { name: "Martin",  age: 16, budget: 2700 }
  
]) ➞ 65700

getBudgets([

  { name: "John",  age: 21, budget: 29000 },
  
  { name: "Steve",  age: 32, budget: 32000 },
  
  { name: "Martin",  age: 16, budget: 1600 }
  
]) ➞ 62600


# Get-Century

https://edabit.com/challenge/SAdqaWKRpjLfZnGKA

Create a function that takes in a year and returns the correct century.

Examples

century(1756) ➞ "18th century"

century(1555) ➞ "16th century"

century(1000) ➞ "10th century"

century(1001) ➞ "11th century"

century(2005) ➞ "21st century"

Notes

    All years will be between 1000 and 2010.
    
    The 11th century is between 1001 and 1100.
    
    The 18th century is between 1701-1800.


# Object-to-Array

https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

Write a function that converts an object into an array of keys and values.

Examples

objectToArray({

  D: 1,
  
  B: 2,
  
  C: 3
  
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({

  likes: 2,
  
  dislikes: 3,
  
  followers: 10
  
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


# Index-multiplier

https://edabit.com/challenge/3Efavz8YmSBia4p8s

Return the sum of all items in an array, where each item is multiplied by its index (zero-based. For empty arrays, return 0.

Examples

indexMultiplier([1, 2, 3, 4, 5]) ➞ 40

// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMultiplier([-3, 0, 8, -6]) ➞ -2

// (-3*0 + 0*1 + 8*2 + -6*3)

Notes

All items in the array will be integers.