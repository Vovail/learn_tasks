var table = document.getElementById("bagua-table");
table.onclick = function(event) {
    if (document.getElementById('area')) return;
    target = event.target.closest('#bagua-table td');
    if (!target) return;
    target.classList.add("target");
    var content = target.innerHTML;
    var editTd = document.createElement('td');
    editTd.id = 'area';
    var textArea = document.createElement('textarea');
    textArea.value = content;
    editTd.appendChild(textArea);
    target.parentElement.insertBefore(editTd, target);
    target.hidden = true;

    var okButton = createButton('OK');
    okButton.onclick = function() {
        var target = document.getElementsByClassName('target')[0];
        target.innerHTML = textArea.value;
        editTd.parentElement.removeChild(editTd);
        target.hidden = false;
        target.id = "";
        target.classList.remove("target");
    };

    var cancelButton = createButton('CANCEL');
    cancelButton.onclick = function() {
        editTd.parentElement.removeChild(editTd);
        target.hidden = false;
    };

    var buttonContainer = document.createElement('div');
    buttonContainer.className = "buttonContainer";
    buttonContainer.appendChild(okButton);
    buttonContainer.appendChild(cancelButton);
    editTd.appendChild(buttonContainer);
};

function createButton(value) {
    var button = document.createElement('input');
    button.type = 'button';
    button.value = value;
    return button;
}
