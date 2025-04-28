document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const thankYouDiv = document.createElement('div');
    thankYouDiv.className = 'thank-you-message';
    thankYouDiv.style.display = 'none';
    thankYouDiv.style.background = 'linear-gradient(90deg, #6c5ce7, #00b894)';
    thankYouDiv.style.color = 'white';
    thankYouDiv.style.padding = '2rem';
    thankYouDiv.style.borderRadius = '20px';
    thankYouDiv.style.textAlign = 'center';
    thankYouDiv.style.marginTop = '2rem';
    thankYouDiv.style.fontSize = '1.3rem';
    thankYouDiv.innerHTML = `<i class="fas fa-check-circle" style="font-size:2.5rem;"></i><br><strong>Thank you for contacting me!</strong><br>Your message has been received. I will get back to you soon.`;

    form.parentNode.insertBefore(thankYouDiv, form.nextSibling);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        submitButton.disabled = true;

        fetch('http://13.53.52.164/index.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            if (data.success) {
                form.style.display = 'none';
                thankYouDiv.style.display = 'block';
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        })
        .catch(error => {
            thankYouDiv.innerHTML = `<i class="fas fa-exclamation-circle" style="font-size:2.5rem;"></i><br>
                                    <strong>Oops!</strong><br>
                                    ${error.message || 'Something went wrong. Please try again later.'}`;
            thankYouDiv.style.display = 'block';
        })
        .finally(() => {
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        });
    });
});
