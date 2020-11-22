var strlen = function(str){
    return "The length of the string is " + str.length;
};

module.exports.concan= function(a,b){
    var ans = a + b;
    console.log(`The final string is: "${ans}"`);
    return ans;
};

var pi = 3.142;

module.exports.strlen = strlen;
module.exports.pi = pi;

// The other way of exporting is:

// module.exports = {
//     strlen: strlen,
//     concan: concan,
//     pi: pi
// };