const headers = document.querySelectorAll('.info h1');
const texts = document.querySelectorAll('.info p');

document.addEventListener('scroll', function() {
    headers.forEach(function(header) {
        let firstHeaderPosition = Math.ceil(headers[0].getBoundingClientRect().top);
        let secondHeaderPosition = Math.ceil(headers[1].getBoundingClientRect().top);
        if (firstHeaderPosition < 400) {
            headers[0].style.cssText = "transform:translateX(0); opacity:1";
            texts[0].style.cssText = "transform:translateY(0); opacity :1";
        }

        if (secondHeaderPosition < 400) {
            headers[1].style.cssText = "transform:translateX(0); opacity:1";
            texts[1].style.cssText = "transform:translateY(0); opacity :1";

        }


    });
})