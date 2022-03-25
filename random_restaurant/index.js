const userTags = document.getElementById('tags');
const text = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {        
        setTimeout(() => {
            e.target.value = '';
        }, 10)

        randomSelect();
    }
});

function createTags(input) {
    const tags = input.split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim());

    userTags.innerHTML = '';

    tags.forEach(tag => {
        const userTag = document.createElement('span');
        userTag.classList.add('tag');
        userTag.innerText = tag;
        userTags.appendChild(userTag);
    });
}

function randomSelect() {
    const iterations = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        
        highlightTag(randomTag);

        setTimeout(() => {
            removeTagHighlight(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        });
    }, iterations * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function removeTagHighlight(tag) {
    tag.classList.remove('highlight');
}