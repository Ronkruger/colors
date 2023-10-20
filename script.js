//changing colors
var index = 0;

function changeColors(){
    var colors = ['red', 'blue', 'orange', 'yellow', 'green', 'purple'];
    document.getElementsByTagName('body')[0].style.transition = 'background 2s ease';
    document.getElementsByTagName('body')[0].style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}

//footer
const footer = document.getElementById('footer');
let date = new Date().getFullYear();
footer.innerHTML=`<p>${date} Ron el.</p>`