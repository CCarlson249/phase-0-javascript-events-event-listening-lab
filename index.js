function addingEventListener() {
    const input = document.getElementById('button');
    console.log('shit')
    function clickAlert() {
    alert('I was clicked!');
    }

    input.addEventListener('button', clickAlert);
}
addingEventListener();