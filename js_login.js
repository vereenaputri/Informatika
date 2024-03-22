

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk melakukan submit

        function validateEmail(email) {
            const regex = /^[^\s@]+@gmail\.com$/;
            return regex.test(email);
        }
        
        // Function to validate password
        function validatePassword(password) {
            return password.length >= 8;
        }

        var email = document.querySelector('input[name="Email"]').value;
        var password = document.querySelector('input[name="password"]').value;
        console.log(email, password)
        // Memeriksa apakah email dan password sesuai dengan kriteria tertentu
        if (validateEmail(email) && validatePassword(password)) {
            alert('Data sesuai');
            location.href = './Halaman%201_Home.html'
            // Di sini Anda dapat melakukan redirect ke halaman beranda atau halaman lainnya
        } else {
            alert('Email atau password tidak sesuai');
        }
    });
});