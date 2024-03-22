var form = document.getElementById('myForm');
var textInput = document.getElementById('textInput');

    form.addEventListener('submit', function(event) {
        if (textInput.value.trim() === '') {
            alert('Write a caption first!');
            event.preventDefault();
        }
        else {
            alert('Posting...')
        }
    });