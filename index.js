const positions = {
    "slider": {
        position: 1,
        endPosition: 2,
    },
}

function toRight(prefix) {
    if (positions[prefix].position == positions[prefix].endPosition) return;
    let content_old = document.getElementById(`${prefix}-${positions[prefix].position}`)
    let content_now = document.getElementById(`${prefix}-${++positions[prefix].position}`);
    content_old.style.display = "none";
    content_now.style.display = "flex";
}

function toLeft(prefix) {
    if (positions[prefix].position == 1) return;
    let content_old = document.getElementById(`${prefix}-${positions[prefix].position}`)
    let content_now = document.getElementById(`${prefix}-${--positions[prefix].position}`);
    content_old.style.display = "none";
    content_now.style.display = "flex";
}
