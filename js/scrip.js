document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const productId = this.getAttribute('data-id');
        const selectedColor = document.getElementById('color').value;
        const selectedTalle = document.getElementById('talle').value;

        const productInfo = {
            id: productId,
            color: selectedColor,
            talle: selectedTalle
        };

        console.log('Producto agregado:', productInfo);
        // Acá podés agregarlo al carrito almacenándolo en localStorage o en tu sistema
    });
});


