
function Calculate(){
let units=Number(document.getElementById('unit').value);
//i assume the fixed value as 480
let rate;
if(units<=60)
{
	 if(units<=30){
	 		rate=(units*2.50)+30;
	 }
	 else
	 {
	 	rate=(30*2.50)+((units-30)*4.85)+60;
	 }
}
	else
	{
	if(units<=90){

		rate=(60*7.85)+(((units-60)*10)+90);
	}
	else if(units<=120)
	{
		rate=(60*7.85)+(30*10.00)+(units-90)*27.75+480;

	}
	else if(units<=180)
	{
		rate=(60*7.85)+(30*10)+(30*27.75)+(units-120)*32+480;

	}
	else
	{

		rate=(60*7.85)+(30*10)+(30*27.75)+(60*32)+(units-180)*45+540;
	}
}	 


document.getElementById("result").innerHTML="Your Bill Amount is:"+rate;

   }