var test = [1, 2, 3];
printReverse(test);

var checkThis = [1, 1, 1, 1, 1];
var checkThis2 = [1, 2];
var checkThis3 = [1, 1, 1, 3];
var checkThis4 = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
var checkThis5 = ["a", "b", "c"];
var checkThis6 = ["z", "z", "z"];
console.log(isUniform(checkThis));
console.log(isUniform(checkThis2));
console.log(isUniform(checkThis3));
console.log(isUniform(checkThis4));
console.log(isUniform(checkThis5));
console.log(isUniform(checkThis6));

var sumArray1 = [1, 2, 3];
var sumArray2 = [10, 3, 10, 4];
var sumArray3 = [-5, 100];

console.log(sumArray(sumArray1));
console.log(sumArray(sumArray2));
console.log(sumArray(sumArray3));

var maxarr = [1, 2, 3];
var maxarr2 = [10, 3, 10, 4];
var maxarr3 = [-5, 100];

console.log(max(maxarr));
console.log(max(maxarr2));
console.log(max(maxarr3));

/*********************PRACTICE FUNCTION-WITHIN-FUNCTION PASSING**************************/
function learn(arr, function2) {
    for (var i = 0; i < arr.length; ++i) {
        function2(arr[i]);
    }
}

function testFunction(someValue) {
    console.log("Hello" + " " + someValue);
}

learn(checkThis5, testFunction);

learn(checkThis5, function (someVal) {
    console.log("Hello" + " " + someVal + "_");
});

/*********************PRACTICE FUNCTION-WITHIN-FUNCTION PASSING**************************/

function printReverse(arrayToReverse) {
    var i;
    for (i = arrayToReverse.length - 1; i >= 0; --i) {
        console.log(arrayToReverse[i]);
    }
}

function isUniform(arrayToCheck) {
    var i;
    for (i = 0; i < arrayToCheck.length - 1; ++i) {
        if (arrayToCheck[i] !== arrayToCheck[i + 1]) {
            return false;
        }
    }
    return true;
}

function sumArray(arraySum) {
    var i;
    var sum = 0;
    for (i = 0; i < arraySum.length; ++i) {
        sum += arraySum[i];
    }
    return sum;
}

function max(maxNum) {
    var i;
    var max = maxNum[0];
    for (i = 1; i < maxNum.length; ++i) {
        if (maxNum[i] > max) {
            max = maxNum[i];
        }
    }
    return max;
}

var testThis = [
    {
        name: "bob",
        age: "36",
        job: "cook"
    },
    {
        name: "bob2",
        age: "31",
        job: "programmer"
    },
    {
        name: "bob3",
        age: "33",
        job: "janitor"
    }
]

function checkObjProperties(object) {
    for (var i = 0; i < object.length; ++i) {
        {
            console.log(object[i].name);
            console.log(object[i].age);
            console.log(object[i].job);
        }
    }
}

checkObjProperties(testThis);

var someObject = {
    friends: [
        {
            name: "Malfoy"
        },
        {
            name: "Crabbe"
        },
        {
            name: "Goyle"
        },
        {
            someNum: 2
        }
        ],
    color: "blue",
    isEvil: false
};

console.log(someObject.friends[0]["name"]);
console.log(someObject.friends[3]["someNum"]);
