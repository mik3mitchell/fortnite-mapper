$(document).ready(function(){ 
    
    // add markers to map on click
	$(document).on('click', '#map-area', function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY
		$(this).append(            
            $('<div class="marker"></div>').css({
                position: 'absolute',
                top: e.pageY + 'px',
                left: e.pageX + 'px',
            })
            );
        })
    });
    

// Clear All Button
$(document).on('click','.clear-btn',function() {
    $( ".marker" ).remove();
});

// Increase Size Marker Button
$('#increaseButton').click(function(){
    $('.marker').css({ 'height' : '+=5px' });
    $('.marker').css({ 'width' : '+=5px' });
});

// Decrease Marker Size Button
$('#decreaseButton').click(function(){
    $('.marker').css({ 'height' : '-=5px' });
    $('.marker').css({ 'width' : '-=5px' });
});

// Toggle Maps
$('.btnMapToggle').click(function()
{
     $('#map-area').toggleClass('fortnite-map-toggle fortnite-map'); //Adds 'a', removes 'b' and vice versa
     $('.btnMapToggle').toggleClass('shadow-active shadow-inactive'); //Adds 'a', removes 'b' and vice versa
});

shadow-inactive

// On Click If Body Then Add Marker Div, Else Pop-Up Menu

// Pop-Up Menu  -->  Display at location of click  
//              -->  If above a certain longitude, Then Popup's top will be at the bottom of cursor
//              -->  If below a certain longitude, Then Popup's bottom will be at the top of cursor
//              -->  Option To Remove target div  


// Clear all points button

// $(document).ready(function() { 
    
//     // add markers to map on click
//     $(document).click(function (ev) { 
//         if($('div').hasID('#map-area')) {       
//         $("body").append(            
//             $('<div class="marker"></div>').css({
//                 position: 'absolute',
//                 top: ev.pageY + 'px',
//                 left: ev.pageX + 'px',
//                 width: '20px',
//                 height: '20px',
//                 background: '#e71fb5'
//             })              
//         );               
//     }
//     });
    
// });


