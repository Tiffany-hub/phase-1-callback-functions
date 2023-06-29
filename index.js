function iReturnThings (thing){
    return thing;
}

//iReturnThings({ firstName: 'Brendan', lastName: 'Eich'});
//iReturnThings(function() {return 4 + 5;});

  //function main (cb) {
    //console.log(cb());
  //}
  
  //main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
  function greet (name, cb) {
    return cb(name);
  }
  
  greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
  
  function doMath (num1, num2, cb) {
    return cb(num1, num2);
  }
  
  doMath(42, 8, function (num1, num2) { return num1 * num2; });
