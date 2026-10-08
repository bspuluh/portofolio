const daftarLab = [
    { nomor: "Lab-02", judul: "website demo", deskripsi: "Meniru website demo.", link: "labs/lab-02/index.html" }
];

const labGrid = document.getElementById("labGrid");

daftarLab.forEach(function (lab) {
    const kartu = document.createElement("a");
    kartu.className = "lab-card";
    kartu.href = lab.link;
    kartu.innerHTML = `
    <span class="nomor">${lab.nomor}</span>
    <h3>${lab.judul}</h3>
    <p>${lab.deskripsi}</p>
    `;
    labGrid.appendChild(kartu);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("buka");
});

const semuaLink = document.querySelectorAll(".nav-links a");
semuaLink.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("buka");
    });
});

const form = document.getElementById("formKontak");
const hasilForm = document.getElementById("hasilForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;

    hasilForm.textContent = "Terima kasih, " + nama + "! Pesan kamu sudah diterima.";
    form.reset();
});

document.getElementById("tahun").textContent = new Date().getFullYear();