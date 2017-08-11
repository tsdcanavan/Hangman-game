

console.log('Starting ...');
$("#keyInput").keypress(function(e) {
    if (e.which !== 0) {
        alert("Charcter was typed. It was: " + String.fromCharCode(e.which));
    }
});
console.log('Ending ...');