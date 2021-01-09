function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

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

document.getElementById('check-in-2').onclick = function(){
    let value = document.getElementById('name');
    if(value.value != undefined && value.value.toString().length > 0){
        value.value = "";
        let list = document.getElementsByClassName('contactForm');
        for(let item of list){
            item.style.display = 'none';
        }
        document.getElementById('back').style.display = 'none';
        list = document.getElementsByClassName('safePass');
        for(let item of list){
            item.style.display = 'block';
        }
        list = document.getElementById('dateText');
        let d = new Date();
        let currentTime = formatAMPM(d);
        let month = d.toLocaleString('default', { month: 'long'})
        list.innerHTML = `${d.getDay()} ${month} ${d.getFullYear()}, ${currentTime}`;
    } else {
        document.getElementById('name').classList.remove('fade-out');
        let element = document.getElementById('name');
        let clone = element.cloneNode(true);
        element.parentNode.replaceChild(clone, element);
        // re-instantiate function
        document.getElementById('name').onkeyup = function(){
            if(this.value != undefined && this.value.toString().length != 0){
                document.getElementById('check-in-2').style.backgroundColor = "rgb(33, 176, 113)";
                document.getElementById('alertName').style.display = 'none';
            } else {
                document.getElementById('check-in-2').style.backgroundColor = "#86cdaf";
            }
        }
        document.getElementById('name').classList.add('fade-out');
        document.getElementById('alertName').style.display = 'block';
    }
}

document.getElementById('check-out-2').onclick = function(){
    let list = document.getElementsByClassName('safePass');
    for(let item of list){
        item.style.display = 'none';
    }

    list = document.getElementsByClassName('landing');
    for(let item of list){
        item.style.display = 'block';
    }
}

// initial function, gets deleted
document.getElementById('name').onkeyup = function(){
    if(this.value != undefined && this.value.toString().length != 0){
        document.getElementById('check-in-2').style.backgroundColor = "rgb(33, 176, 113)";
        document.getElementById('alertName').style.display = 'none';
    } else {
        document.getElementById('check-in-2').style.backgroundColor = "#86cdaf";
    }
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

document.getElementById('res').onclick = function(){
    this.style.color = "rgb(58, 121, 189)";
    this.classList.remove('text-secondary');
    document.getElementById('nonRes').classList.add('text-secondary');
    document.getElementById('line1').style.display = 'block';
    document.getElementById('line2').style.display = 'none';
}

document.getElementById('nonRes').onclick = function(){
    this.style.color = "rgb(58, 121, 189)";
    this.classList.remove('text-secondary');
    document.getElementById('res').classList.add('text-secondary');
    document.getElementById('line2').style.display = 'block';
    document.getElementById('line1').style.display = 'none';
}
