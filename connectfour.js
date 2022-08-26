// ------turn works------

var chip = $(this).find('.dot')
var col = "css('background-color')" 

function restart(){
    btn = document.querySelector("button")
    btn.textContent="Restart"
    btn.innerHTML = "Restart";
    btn.style.width = "100px"
    btn.style.height= "80px"
    btn.style.textAlign = "center"
    btn.style.position = "relative"
    btn.style.marginLeft = "40%"
    $('h3').eq(1).fadeOut('fast')
    $('h3').eq(0).fadeOut('fast')
    btn.addEventListener("click", function () {
        location.reload();
    });
    }

    function winChecker(){
            if(one==='rgb(255, 0, 0)'){
                alert('red player wins')
                $( document ).ready(function(){restart()})
                
            }
            else if(one==='rgb(0, 0, 255)'){
                alert('blue player wins')
                $( document ).ready(function(){restart()})
            }
    }

function verticalWin(){
    for(col=0;col<7; col++){{for (row=0; row<6; row++){
        one = $('.column').eq(col).find('.dot').eq(row).css('background-color')
        two = $('.column').eq(col).find('.dot').eq(row+1).css('background-color')
        three = $('.column').eq(col).find('.dot').eq(row+2).css('background-color')
        four = $('.column').eq(col).find('.dot').eq(row+3).css('background-color')
        if(one===two && one===three && one===four && one !=='rgb(187, 187, 187)'&&one!==undefined){
            winChecker()
    }
}
    }}}


function horizontalWin(){
    for(row=0;row<6; row++){{for (column=0; column<7; column++){
        one = $('.column').eq(column).find('.dot').eq(row).css('background-color')
        two = $('.column').eq(column+1).find('.dot').eq(row).css('background-color')
        three = $('.column').eq(column+2).find('.dot').eq(row).css('background-color')
        four = $('.column').eq(column+3).find('.dot').eq(row).css('background-color')
        if(one===two && one===three && one===four && one !=='rgb(187, 187, 187)'&&one!==undefined){
            winChecker()
    }

    
}}}}



function rightDiagonalWin(){
    for(col=0;col<6; col++){{for (row=-1; row>-6; row--){
        uno = $('.column').eq(col).find('.dot').eq(row).css('background-color')
        duos = $('.column').eq(col+1).find('.dot').eq(row-1).css('background-color')
        tres = $('.column').eq(col+2).find('.dot').eq(row-2).css('background-color')
        quatro = $('.column').eq(col+3).find('.dot').eq(row-3).css('background-color')
        if(uno===duos && uno===tres && uno===quatro && uno!=='rgb(187, 187, 187)' && uno!==undefined){ 
            if(uno==='rgb(255, 0, 0)'){
                alert('red player wins')
                $( document ).ready(function(){restart()})
                
            }
            else if(uno==='rgb(0, 0, 255)'){
                alert('blue player wins')
                $( document ).ready(function(){restart()})
            }
    }  }}}}


function leftDiagonalWin(){
    for(col=-1;col>-7; col--){{for (row=-1; row>-6; row--){
        uno = $('.column').eq(col).find('.dot').eq(row).css('background-color')
        duos = $('.column').eq(col-1).find('.dot').eq(row-1).css('background-color')
        tres = $('.column').eq(col-2).find('.dot').eq(row-2).css('background-color')
        quatro = $('.column').eq(col-3).find('.dot').eq(row-3).css('background-color')
        if(uno===duos && uno===tres && uno===quatro && uno!=='rgb(187, 187, 187)' && uno!==undefined){
            if(uno==='rgb(255, 0, 0)'){
                $( document ).ready(function(){restart()})
                alert('red player wins')
            }
            else if(uno==='rgb(0, 0, 255)'){
                $( document ).ready(function(){restart()})
                alert('blue player wins')
            }
    }  }}}}


function turn(item){
    if(Math.abs(item)%2==0){
        color = 'rgb(0, 0, 255)'
        player='red player'
        $('h3').eq(1).text(player+" , IT'S YOUR TURN ")
 
        $( document ).ready(function(){verticalWin()})
        $( document ).ready(function(){horizontalWin()})
        $( document ).ready(function(){rightDiagonalWin()})
        $( document ).ready(function(){leftDiagonalWin()})
        return color
    }
    else if(Math.abs(item)%2==1) {
        color = 'rgb(255, 0, 0)'
        player='blue player'

        $('h3').eq(1).text(player+" , IT'S YOUR TURN ")
        $( document ).ready(function(){verticalWin()})
        $( document ).ready(function(){horizontalWin()})
        $( document ).ready(function(){rightDiagonalWin()})
        $( document ).ready(function(){leftDiagonalWin()})
        return color
    }
    

}
var newturn=0


function insertNewChip(){
        for(t=-1; t>-7;t--){
            
            if($(this).find('.dot').eq(t).css('background-color')==='rgb(187, 187, 187)'){
                $(this).find('.dot').eq(t).css('background-color',turn(newturn))
                newturn++
                return t     
            }
            ;
        }
        }
column = $('dot')




for(i=0; i<42; i++){
    $('.column').eq(i).on('click', insertNewChip)
    item = -1
    
    }

