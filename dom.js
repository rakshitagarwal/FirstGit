var items = document.getElementsByClassName('list-group-item');

console.log(items);

items[2].style.backgroundColor = "Green";

for(var i=0; i< items.length; i++){
    items[i].style.fontWeight = "bold";
}