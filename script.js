const target = document.getElementById('dataForm');
target.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the normal form submission

    const formData = new FormData(this);
    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Handle the response data
        UIkit.notification({
            message: data,
            status: 'success',
            pos: 'top-center'
        });
        target.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        UIkit.notification({
            message: error,
            status: 'danger',
            pos: 'top-center'
        });
        }
    );
});
