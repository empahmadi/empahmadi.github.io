function onMouseOver(event) {
    const a = event.target.closest('.m-l span');
    if (a && !a.classList.contains('selected')) {
        a.classList.add('selected');
        const div = document.createElement('div');
        div.classList.add('triangle');
        a.appendChild(div);
    }
}

function onMouseLeave(event) {
    const a = event.target.closest('.m-l span');
    const li = event.target.closest('.m-l span').parentElement
    if (a && !li.classList.contains('active')) {
        a.classList.remove('selected');
        const div = a.querySelector('.triangle');
        if (div) {
            a.removeChild(div);
        }
    }
}

const aElements = document.querySelectorAll('.m-l span');
aElements.forEach((a) => {
    a.addEventListener('mouseover', onMouseOver);
    a.addEventListener('mouseleave', onMouseLeave);
});

// -------------------------------------------------- Contents ------------------------------
function loadContent(content) {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = content;
}

function about() {

}
