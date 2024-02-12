const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');
button.addEventListener('click', () => {
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

        input.value = ''; // Clear the input
    } else {
        alert('Please enter a chapter name.');
    }
    input.focus(); // Set focus back to input
});
