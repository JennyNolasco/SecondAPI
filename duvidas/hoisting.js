console.log('EITA', test)
var test = "Test";
 
(function() {
    console.log(test); // >>> undefined
    var test = "Denovo";
    console.log('OPS', test); 
})();
