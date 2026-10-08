const daftarLab = [
    { nomor: "LAB 02", judul: "WEBSITE DEMO", link: "labs/lab-02/index.html" }
];

const labGrid = document.getElementById("labGrid");

daftarLab.forEach(function (lab) {
    const item = document.createElement("article");
    item.className = "proyek-item";
    item.innerHTML = `
        <a class="proyek-row" href="${lab.link}">
            <span class="proyek-nama">${lab.judul}</span>
            <span class="proyek-tag">${lab.nomor}</span>
        </a>
    `;
    labGrid.appendChild(item);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("buka");

    menuBtn.textContent = navLinks.classList.contains("buka") ? "CLOSE" : "MENU";
});

const semuaLink = document.querySelectorAll(".nav-links a");
semuaLink.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("buka");
        menuBtn.textContent = "MENU";
    });
});

const semuaProyek = document.querySelectorAll("#proyek .proyek-item");

semuaProyek.forEach(function (item) {
    const baris = item.querySelector(".proyek-row");
    const video = item.querySelector("video");

    baris.addEventListener("click", function () {
        item.classList.toggle("buka");

        if (item.classList.contains("buka")) {
            video.play();
        } else {
            video.pause();  
        }
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
