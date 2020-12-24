//Challenge 1
//With the assist of the arrow function learned

let wR = (a, b) => a % b;

document.write(wR(63, 50));



document.write("<br/><br/>")



// for(var i=0; i<=15; i++){
// 	console.log(i);
// };  Mere practice

//Challenge 2
// mission accomplished
function sumOfNumbers(n){
var total = 0

	for(var i = 0; i<=n; i++){
 	var total = total+i //total=+ means total= total+i
	}
return total;
}

document.write(sumOfNumbers(3));
