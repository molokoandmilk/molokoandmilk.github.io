$(".gallery-list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
        enabled: true
    }
});
const dialog = document.querySelector('.dialog-container');
function openDialog() {
    dialog.classList.add('shown');
}
function closeDialog() {
    dialog.classList.remove('shown');
}