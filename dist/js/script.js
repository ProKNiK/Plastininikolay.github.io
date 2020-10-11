const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');
counters.forEach((item, i) => {
    if ((parseInt(item.innerHTML)) <= 100 && (parseInt(item.innerHTML)) >=0){
    lines[i].style.width = item.innerHTML;
    } else {
        lines[i].style.width = '100%'
    }
});
