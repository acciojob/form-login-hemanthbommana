function getFormvalue() {
    //Write your code here
	let frm = document.getElementById('form1');
	let fname = frm.elements['fname'].value;
	let lname = frm.elements['lname'].value;
	alert(fname +" "+ lname);
	

}
