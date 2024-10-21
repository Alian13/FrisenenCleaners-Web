const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const subjectInput = document.querySelector('input[name="subject"]');
const messageInput = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;

  // Validasi input
  if (!name || !email || !subject || !message) {
    // Menampilkan pesan error dengan CSS dan Javascript
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = 'Please fill in all required fields.';
    form.insertBefore(errorDiv, submitButton); // Menempatkan pesan error sebelum tombol submit

    // Menghapus pesan error setelah beberapa detik
    setTimeout(() => {
      errorDiv.remove();
    }, 3000); 
  } else {
    // Menampilkan animasi loading dengan CSS dan Javascript
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    submitButton.classList.add('loading'); 

    // Setelah delay 2 detik, menampilkan pesan sukses
    setTimeout(() => {
      // Kirim data ke server (diganti dengan kode sebenarnya)
      // ...

      // Menampilkan pesan sukses dengan CSS dan Javascript
      const successDiv = document.createElement('div');
      successDiv.classList.add('success-message');
      successDiv.textContent = 'Thank you for contacting us!';
      form.insertBefore(successDiv, submitButton);

      // Menghapus pesan sukses setelah beberapa detik
      setTimeout(() => {
        successDiv.remove();
        submitButton.disabled = false;
        submitButton.textContent = 'Kirim';
        submitButton.classList.remove('loading');
        form.reset();
      }, 3000); 
    }, 2000); 
  }
});

// Menambahkan style CSS untuk animasi loading