const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');
counters.forEach((item, i) => {
    if ((parseInt(item.innerHTML)) <= 100 && (parseInt(item.innerHTML)) >=0){
    lines[i].style.width = item.innerHTML;
    } else {
        lines[i].style.width = '100%'
    }
});
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
