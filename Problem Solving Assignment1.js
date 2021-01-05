// 1st problem
function feetToMile(lengthInFeet){
    var howLong= lengthInFeet/5280;
    return howLong;
}
var urLength= feetToMile(8000);
console.log(urLength)