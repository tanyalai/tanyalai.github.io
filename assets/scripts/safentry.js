document.getElementById('check-in').onclick = () => {
    let list = document.getElementsByClassName('landing');
    for(let item of list){
        item.style.display = 'none';
    }
    let display = document.getElementsByClassName('contactForm');
    for(let item of display){
        item.style.display = 'block';
    }
    document.getElementById('back').style.display = 'inline-block';

}

document.getElementById('check-out').onclick = () => {
    alert('check-out clicked');
}

document.getElementById('back').onclick = () => {
    let list = document.getElementsByClassName('landing');
    for(let item of list){
        item.style.display = 'block';
    }
    list = document.getElementsByClassName('contactForm');
    for(let item of list){
        item.style.display = 'none';
    }
    
}
