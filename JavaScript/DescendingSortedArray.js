const arr1 = [14.3,43.9,22.5,66.1]; 
const arr2 = [59,36,18,85,100]; 

function DescSort(arr) { 
	arr.sort((a,b)=>b-a); 
	return arr; 
} 

console.log(DescSort(arr1)); 
console.log(DescSort(arr2));
