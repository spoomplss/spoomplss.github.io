// HTML Imports
$(function(){
    $('#header_import').load('header.html')
})
$(function(){
    $('#footer_import').load('footer.html')
})
$(function(){
    $('#contact_import').load('contact.html')
})

// Event Listeners
let center = document.getElementsByClassName('mobile_centered');
let gone = document.getElementsByClassName('mobile_disappear');
window.addEventListener('resize', function() {
    if (window.innerWidth - 20 < window.innerHeight) {
        for (i=0;i < center.length;i++) {
            center[i].style.justifyContent = 'center';
            gone[i].style.display = 'none';
        }
    }
    if (window.innerWidth - 20 >= window.innerHeight) {
        for (i=0;i < center.length;i++) {
            center[i].style.justifyContent = 'left';
            gone[i].style.display = 'block';
        }
    }
  });