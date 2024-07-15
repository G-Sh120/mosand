let stars = document.getElementById('stars')
let moon2 = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat6 = document.getElementById('boat')
let mosand = document.querySelector('.mosand')

window.onscroll = function(){
    let value = scrollY; // to know position of scroll
    stars.style.left = value + 'px'; /*عشان تخلي النجوم تروح لليمين*/ 
    moon.style.top = value * 3 + 'px'; // 3 because i can make it faster than stars
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 4 + 'px';
    mosand.style.fontSize = value + 'px';
    
    if (scrollY >= 67) 
    {
        mosand.style.fontSize = 67 + 'px'; 
        mosand.style.position ='fixed'; 
    }

    if (scrollY >= 463) {
        mosand.style.display ='none';
    }else{
        mosand.style.display ='block';
    }

    if (scrollY >= 127) {
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
    }

      
}


