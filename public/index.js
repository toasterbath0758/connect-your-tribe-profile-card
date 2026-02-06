const minecraftLever = document.querySelector('#lever');

minecraftLever.addEventListener('click', function(){
  minecraftLever.classList.toggle('active');
})

const leverImg = document.querySelector('.lever-img');

leverImg.addEventListener('click', function(){
  leverImg.classList.toggle('active');
})