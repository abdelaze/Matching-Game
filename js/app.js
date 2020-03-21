// Shuffle function

// Get The All List Items and all elements in html

// get parent list 
var parent = document.getElementsByClassName('deck');



// get list items 

var l = document.getElementsByClassName('card');

//array that hold all the children of list items and array the hold them after shuffle

var arr1=[],arr2=[];

for(var i=0;i<16;i++) {
	
   arr1.push(l[i].children[0].classList.item(1));
	
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

arr2 = shuffle(arr1);

for(var i=0;i<16;i++) {
	
	l[i].children[0].classList.remove(l[i].children[0].classList.item(1));
	l[i].children[0].classList.add(arr2[i]);
	
}



// Get The All List Items and all elements in html

// get parent list 
var parent = document.getElementsByClassName('deck');

// get list items 

var l = document.getElementsByClassName('card');

// get the moves span

var move = document.getElementsByClassName('moves');

// get the win message 

var cong = document.getElementsByClassName('congratulate');

// get the header tag

var header = document.getElementsByTagName('h1');


// get the stars and moves anfd restart div 

var stars =document.getElementsByClassName('score-panel');

// get stars list 

var sl = document.getElementsByClassName('stars');


// get the spans that hold number of moves and stars and time after the game is finished 

var mov = document.getElementById('mov');

var strs = document.getElementById('str');

var time = document.getElementById('time');


// set the time when the game start 


var timer = document.getElementById('timer');


var t = setInterval(function (){
	
	
	timer.textContent++;
	time.textContent = timer.textContent;
	
},1000);

// make acounter that calculate match elements 

var match=0;



var c=0,arr = [],x,m;

for(var i= 0;i<16;i++) {
	
	
	
	l[i].addEventListener('click',function (){
		
		if(!this.classList.contains('open')) {
		  	c++;
		
		this.classList.add('open','show');
		this.style.cursor = 'default';
     	arr.push(this);
		
		// when the count is even we call the function 
		
		
		
		
		
		
	
		if(c%2==0) {
			
			// call the check function 
			check(arr);
			arr = [];
		}
			
	
		
		// calculate the number of moves
		
		move[0].textContent++;
			
	
		
		m = move[0].textContent;
		
		
	    if(m>=7 && m<10) {
			sl[0].children[2].children[0].classList.remove('fa-star');
			sl[0].children[2].children[0].classList.add('fa-star-o');
		}
			
			if(m>=10&&m<=14) {
			sl[0].children[1].children[0].classList.remove('fa-star');
			sl[0].children[1].children[0].classList.add('fa-star-o');
		}
			
		
		if(m>=16) {
	  
		
			sl[0].children[0].children[0].classList.remove('fa-star');
			sl[0].children[0].children[0].classList.add('fa-star-o');
			strs.textContent = 1;
			
	}
			
		
     
		
		
		}
	
		
	});// end of evnet listenr click
	

	
} // end of looping on the list 




// function that check if the list items arr equal or not

function check( arr2 ) {
	if(arr2[0].children[0].classList.item(1) == arr[1].children[0].classList.item(1)) {
		arr2[0].classList.add('match');
		arr2[1].classList.add('match');
		
		match+=2;
		
		if(match==16) {
			
			setTimeout(function (){
				
			cong[0].style.display = 'block';
			mov.textContent = m;
			parent[0].style.display = 'none';
			header[0].style.display = 'none';
			stars[0].style.display = 'none';
            clearInterval(t);
				
			},1000);
		}
	   	
	}
	
	else {
		
		setTimeout (function (){
			
			arr2[0].classList.remove('open','show');
		    arr2[1].classList.remove('open','show');
			
			
		},1000);
		
		

		
				
	}
}




// get restart class

var restart=document.getElementsByClassName('restart');

var res = restart[0].children[0];

res.onclick = function () {
	
	location.reload();
}

// get play again button 


var btn = document.getElementById('playAgain');

btn.onclick = function () {
	
	location.reload();
}

// make atimer 






