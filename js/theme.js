const btn =document.querySelector('.theme');
function initialState(themeName){
    localStorage.setItem('theme',themeName);
    document.documentElement.className = themeName;
}
initialState('light-theme');

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        initialState('light-theme');
    } else {
        initialState('dark-theme');
    }
}
btn.addEventListener('click', (e)=>{
    toggleTheme();
});