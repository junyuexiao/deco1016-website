function getStyle(obj, name) {
	if (window.getComputedStyle) {
		return getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name];
	}
}
//Defines a function to add a specified class value to an element
/*
 * parameter
 *  1. Obj element to add class attribute
 *  2. Cn the value of the class to be added
 */
function addClass(obj, cn) {
	if (!hasClass(obj, cn)) {
		obj.className += " " + cn;
	}
}
/*
 * Determine whether an element contains the specified class attribute value
 * parameters:
 * Return true if any, otherwise false
 */
function hasClass(obj, cn) {
	//Judge whether there is CN in obj
	var reg = new RegExp("\\b" + cn + "\\b");
	return reg.test(obj.className);
}
//Delete the specified class attribute
function removeClass(obj, cn) {
	//Create regular expression
	var reg = new RegExp("\\b" + cn + "\\b");
	//Delete class
	obj.className = obj.className.replace(reg, "");
}
// It is used to switch a class. If there is such a class in the element, it will be deleted. If there is no such class, it will be added
function toggleClass(obj, cn) {
	// Determine whether cn is included
	if (hasClass(obj, cn)) {
		removeClass(obj, cn);
	} else {
		addClass(obj, cn);
	}
}

// fadein

function setOpacity(elem, opacity) {

  if(elem.style.filter) {   //IE
      elem.style.filter = 'alpha(opacity:' + opacity * 100 + ')';
  } else {
      elem.style.opacity = opacity;    
  }
}

function fadeIn(elem, speed) {

   elem.style.display = "block";
   setOpacity(elem, 0);

   var tempOpacity = 0;
   (function(){
       setOpacity(elem, tempOpacity);
       tempOpacity += 0.05;
       if(tempOpacity <= 1) {
           setTimeout(arguments.callee, speed);
           //tempOpacity += 0.05;
       }
   })();
}

function fadeOut(elem, speed) {

   elem.style.display="block";
   var tempOpacity = 1;
   (function(){
       setOpacity(elem, tempOpacity);
       tempOpacity -= 0.05;
       if(tempOpacity > 0) {
           setTimeout(arguments.callee, speed);
 
       } else {
           elem.style.display = "none"; // Cannot be placed outside an anonymous function and will execute first.
       }
   })();

}

function fadeTo(elem, speed, opacity){

   var tempOpacity = 0;
   elem.style.display = "block";
   (function(){
       setOpacity(elem, tempOpacity);
       tempOpacity += 0.05;
       if(tempOpacity <= opacity) {
           setTimeout(arguments.callee, speed);
       }
   })();
}

 