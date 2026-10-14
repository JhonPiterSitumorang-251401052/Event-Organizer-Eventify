const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
        });
    });
}

const navbar = document.getElementById("navbar");

if (navbar) {
    window.addEventListener("scroll", function () {
        navbar.classList.toggle("navbar-scrolled", window.scrollY > 20);
    });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

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

document.addEventListener("DOMContentLoaded", function () {
    if (filterWrap && portfolioGrid) {
        renderFilter();
        renderPortfolio();
    }

    const btnHitung = document.getElementById("btn-hitung");
    const selectJenis = document.getElementById("calc-jenis");
    const selectPaket = document.getElementById("calc-paket");
    const inputTamu = document.getElementById("calc-tamu");
    const calcResult = document.getElementById("calc-result");
    const calcError = document.getElementById("calc-error");

    if (btnHitung && selectJenis && selectPaket && inputTamu && calcResult && calcError) {
        const hargaPaket = {
            basic: 15000000,
            premium: 35000000,
            exclusive: 75000000
        };
        const biayaPerTamu = {
            wedding: 150000,
            birthday: 75000,
            seminar: 60000,
            corporate: 100000
        };
        const hargaTambahan = {
            dekorasi: 5000000,
            dokumentasi: 3000000,
            hiburan: 4000000
        };

        function formatRupiah(jumlah) {
            return "Rp " + jumlah.toLocaleString("id-ID");
        }

        function hitungBiaya(jumlahTamu) {
            const biayaPaket = hargaPaket[selectPaket.value];
            const biayaTamu = biayaPerTamu[selectJenis.value] * jumlahTamu;
            const biayaTambahan = Array.from(document.querySelectorAll('input[name="addon"]:checked'))
                .reduce(function (total, tambahan) {
                    return total + (hargaTambahan[tambahan.value] || 0);
                }, 0);

            return {
                biayaPaket: biayaPaket,
                biayaTamu: biayaTamu,
                biayaTambahan: biayaTambahan,
                total: biayaPaket + biayaTamu + biayaTambahan
            };
        }

        function tampilkanEstimasi() {
            const jumlahTamu = Number(inputTamu.value);
            if (!Number.isInteger(jumlahTamu) || jumlahTamu < 10 || jumlahTamu > 2000) {
                calcError.textContent = "Jumlah tamu harus berupa bilangan bulat antara 10 sampai 2000 orang.";
                calcError.classList.remove("hidden");
                inputTamu.classList.add("input-error");
                inputTamu.setAttribute("aria-invalid", "true");
                inputTamu.focus();
                return;
            }

            calcError.classList.add("hidden");
            inputTamu.classList.remove("input-error");
            inputTamu.removeAttribute("aria-invalid");
            const rincian = hitungBiaya(jumlahTamu);
            calcResult.classList.add("has-result");
            const itemTambahan = rincian.biayaTambahan
                ? `<p>Layanan tambahan: <strong>${formatRupiah(rincian.biayaTambahan)}</strong></p>`
                : "";

            calcResult.innerHTML = `
                <h4 class="font-bold text-lg mb-2 text-[#104F55]">Rincian Estimasi Biaya:</h4>
                <p>Harga paket: <strong>${formatRupiah(rincian.biayaPaket)}</strong></p>
                <p>Biaya ${jumlahTamu} tamu: <strong>${formatRupiah(rincian.biayaTamu)}</strong></p>
                ${itemTambahan}
                <p class="text-xl font-extrabold text-[#104F55] mt-3">Total: ${formatRupiah(rincian.total)}</p>
            `;
        }

        btnHitung.addEventListener("click", tampilkanEstimasi);
        inputTamu.addEventListener("input", function () {
            if (!calcError.classList.contains("hidden")) {
                calcError.classList.add("hidden");
                inputTamu.classList.remove("input-error");
                inputTamu.removeAttribute("aria-invalid");
            }
        });

        document.querySelectorAll(".pilih-paket[data-paket]").forEach(function (link) {
            link.addEventListener("click", function () {
                selectPaket.value = link.dataset.paket;
                if (Number.isInteger(Number(inputTamu.value)) && inputTamu.value !== "") {
                    tampilkanEstimasi();
                }
            });
        });
    }
});
function openLightbox(cardElement) {
    var modal = document.getElementById('lightbox-modal');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');

    var imgElement = cardElement.querySelector('img');
    var titleElement = cardElement.querySelector('h3');

    if (imgElement && modal) {
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = imgElement.alt;
        lightboxCaption.innerText = titleElement ? titleElement.innerText : imgElement.alt;

        modal.style.display = 'flex';
    }
}

function closeLightbox(event) {
    var modal = document.getElementById('lightbox-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function closeLightboxDirect() {
    var modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
        closeLightboxDirect();
    }
});

(function () {
    const backToTop = document.getElementById("back-to-top");
    if (!backToTop) return;
    window.addEventListener("scroll", function () {
        backToTop.classList.toggle("show", window.scrollY > 400);
    });
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();

(function () {
    const form = document.getElementById("request-form");
    if (!form) return;

    const tanggalInput = document.getElementById("tanggal");
    const hariIni = new Date();
    hariIni.setHours(0, 0, 0, 0);
    tanggalInput.min = hariIni.getFullYear() + "-"
        + String(hariIni.getMonth() + 1).padStart(2, "0") + "-"
        + String(hariIni.getDate()).padStart(2, "0");

    const aturan = {
        nama: function (v) {
            if (v.length < 3) return "Nama minimal 3 karakter.";
            if (v.length > 80) return "Nama maksimal 80 karakter.";
            return /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u.test(v) ? "" : "Nama hanya boleh berisi huruf, spasi, tanda titik, apostrof, atau tanda hubung.";
        },
        email: function (v) {
            return v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Masukkan alamat email yang valid (maksimal 254 karakter).";
        },
        telepon: function (v) {
            const nomor = v.replace(/[\s-]/g, "");
            return /^(\+62|62|0)8\d{8,11}$/.test(nomor) ? "" : "Masukkan nomor Indonesia yang diawali 08, 628, atau +628 (10-13 digit lokal).";
        },
        jenis: function (v) { return v ? "" : "Pilih jenis acara."; },
        tanggal: function (v) {
            if (!v) return "Tanggal acara wajib diisi.";
            return new Date(v + "T00:00:00") < hariIni ? "Tanggal tidak boleh sebelum hari ini." : "";
        },
        tamu: function (v) {
            const n = Number(v);
            return (!Number.isInteger(n) || n < 10 || n > 2000) ? "Jumlah tamu berupa bilangan bulat antara 10 sampai 2000 orang." : "";
        },
        pesan: function (v) { return v.length <= 500 ? "" : "Pesan maksimal 500 karakter."; }
    };

    function cekField(id) {
        const input = document.getElementById(id);
        const err = document.getElementById("err-" + id);
        const pesan = aturan[id](input.value.trim());
        if (pesan) {
            err.textContent = pesan;
            err.classList.remove("hidden");
            input.classList.add("input-error");
            input.setAttribute("aria-invalid", "true");
        } else {
            err.classList.add("hidden");
            input.classList.remove("input-error");
            input.removeAttribute("aria-invalid");
        }
        return !pesan;
    }

    Object.keys(aturan).forEach(function (id) {
        const input = document.getElementById(id);
        input.addEventListener("blur", function () { cekField(id); });
        input.addEventListener("input", function () {
            if (input.classList.contains("input-error")) cekField(id);
        });
        input.addEventListener("change", function () {
            if (input.classList.contains("input-error")) cekField(id);
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;
        Object.keys(aturan).forEach(function (id) {
            if (!cekField(id)) valid = false;
        });
        if (!valid) {
            const pertama = form.querySelector(".input-error");
            if (pertama) pertama.focus();
            return;
        }

        document.getElementById("cf-nama").textContent = document.getElementById("nama").value.trim();
        document.getElementById("cf-email").textContent = document.getElementById("email").value.trim();
        document.getElementById("cf-telepon").textContent = document.getElementById("telepon").value.trim();
        document.getElementById("cf-jenis").textContent = document.getElementById("jenis").value;
        document.getElementById("cf-tanggal").textContent = new Date(document.getElementById("tanggal").value + "T00:00:00")
            .toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
        document.getElementById("cf-tamu").textContent = document.getElementById("tamu").value + " orang";
        document.getElementById("cf-pesan").textContent = document.getElementById("pesan").value.trim() || "-";
        document.getElementById("confirm-modal").classList.remove("hidden");
    });

})();
    (function () {
    const form = document.getElementById("request-form");
    const confirmModal = document.getElementById("confirm-modal");
    const successModal = document.getElementById("success-modal");
    if (!form || !confirmModal || !successModal) return;

    function tutup(el) { el.classList.add("hidden"); }

    document.getElementById("confirm-cancel").addEventListener("click", function () {
        tutup(confirmModal);
    });

    document.getElementById("confirm-ok").addEventListener("click", function () {
        document.getElementById("success-name").textContent = document.getElementById("nama").value.trim();
        document.getElementById("success-event").textContent = document.getElementById("jenis").value;
        tutup(confirmModal);
        successModal.classList.remove("hidden");
        form.reset();
    });

    document.getElementById("close-success").addEventListener("click", function () {
        tutup(successModal);
    });

    [confirmModal, successModal].forEach(function (m) {
        m.addEventListener("click", function (e) { if (e.target === m) tutup(m); });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { tutup(confirmModal); tutup(successModal); }
    });
})();

window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#gallery') {
        const galleryElement = document.getElementById('gallery-title');
        if (galleryElement) {
            setTimeout(() => {
                galleryElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
