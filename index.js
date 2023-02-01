function addingEventListener() {
    const input = document.getElementById('button');
    
    function clickAlert() {
    alert('I was clicked!');
    }

    input.addEventListener('button', clickAlert);
}
addingEventListener();