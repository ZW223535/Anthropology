document.querySelectorAll('.cerchi').forEach(element => {
    element.addEventListener('mouseover', (node) => {
        console.log(node.fromElement)
        node.fromElement.classList.toggle('animate__rubberBand')
    })
})