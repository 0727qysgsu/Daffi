window.addEventListener('load', function() {
    // Sembunyikan loading screen setelah 2 detik (2000ms)
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 2000); // Waktu tunggu 2 detik sebelum loading screen hilang
    }

    // Animasi Skill Bars
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const skillValue = bar.getAttribute('data-skill'); // Mengambil nilai skill
        bar.style.width = '0%'; // Set lebar awal menjadi 0%

        // Mengambil elemen untuk menampilkan persentase
        let percentageText = bar.nextElementSibling;
        percentageText.textContent = '0%'; // Set persentase awal menjadi 0%
        percentageText.style.display = 'block'; // Tampilkan teks persentase

        // Fungsi untuk menjalankan animasi saat scroll
        function runAnimation() {
            const sections = document.querySelectorAll('.fade-in');
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight - 100 && !section.classList.contains('animated')) {
                    section.classList.add('visible'); // Tambahkan kelas 'visible' saat section terlihat
                    section.classList.add('animated'); // Pastikan animasi hanya berjalan sekali

                    const progressBars = section.querySelectorAll('.progress-bar');
                    progressBars.forEach(bar => {
                        const skillValue = bar.getAttribute('data-skill');
                        let currentPercentage = 0;
                        const interval = setInterval(() => {
                            if (currentPercentage < skillValue) {
                                currentPercentage++;
                                bar.style.width = currentPercentage + '%';
                                bar.nextElementSibling.textContent = currentPercentage + '%'; // Perbarui teks persentase
                            } else {
                                clearInterval(interval);
                            }
                        }, 20); // Kecepatan animasi (20ms)
                    });
                }
            });
        }

        // Event listener untuk mengontrol tampilan bar dan persentase saat scroll
        window.addEventListener('scroll', runAnimation);
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-in, .slide-in');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");

    // Fungsi untuk memisahkan setiap huruf menjadi <span>
    function wrapLettersWithSpan(element) {
        const letters = element.textContent.split("");
        element.innerHTML = "";  // Bersihkan elemen
        letters.forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${index * 0.1}s`;  // Set delay per huruf
            element.appendChild(span);
        });
    }

    // Panggil fungsi untuk memproses elemen teks
    wrapLettersWithSpan(heroTitle);
    wrapLettersWithSpan(heroSubtitle);
});

