const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
    });
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

const EVENTS = [
    {
        judul: "Pernikahan Christian dan Michelle",
        kategori: "Wedding",
        tanggal: "14 Juni 2026",
        lokasi: "Grand Hotel Medan, Ballroom Serbaguna",
        tamu: 450,
        catatan: "Dekorasi pelaminan bergaya rustik dengan rundown acara yang rapi.",
        foto: "image/wedding-1-dekorasi.jpg"
    },
    {
        judul: "Pernikahan di Pinggir Danau Toba",
        kategori: "Wedding",
        tanggal: "2 Agustus 2026",
        lokasi: "Penginapan Tepi Danau, Samosir",
        tamu: 120,
        catatan: "Acara sakral kecil dengan penghulu adat dari Samosir.",
        foto: "image/wedding-2-pringket.jpg"
    },
    {
        judul: "Wedding Malam di Pegunungan",
        kategori: "Wedding",
        tanggal: "27 November 2026",
        lokasi: "The Highland Resort, Berastagi",
        tamu: 300,
        catatan: "Suasana pegunungan dengan musik langsung dan lampu gantung.",
        foto: "image/wedding-3-buku-nikah.jpg"
    },

    {
        judul: "Ulang Tahun ke-25 Nadia",
        kategori: "Birthday",
        tanggal: "9 Mei 2026",
        lokasi: "Kediaman, Medan Area",
        tamu: 80,
        catatan: "Tema bunga segar dengan photo booth dan permainan interaktif.",
        foto: "image/birthday-2-sparkler.jpg"
    },
    {
        judul: "Kids Party Ocean Explorer",
        kategori: "Birthday",
        tanggal: "21 Juni 2026",
        lokasi: "Medan Club, Medan Baru",
        tamu: 60,
        catatan: "Pesta anak dengan animator, games, dan hadiah seru.",
        foto: "image/birthday-1-tema-laut.jpg"
    },
    {
        judul: "Surprise Birthday Pak Rangga",
        kategori: "Birthday",
        tanggal: "12 Oktober 2026",
        lokasi: "Hotel Deli River, Medan",
        tamu: 150,
        catatan: "Kejutan untuk ultah dengan dekorasi balon dan band musik.",
        foto: "image/birthday-3-meja-makan.jpg"
    },

    {
        judul: "Seminar Nasional UMKM Digital",
        kategori: "Seminar",
        tanggal: "18 Februari 2026",
        lokasi: "Hotel Polonia, Medan",
        tamu: 400,
        catatan: "Seminar sehari dengan tiga pemateri dan tim registrasi kami.",
        foto: "image/seminar-1-audien.jpg"
    },
    {
        judul: "Workshop Intensif Data Science",
        kategori: "Seminar",
        tanggal: "7 April 2026",
        lokasi: "Universitas Sumatera Utara, Medan",
        tamu: 120,
        catatan: "Pelatihan dengan bonus materi cetak dan modul untuk peserta.",
        foto: "image/seminar-2-panggung.jpg"
    },
    {
        judul: "Talkshow UMKM Malay Deli",
        kategori: "Seminar",
        tanggal: "5 September 2026",
        lokasi: "Gedung Serbaguna, Deli Serdang",
        tamu: 200,
        catatan: "Diskusi bisnis bersama pelaku UMKM Deli Serdang dan praktisi.",
        foto: "image/seminar-3-talkshow.jpg"
    },

    {
        judul: "Annual Gathering PT Perkebunan Sei Sikambing",
        kategori: "Corporate",
        tanggal: "15 Desember 2026",
        lokasi: "The Highland Resort, Berastagi",
        tamu: 1200,
        catatan: "Gathering karyawan dengan panggung dan berbagai kegiatan selama dua hari.",
        foto: "image/corporate-1-gathering.jpg"
    },
    {
        judul: "Launching Produk Horizon X",
        kategori: "Corporate",
        tanggal: "26 Maret 2026",
        lokasi: "Hotel Marriott Medan",
        tamu: 300,
        catatan: "Peluncuran produk dengan panggung dan dokumentasi foto.",
        foto: "image/corporate-2-launching.jpg"
    },
    {
        judul: "Town Hall dan Konferensi Tahunan",
        kategori: "Corporate",
        tanggal: "19 Oktober 2026",
        lokasi: "Grand Hotel Medan",
        tamu: 650,
        catatan: "Konferensi internal perusahaan dengan enam sesi paralel.",
        foto: "image/corporate-3-rapat.jpg"
    }
];

const KATEGORI = ["Semua", "Wedding", "Birthday", "Seminar", "Corporate"];

const filterWrap = document.getElementById("filter");
const portfolioGrid = document.getElementById("portfolio-grid");
const portfolioCount = document.getElementById("portfolio-count");

let kategoriAktif = "Semua";

function renderFilter() {
    filterWrap.innerHTML = "";

    KATEGORI.forEach(function (kategori) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "filter-btn";
        if (kategori === kategoriAktif) {
            btn.classList.add("active");
        }
        btn.textContent = kategori;
        btn.dataset.kategori = kategori;

        btn.addEventListener("click", function () {
            kategoriAktif = kategori;
            renderFilter();
            renderPortfolio();
        });

        filterWrap.appendChild(btn);
    });
}

function renderPortfolio() {
    const data = kategoriAktif === "Semua"
        ? EVENTS
        : EVENTS.filter(function (event) {
            return event.kategori === kategoriAktif;
        });

    portfolioGrid.innerHTML = "";

    data.forEach(function (event) {
        const card = document.createElement("article");
        card.className = "event-card";

        const thumb = document.createElement("div");
        thumb.className = "event-thumb kategori-" + event.kategori.toLowerCase();

        if (event.foto) {
            const img = document.createElement("img");
            img.src = event.foto;
            img.alt = event.judul;
            img.loading = "lazy";
            thumb.appendChild(img);
        }

        const badge = document.createElement("span");
        badge.className = "event-badge";
        badge.textContent = event.kategori;
        thumb.appendChild(badge);

        const body = document.createElement("div");
        body.className = "event-body";

        const title = document.createElement("h3");
        title.className = "event-title";
        title.textContent = event.judul;

        const desc = document.createElement("p");
        desc.className = "event-desc";
        desc.textContent = event.catatan;

        const meta = document.createElement("div");
        meta.className = "event-meta";
        meta.innerHTML = "<span>Tanggal: " + event.tanggal + "</span>"
            + "<span>Lokasi: " + event.lokasi + "</span>"
            + "<span>Tamu: " + event.tamu + " orang</span>";

        body.appendChild(title);
        body.appendChild(desc);
        body.appendChild(meta);

        card.appendChild(thumb);
        card.appendChild(body);
        portfolioGrid.appendChild(card);
    });

    portfolioCount.textContent = "Menampilkan " + data.length + " dari "
        + EVENTS.length + " event pada kategori " + kategoriAktif + ".";
}

renderFilter();
renderPortfolio();
document.addEventListener("DOMContentLoaded", function () {
    const btnHitung = document.getElementById("btn-hitung");
    const selectJenis = document.getElementById("calc-jenis");
    const selectPaket = document.getElementById("calc-paket");
    const inputTamu = document.getElementById("calc-tamu");
    const calcResult = document.getElementById("calc-result");

    if (btnHitung) {
        btnHitung.addEventListener("click", function () {
            let jumlahTamu = parseInt(inputTamu.value);

            if (isNaN(jumlahTamu) || jumlahTamu <= 0) {
                calcResult.innerHTML = `<p class="text-red-600 font-semibold">Silakan masukkan jumlah tamu yang valid (minimal 1).</p>`;
                return;
            }

            let hargaPaket = 0;
            if (selectPaket.value === "basic") hargaPaket = 15000000;
            else if (selectPaket.value === "premium") hargaPaket = 35000000;
            else if (selectPaket.value === "exclusive") hargaPaket = 75000000;

            let biayaPerTamu = 0;
            if (selectJenis.value === "wedding") biayaPerTamu = 150000;
            else if (selectJenis.value === "birthday") biayaPerTamu = 75000;
            else if (selectJenis.value === "seminar") biayaPerTamu = 60000;
            else if (selectJenis.value === "corporate") biayaPerTamu = 100000;

            let totalBiaya = hargaPaket + (jumlahTamu * biayaPerTamu);

            calcResult.innerHTML = `
                <h4 class="font-bold text-lg mb-2 text-[#104F55]">Rincian Estimasi Biaya:</h4>
                <p>Jumlah Tamu: <strong>${jumlahTamu} orang</strong></p>
                <p class="text-xl font-extrabold text-[#104F55] mt-3">Total: Rp ${totalBiaya.toLocaleString("id-ID")}</p>
            `;
        });
    }
})