document.querySelectorAll('.cerchi').forEach(element => {
    element.addEventListener('mouseover', (node) => {
        console.log(node.fromElement)
        node.fromElement.classList.toggle('animate__pulse')
    })
})

document.getElementById("schermata").onclick = function() {
    document.getElementById("schermata").style.display = "none";
}