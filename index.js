function myEach(collection, callback) {
	let arr;
	if (!Array.isArray(collection)) {
		arr = [];
		for (let prop in collection) {
			arr.push(collection[prop]);
		}
	} else arr = [...collection];
	for (let val of arr) {
		callback(val);
	}
	return collection;
}

function myMap(collection, callback) {
	let arr = [];
	if (!Array.isArray(collection)) {
		for (let prop in collection) {
			arr.push(collection[prop]);
		}
	} else arr = [...collection];
	for (let i = 0; i < arr.length; i++) {
		arr[i] = callback(arr[i]);
	}
	return arr;
}

function myReduce(collection, callback, acc = collection[0]) {
    if (!Array.isArray(collection)) {
        collection = Object.values(collection)
        acc = acc || collection[0]
	}
    if (arguments.length === 2) collection = collection.slice(1)
    for (let val of collection) {
        acc= callback(acc, val)
    }
    return acc
}

function myFind(collection, callback) {
    for (let item of collection) {
        if (callback(item)) return item
    }
}

function myFilter(collection, callback) {
    if (!Array.isArray(collection)) collection = Object.values(collection)
    let arr = [];
    for (let item of collection) {
        if (callback(item)) arr.push(item)
    }
    return arr
}

function mySize(collection) {return Object.keys(collection).length}

function myFirst(array, n) {
    if (arguments.length === 1) return array[0]
    let arr=[]
    for (let i = 0; i < n; i++) {
        arr.push(array[i])
    }
    return arr
}

function myLast(array, n) {
    if (arguments.length === 1) return array[array.length-1]
    let arr=[]
    for (let i = array.length-1; i >= (array.length - n); i--) {
        arr.push(array[i])
    }
    return arr.reverse()
}

function myKeys(obj) {
    let arr = []
    for (let prop in obj) {
        arr.push(prop)
    }
    return arr
}

function myValues(obj) {
    let arr = []
    for (let prop in obj) {
        arr.push(obj[prop])
    }
    return arr
}

// function myFlatten(arr, bool, newArr=[]) {
//     if (bool) {
//         for (let item of arr) {
//             newArr.push(item)
//         }
//     }
// }

function mySortBy(array, callback) {
    
}