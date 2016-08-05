(function() {
    function setErrorMessage(el, message) {
        el.innerText = message;
        el.style.display = 'block';
    }

    function clearErrorMessage(el) {
        el.innerText = '';
        el.style.display = 'none';
    }

    function onFormSubmit(event) {
        var isChecked = document.querySelector('input[name=celebrationType][value=Other]').checked;
        var otherVal = document.getElementById('celebrationOther').value;
        var errorEl = document.querySelector('.error');

        if (isChecked && otherVal.length === 0) {
            event.preventDefault();
            setErrorMessage(errorEl, 'Please tell us what type of celebration you are having');
        } else {
            clearErrorMessage(errorEl);
        }
    }

    document.addEventListener('submit', onFormSubmit);
})();
