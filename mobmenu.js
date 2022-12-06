// add eventlistener "click" to the element checkid, executes function navStatus 
document.getElementById('checkid').addEventListener('click', navStatus);



// check if navigation is opened

function navStatus() {
	
  if (document.body.classList.contains('menu-active')) {
   navClose();

  } 
  else {
   navOpen();
  
  }
}

// if opened, remove class for opened menu 

function navClose() {
  document.body.classList.remove('menu-active');
  document.getElementById("menuid").style.transform = "translateX(100%)";
}

// if closed, add class for opened menu 

function navOpen() {
  document.body.classList.add('menu-active');
  document.getElementById("menuid").style.transform = "translateX(0)";

}
