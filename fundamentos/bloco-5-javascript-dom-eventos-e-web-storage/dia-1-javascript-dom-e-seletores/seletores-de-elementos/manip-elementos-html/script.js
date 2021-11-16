document.querySelectorAll('#header-container')[0].style.backgroundColor = '#036b52';

let sections = document.getElementsByTagName('section');
sections[0].style.backgroundColor = 'rgb(255, 147, 120)';
sections[1].style.backgroundColor = 'rgb(240,200,90)';

let subTitles = document.querySelectorAll('.emergency-tasks h3');
subTitles[0].style.backgroundColor = 'rgb(153, 50, 204)';
subTitles[1].style.backgroundColor = 'rgb(153, 50, 204)';

let subTitlesTwo = document.getElementsByTagName('h3');
subTitlesTwo[2].style.backgroundColor = 'rgb(0, 0, 0)';
subTitlesTwo[3].style.backgroundColor = 'black';

// let footerBg = document.getElementById('footer-container');
// footerBg[0].style.backgroundColor = '#6B8E23'

let footerBg = document.getElementsByClassName('footer-container');
footerBg[0].style.backgroundColor = '#006400';
footerBg[0].style.padding = '10px';