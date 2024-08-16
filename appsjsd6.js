const array=["apple","banana","guavava","mango","Pomegranate"]
console.log(array)
for(let i=0; i< array.length;i++){
    console.log("Index:",i ,"Values:", array[i]);
}
const newArray =array.map((array,index) =>
    {
        return `${index+1} . $(array)`
    });
    //filter//
const numbers =[1,2,3,4,5,6,7,8,9];
const evenNumbers =numbers.filter((numbers) => numbers % 2 === 0);
console.log("🚀 ~  evenNumbers :",  evenNumbers );
//concat//
const emoticons =["😊","😂","😁","😒","😍"];
console.log("🚀 ~ emoticons :", emoticons );
const moreEmoticons=["🫡"];
const allEmoticons = emoticons.concat(moreEmoticons);
console.log("🚀 ~ afterconcatination:", allEmoticons)
//push//
const array1=[1,2,3,4,5];
console.log("🚀 ~ array1:", array1);
const newArray1=array1.push(10);
console.log(array1.push(10));
console.log("🚀 ~ newArray1:", newArray1);
//shift//
const fruits=["apple","banana","guavava","mango","Pomegranate"];
console.log("🚀 ~ fruits:", fruits)
const newFruits=fruits.shift();
console.log("🚀 ~ newFruits:", newFruits);
//sort//
const unSorted=[7,9,3,4,5,6]
console.log("🚀 ~ unSorted:", unSorted)
console.log("🚀 ~ Sorted:", unSorted.sort())

//fill//
const filling=[2,32,6,7,9,3,9,36];
console.log("🚀 ~ filling:", filling)
console.log("🚀 ~ filling:", filling.fill("ff",2))
//find//
const filling1=[2,32,6,7,9,3,9,36];
console.log("🚀 ~ filling1:", filling1)
function check(num){
    return num>32;
}
console.log("🚀 ~ filling1:", filling1.find(check));
//findindexof//
const filling2=[2,3,6,0,9,5,7,36];
console.log("🚀 ~ filling2:", filling2)
function check1(num){
    return num>18;
}
console.log("🚀 ~ filling2:", filling2.findIndex(check1));
//some//
const ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age>18;
  }
console.log("🚀 ~ ages:", ages.some(checkAdult));
//every//
const ages1 = [3, 10, 18, 20];
function checkAdult(age) {
    return age>18;
  }
console.log("🚀 ~ ages:", ages1.every(checkAdult));
//includes//
const ages2 = [3, 10, 18, 20];
console.log("🚀 ~ ages2:", ages2.includes(1));
//Nested array//
const animalPairs=[
    ['doe','buck'],
    ['ewe','ram'],
    ['peahen','peacock'],
    ['cow','bull']
]
console.log("🚀 ~ animalPairs:", animalPairs);
typeof NaN;
//if-else//
const age=17
if (age>18) {
    console.log("ELIGIBLE FOR LICENSE");
    
} else {
    console.log("NOT ELIGIBLE FOR LICENSE");
    
}
let x=0;
let y=0;
let z=1;

if( ++x && ++y && z++ && y-- & --y && y-- || ++z){
    console.log(x,y,z)
}
