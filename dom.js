var items = document.getElementsByClassName('list-group-item');

var li =document.getElementsByTagName('li');

items[2].style.backgroundColor = "Green";

for(var i=0; i< li.length; i++){
    li[i].style.fontWeight = "bold";
}