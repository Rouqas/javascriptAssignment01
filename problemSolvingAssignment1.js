// 1st problem
function feetToMile(lengthInFeet){
    var howLong= lengthInFeet/5280;
    return howLong;
}
var urLength= feetToMile(8000);
console.log(urLength)


// 2nd problem
function woodCalculator(chair,table,bed){
    var totalWood=(chair*1)+(table*3)+(bed*5);
    return totalWood;
}
var result=woodCalculator(11, 5, 9);
console.log(result,' feet')


// 3rd problem
function brickCalculator(floorsIGot){
    if(floorsIGot<=10){
        var brickINeeded= floorsIGot*15000;
        }
    else if(floorsIGot<=20){
        brickINeeded= ((floorsIGot-10)*12000) + 10*15000;
    }
    else{
        brickINeeded=((floorsIGot-20)*10000)+(10*15000)+(10*12000);
    }
    return brickINeeded;
}
var building1= brickCalculator(15);
console.log(building1,'pieces of brick')


// 4th problem