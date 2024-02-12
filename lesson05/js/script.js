
document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#addChapter');
    const list = document.querySelector('#chapterList');
    const searchInput = document.querySelector('#searchInput');

    button.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            deleteButton.textContent = '❌';
            li.textContent = input.value;
            li.appendChild(deleteButton);
            list.appendChild(li);

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
            });

            input.value = ''; 
        } else {
            alert('Please enter a chapter name.');
        }
        input.focus(); 
    });

    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();
        const chapters = list.querySelectorAll('li');

        chapters.forEach(function (chapter) {
            const chapterName = chapter.textContent.toLowerCase();
            if (chapterName.includes(searchValue)) {
                chapter.style.display = 'block';
            } else {
                chapter.style.display = 'none';
            }
        });
    });
});
