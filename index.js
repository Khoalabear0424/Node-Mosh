var _ = require ('underscore'); // bringing in the underscore module.  

//the program assumes that the underscore module is...
//core module
//file or folder
//if we use ./underscore, it will be assumed to in the same folder.  since we didnt indicate that, it will assume it is in the node.module folder

//we will use the method called contain

var result = _.contains([1, 2, 3], 2);

console.log(result);