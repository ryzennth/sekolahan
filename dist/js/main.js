document.addEventListener("DOMContentLoaded", function() {
  
  fetch('_navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;   
    });

  fetch('_footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;   
    });

    const fadeUpElements = document.querySelectorAll('.animate-fade-up');
    fadeUpElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('is-visible');
        }, index * 300);
    });


    const fadeInElements = document.querySelectorAll('.animate-fade-in');
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('is-visible');
        }, index * 300);
    });

    const carousel = document.querySelector('#banner-carousel');
  if (carousel) {
    
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('#carousel-next');
    const prevButton = carousel.querySelector('#carousel-prev');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let dots = []; // Array untuk menyimpan elemen dot

    // --- Fungsi Utama untuk Pindah Slide ---
    const moveToSlide = (index) => {
      // Pindahkan track menggunakan transform CSS
      track.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
      updateDots();
    };

    // --- Fungsi untuk Update Dot Aktif ---
    const updateDots = () => {
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('bg-white');
          dot.classList.remove('bg-white/50');
        } else {
          dot.classList.remove('bg-white');
          dot.classList.add('bg-white/50');
        }
      });
    };

    // --- Generate Dots secara dinamis ---
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot', 'w-3', 'h-3', 'rounded-full', 'transition-colors');
      dot.addEventListener('click', () => {
        moveToSlide(index);
      });
      dotsContainer.appendChild(dot);
      dots.push(dot); // Simpan dot ke array
    });

    // --- Event Listener untuk Tombol Next/Prev ---
    nextButton.addEventListener('click', () => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= slideCount) {
        nextIndex = 0; // Loop kembali ke awal
      }
      moveToSlide(nextIndex);
    });

    prevButton.addEventListener('click', () => {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = slideCount - 1; // Loop ke slide terakhir
      }
      moveToSlide(prevIndex);
    });
    
    // --- Inisialisasi: Pindah ke slide pertama dan update dots ---
    moveToSlide(0);

    // --- (OPSIONAL) Autoplay ---
    // Hapus komentar (//) di 3 baris di bawah ini untuk autoplay
    setInterval(() => {
      nextButton.click(); // Mensimulasikan klik tombol 'next'
    }, 5000); // Pindah slide setiap 5 detik (5000ms)

  } // Akhir dari 'if (carousel)'
});