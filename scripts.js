function integreSe() {
    alert("Preparado para conhecer a verdadeira INTENSIDADE universitária?");
}

let initialContent = '';
let loadCount = 0;


function saveInitialContent() {
    initialContent = document.querySelector('main').innerHTML;
}


function loadMoreContent() {
    loadCount++;
    const contentArea = document.createElement('div');
    contentArea.classList.add('reloaded-content');
    contentArea.innerHTML = initialContent;
    document.body.insertBefore(contentArea, document.querySelector('.cta'));
}


function addScrollEvent() {
    let isScrolling = false;

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;

            setTimeout(() => {
                const scrollPosition = window.scrollY + window.innerHeight;
                const pageHeight = document.documentElement.scrollHeight;

                if (scrollPosition >= pageHeight - 100) {
                    loadMoreContent();
                }

                isScrolling = false;
            }, 200); 
        }
    });
}


window.onload = () => {
    saveInitialContent();
    addScrollEvent();
};