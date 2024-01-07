const searchIcon = document.getElementById('searchIcon')
const searchEngine = document.getElementById('searchEngine')


searchIcon.addEventListener('click', ()=>{
   searchEngine.classList.toggle('active')
})