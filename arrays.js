var chocolateBars = [`snickers`,`hundred grand`, `kitkat`,`skittles`];

function addElementToBeginningOfArray(a,b){
  var myArray = [b,...a];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(a,b) {
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a,b){
  var c = [...a,b];
  return c;
}

function destructivelyAddElementToEndOfArray(a,b){
    a.push(b);
    return a;
}

function accessElementInArray(a,b){
  return a[b];
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a){
  c=a.slice(1);
  return c;
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a){
  c=a.splice(0,a.length -1);
  return c;
}
