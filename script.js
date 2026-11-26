// HAMBURGER MENU
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.querySelector(".navbar .navbar-nav");

if (hamburger && navMenu) {
  // Buka / tutup saat tombol hamburger diklik
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    navMenu.classList.toggle("active");
  });

  // Tutup saat klik di luar hamburger dan menu
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });

  // Tutup saat salah satu link navigasi diklik
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// Saat Discroll Menu Hilang
window.addEventListener("scroll", () => {
  if (navMenu && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  }
});


// MODAL DETAIL PRODUK

const modalDetail = document.getElementById("modal-detail");
const tombolTutup = document.getElementById("modal-close");

const detailGambar = document.getElementById("detail-gambar");
const detailNama = document.getElementById("detail-nama");
const detailHarga = document.getElementById("detail-harga");
const detailDeskripsi = document.getElementById("detail-deskripsi");
const tombolOrder = document.getElementById("order-wa");

const tombolDetail = document.querySelectorAll(".detail-btn");

tombolDetail.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const nama = tombol.dataset.nama;
    const harga = tombol.dataset.harga;
    const deskripsi = tombol.dataset.deskripsi;
    const gambar = tombol.dataset.gambar;

    detailNama.textContent = nama;
    detailHarga.textContent = harga;
    detailDeskripsi.textContent = deskripsi;

    detailGambar.src = gambar;
    detailGambar.alt = nama;

    const nomorWhatsApp = "6282333497811";

    const pesan = `Halo TEFA Bakery, saya ingin memesan ${nama} dengan harga ${harga}.`;

    tombolOrder.href = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    modalDetail.classList.add("active");
  });
});

// TUTUP MODAL DENGAN TOMBOL X

tombolTutup.addEventListener("click", () => {
  modalDetail.classList.remove("active");
});

// TUTUP MODAL KETIKA AREA LUAR DIKLIK

modalDetail.addEventListener("click", (event) => {
  if (event.target === modalDetail) {
    modalDetail.classList.remove("active");
  }
});

// TUTUP MODAL DENGAN TOMBOL ESC

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalDetail.classList.remove("active");
  }
});
