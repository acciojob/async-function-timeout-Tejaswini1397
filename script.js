//your JS code here. If required.
    const text=document.getElementById("text");
	const delay=document.getElementById("delay");
   const btn=document.getElementById("btn");
	const outPut=document.getElementById("output");

async function showMessage(){
	
	const message=text.value;
	
	const delayVal=delay.vlue;
	await new Promise(resolve=>setTimeout(resolve,delayVal));
	outPut.innerText=message;
	
}
showMessage().then(()=>{
	outPut.innerHTML=text.value;
})
btn.addEventListener('click',showMessage);