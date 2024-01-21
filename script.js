//your JS code here. If required.
//     const text=document.getElementById("text");
// 	const delay=document.getElementById("delay");
//    const btn=document.getElementById("btn");
// 	const outPut=document.getElementById("output");

// async function showMessage(){
	
// 	const message=text.value;
	
// 	const delayVal=delay.vlue;
// 	 const delayInMilliseconds = delayVal * 1000;
// 	await new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
// 	outPut.innerText=message;
	
// }

// btn.addEventListener('click',showMessage);

const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here
async function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
  output.innerText = message;
}
showMessage().then(()=>{
	output.innerHTML = text.value;
});
btn.addEventListener("click", showMessage);