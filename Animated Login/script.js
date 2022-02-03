let colors = [
    "#f882a0",
    "#d84783",
    "#dadada",
    "#8f4dad",
    "#9b1b71"
]

function createElement(){
    
    let container = document.querySelector('.container');
    let span = document.createElement('span');

    var size = Math.random() * 5;
    const bg = colors[Math.floor(Math.random() * colors.length)];
    span.style.height = 20 + size + 'px';
    /* I don't like this number */
    span.style.borderRadius = 50 + size + 'px';
    span.style.width = 20 + size + 'px';
    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';
    span.style.backgroundColor = bg;
    container.appendChild(span);    
    
    setTimeout(() =>{
        span.remove()
    },5000);
}

setInterval(createElement,80);