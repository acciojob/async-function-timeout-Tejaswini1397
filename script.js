//your JS code here. If required.
async function delayAndShowMessage(){
	const textInput=document.getElementById('text');
	const delayInput=document.getElementById('delay');
	const outPut=document.getElementById('output');

	const text=textInput.value.trim();
	const delayInSec=parseInt(delayInput.value);

	if(text==='' || isNaN(delayInSec) || delayInSec<0){
		alert('Please enter valid text and delay');
		return;
	}
	const delayMilliSec=delayInSec*1000;
	await new Promise(resolve=>setTimeout(resolve,delayMilliSec));

	outPut.textContent=text;
	
}
document.getElementById('btn').addEventListener('click',delayAndShowMessage);