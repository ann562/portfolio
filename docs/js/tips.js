// Toggle checklist items
document.addEventListener('DOMContentLoaded', function() {
    const checklistItems = document.querySelectorAll('.toggle');

    checklistItems.forEach(item => {
        item.addEventListener('click', function() {
            if (item.textContent === 'X') {
                item.textContent = '✔';
            } else {
                item.textContent = 'X';
            }
            item.classList.toggle('checked');
        });
    });
});

// Draggable functionality for checklist
const checklist = document.getElementById('checklist');

checklist.onmousedown = function(event) {
    let shiftX = event.clientX - checklist.getBoundingClientRect().left;
    let shiftY = event.clientY - checklist.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        checklist.style.left = pageX - shiftX + 'px';
        checklist.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    checklist.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        checklist.onmouseup = null;
    };
};

checklist.ondragstart = function() {
    return false;
};
