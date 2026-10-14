// =====================================
// SMART SENTIMENT BOARD
// =====================================


// ================================
// DATA
// ================================

let currentUser = "";
let currentClass = "Belum memilih kelas";
let moodCount = {
    happy: 12,
    energetic: 6,
    relaxed: 4,
    stressed: 3,
    sad: 2
};
// ================================
// PESAN MOTIVASI SETIAP MOOD
// ================================

const moodResult = {
    happy: {
        emoji: "😄",
        message: "Yeay! Hari ini kamu lagi happy! 🌈✨ Pertahankan senyummu dan sebarkan energi positif! 💚"
    },

    energetic: {
        emoji: "🤩",
        message: "Wihh, energimu lagi full banget! ⚡🔥 Semangat terus dan nikmati harimu! 💪✨"
    },

    relaxed: {
        emoji: "😌",
        message: "Aaa, lagi santai yaa~ 🌿💙 Nikmati momennya dan jangan lupa kasih waktu buat diri sendiri. ☁️✨"
    },

    stressed: {
        emoji: "😣",
        message: "Hei, pelan-pelan yaa 🫶💜 Tarik napas dulu 🌬️ Kamu nggak harus menyelesaikan semuanya sekaligus. 🌷"
    },

    sad: {
        emoji: "😔",
        message: "Hari ini terasa berat? 🥺💙 Nggak apa-apa, istirahat sebentar dan tetap sayangi dirimu yaa. 🌻🫂"
    }
};


// ================================
// PINDAH SCREEN
// ================================

function goTo(screenName) {

    const screens =
        document.querySelectorAll(".screen");


    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    const target =
        document.getElementById(screenName);


    if (target) {

        target.classList.add("active");

    }


    // Jika masuk halaman Riwayat
    if (screenName === "history") {

        generateHistory();

    }


    // Jika masuk halaman Beranda
    if (screenName === "home") {

        updateMoodDisplay();

    }

}


// ================================
// LOGIN
// ================================

const accounts = [

    {
        username: "teacherWH",
        password: "whyesican"
    },

    {
        username: "studentWH",
        password: "whyesican"
    },

    {
        username: "masterIYSA",
        password: "ISIF2026"
    },

    {
        username: "MAHHATA38pi",
        password: "noleaderjusttogether"
    },

    {
        username: "MAHHATA38pa",
        password: "noleaderjusttogether"
    },

];

// ================================
// FUNGSI LOGIN
// ================================

function login() {

    const usernameElement = document.getElementById("username");
    const passwordElement = document.getElementById("password");
    const errorMessage = document.getElementById("loginError");

    // Pastikan input tersedia
    if (!usernameElement || !passwordElement) {
        return;
    }

    const username = usernameElement.value.trim();
    const password = passwordElement.value;

    // Cek akun
    const account = accounts.find(function(user) {
        return (
            user.username === username &&
            user.password === password
        );
    });

    // =========================
    // LOGIN BERHASIL
    // =========================

    if (account) {

        // Simpan username yang sedang login
        currentUser = username;

        // Simpan ke localStorage
        localStorage.setItem("currentUser", username);

        // Hapus pesan error
        if (errorMessage) {
            errorMessage.textContent = "";
        }

        // Masuk ke halaman pilih kelas
        goTo("class");

    }

    // =========================
    // LOGIN GAGAL
    // =========================

    else {

        if (errorMessage) {
            errorMessage.textContent =
                "Username atau password salah.";
        }

    }

}

// ================================
// // ================================
// PILIH KELAS 10 / 11 / 12
// ================================

let selectedGrade = "";

function showMajor(grade) {

    selectedGrade = grade;

    const classLevel =
        document.getElementById("classLevel");

    const majorSelection =
        document.getElementById("majorSelection");

    const classTitle =
        document.getElementById("classTitle");


    if (classLevel) {
        classLevel.style.display = "none";
    }

    if (majorSelection) {
        majorSelection.style.display = "block";
    }

    if (classTitle) {
        classTitle.textContent =
            "Pilih Jurusan Kelas " + grade;
    }

}


// ================================
// PILIH IPA / IPS
// ================================

function selectClassMajor(major) {

    currentClass =
        "Kelas " +
        selectedGrade +
        " " +
        major;


    const selectedClass =
        document.getElementById("selectedClass");


    if (selectedClass) {

        selectedClass.textContent =
            selectedGrade + " " + major;

    }


    // Kembalikan tampilan pilihan kelas
    const classLevel =
        document.getElementById("classLevel");

    const majorSelection =
        document.getElementById("majorSelection");

    const classTitle =
        document.getElementById("classTitle");


    if (classLevel) {

        classLevel.style.display = "block";

    }


    if (majorSelection) {

        majorSelection.style.display = "none";

    }


    if (classTitle) {

        classTitle.textContent = "pilih kelas";

    }


    // Masuk ke beranda
    goTo("home");

}


// ================================
// UPDATE JUMLAH MOOD
// ================================

function updateMoodDisplay() {

    const happyCount =
        document.getElementById("happyCount");

    if (happyCount) {
        happyCount.textContent =
            moodCount.happy + " orang";
    }


    const energeticCount =
        document.getElementById("energeticCount");

    if (energeticCount) {
        energeticCount.textContent =
            moodCount.energetic + " orang";
    }


    const relaxedCount =
        document.getElementById("relaxedCount");

    if (relaxedCount) {
        relaxedCount.textContent =
            moodCount.relaxed + " orang";
    }


    const stressedCount =
        document.getElementById("stressedCount");

    if (stressedCount) {
        stressedCount.textContent =
            moodCount.stressed + " orang";
    }


    const sadCount =
        document.getElementById("sadCount");

    if (sadCount) {
        sadCount.textContent =
            moodCount.sad + " orang";
    }

}

// ================================
// FORMAT TANGGAL
// ================================

function formatShortDate(date) {

    const days = [

        "Min",
        "Sen",
        "Sel",
        "Rab",
        "Kam",
        "Jum",
        "Sab"

    ];


    const months = [

        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des"

    ];


    return (

        days[date.getDay()] +
        ", " +
        date.getDate() +
        " " +
        months[date.getMonth()]

    );

}


// ================================
// MEMBUAT BARIS RIWAYAT
// ================================

function createHistoryRow(date) {

    const row = document.createElement("div");
    row.className = "table-row";

    // Angka berbeda untuk setiap tanggal
    const moodData = {
        1:  [17, 6, 4, 2],
        2:  [19, 5, 6, 3],
        3:  [16, 8, 3, 4],
        4:  [21, 7, 5, 2],
        5:  [18, 6, 4, 3],
        6:  [20, 9, 3, 2],
        7:  [15, 7, 6, 4],
        8:  [22, 5, 4, 3],
        9:  [19, 8, 5, 2],
        10: [17, 6, 7, 3],
        11: [21, 8, 4, 2],
        12: [18, 7, 5, 4],
        13: [20, 6, 3, 5],
        14: [16, 9, 6, 2],
        15: [23, 5, 4, 3],
        16: [19, 7, 5, 2],
        17: [21, 6, 4, 4],
        18: [18, 8, 6, 2],
        19: [20, 7, 5, 3],
        20: [17, 9, 4, 2],
        21: [22, 6, 3, 4],
        22: [19, 8, 5, 3],
        23: [21, 7, 4, 2],
        24: [18, 6, 6, 3],
        25: [20, 8, 4, 2],
        26: [16, 7, 5, 4],
        27: [23, 6, 3, 2],
        28: [19, 9, 4, 3],
        29: [21, 5, 6, 2],
        30: [18, 8, 5, 3],
        31: [20, 7, 4, 4]
    };

    // Ambil angka sesuai tanggal
    const data = moodData[date.getDate()] || [0, 0, 0, 0];

    row.innerHTML = `
        <span>${formatShortDate(date)}</span>
        <span>${data[0]}</span>
        <span>${data[1]}</span>
        <span>${data[2]}</span>
        <span>${data[3]}</span>
    `;

    return row;
}

// ================================
// RIWAYAT 5 HARI
// ================================

function showFiveDays() {

    const container =
        document.getElementById(
            "historyTableBody"
        );


    if (!container) {

        return;

    }


    // Bersihkan tabel
    container.innerHTML = "";


    const today =
        new Date();


    // Hari ini + 4 hari sebelumnya
    for (let i = 0; i < 5; i++) {

        const date =
            new Date(today);


        date.setDate(
            today.getDate() - i
        );


        const row =
            createHistoryRow(date);


        container.appendChild(row);

    }


    // Aktifkan tombol 5 Hari
    const fiveDayTab =
        document.getElementById(
            "fiveDayTab"
        );


    const oneMonthTab =
        document.getElementById(
            "oneMonthTab"
        );


    if (fiveDayTab) {

        fiveDayTab.classList.add("active");

    }


    if (oneMonthTab) {

        oneMonthTab.classList.remove("active");

    }

}


// ================================
// RIWAYAT 1 BULAN
// ================================

function showOneMonth() {

    const container =
        document.getElementById(
            "historyTableBody"
        );


    if (!container) {

        return;

    }


    // Bersihkan tabel
    container.innerHTML = "";


    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        today.getMonth();


    // Menentukan jumlah hari
    // dalam bulan sekarang
    const totalDays =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    // Buat semua tanggal
    for (
        let day = 1;
        day <= totalDays;
        day++
    ) {

        const date =
            new Date(
                year,
                month,
                day
            );


        const row =
            createHistoryRow(date);


        container.appendChild(row);

    }


    // Aktifkan tombol 1 Bulan
    const fiveDayTab =
        document.getElementById(
            "fiveDayTab"
        );


    const oneMonthTab =
        document.getElementById(
            "oneMonthTab"
        );


    if (fiveDayTab) {

        fiveDayTab.classList.remove("active");

    }


    if (oneMonthTab) {

        oneMonthTab.classList.add("active");

    }

}


// ================================
// GENERATE HISTORY
// ================================

function generateHistory() {

    // Saat membuka Riwayat,
    // tampilkan 5 hari terlebih dahulu

    showFiveDays();

}


// ================================
// MENU GARIS 3
// ================================

function toggleMenu() {

    const menu =
        document.getElementById(
            "sideMenu"
        );


    if (menu) {

        menu.classList.toggle("show");

    }

}


// ================================
// TUTUP MENU
// ================================

function closeMenu() {

    const menu =
        document.getElementById(
            "sideMenu"
        );


    if (menu) {

        menu.classList.remove("show");

    }

}


// ================================
// MENU → JUMLAH EMOSI
// ================================

function openEmotionSummary() {

    closeMenu();

    goTo("home");

}


// ================================
// MENU → PILIH KELAS
// ================================

function openClassSelection() {

    closeMenu();

    goTo("class");

}


// ================================
// PENGATURAN → UBAH NAMA & PASSWORD
// ================================

function changeAccount() {

    goTo("login");

}


// ================================
// PENGATURAN → PILIH KELAS
// ================================

function settingsChooseClass() {

    goTo("class");

}


// ================================
// BOTTOM NAVIGATION
// ================================

// BERANDA
function openHome() {

    goTo("home");

}


// RIWAYAT
function openHistory() {

    goTo("history");

}


// PENGATURAN
function openSettings() {

    goTo("settings");

}


// ================================
// JALANKAN SAAT WEBSITE DIBUKA
// ================================

updateMoodDisplay();
/* =====================================================
   STATUS PERANGKAT
===================================================== */

let deviceOnline = false;
function updateDeviceStatus() {

    const card = document.querySelector(".device-status-card");
    const icon = document.getElementById("deviceStatusIcon");
    const title = document.getElementById("deviceStatusTitle");
    const text = document.getElementById("deviceStatusText");

    if (!card || !icon || !title || !text) return;

    if (deviceOnline) {

        card.classList.remove("offline");

        icon.textContent = "●";

        title.textContent = "Perangkat Aktif";

        text.textContent =
            "Smart Sentiment Board terhubung";

    } else {

        card.classList.add("offline");

        icon.textContent = "●";

        title.textContent = "Perangkat Tidak Terhubung";

        text.textContent =
            "Periksa koneksi Smart Sentiment Board";
    }
}


/* Jalankan saat aplikasi dibuka */
updateDeviceStatus();
/* =====================================================
   DATA MOOD SMART SENTIMENT BOARD
   DATA AKAN DATANG DARI ALAT
===================================================== */

// Ambil tanggal hari ini
function getTodayKey() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


// Ambil data mood yang tersimpan
function loadMoodData() {

    const savedData = localStorage.getItem("smartSentimentMood");

    if (!savedData) {
        return {};
    }

    try {
        return JSON.parse(savedData);
    } catch (error) {
        return {};
    }
}


// Simpan data mood
function saveMoodData(data) {

    localStorage.setItem(
        "smartSentimentMood",
        JSON.stringify(data)
    );
}


// Membuat data hari ini jika belum ada
function createTodayMoodData() {

    const data = loadMoodData();
    const today = getTodayKey();

    if (!data[today]) {

       data[today] = {
    happy: 0,
    energetic: 0,
    relaxed: 0,
    stressed: 0,
    sad: 0
};

        saveMoodData(data);
    }

    return data;
}


// Tampilkan data mood hari ini
function loadTodayMood() {

    const data = createTodayMoodData();
    const today = getTodayKey();

    moodCount = {
        happy: data[today].happy,
        energetic: data[today].energetic,
        relaxed: data[today].relaxed,
        stressed: data[today].stressed,
        sad: data[today].sad
    };

    updateMoodDisplay();
}


// Fungsi ini nantinya dipanggil oleh data dari ESP32
function receiveMoodFromBoard(mood) {

    const allowedMood = [
    "happy",
    "energetic",
    "relaxed",
    "stressed",
    "sad"
];

    if (!allowedMood.includes(mood)) {
        return;
    }

    const data = createTodayMoodData();
    const today = getTodayKey();

    data[today][mood]++;

    saveMoodData(data);

    loadTodayMood();
}
/* =====================================================
   AKUN & AKTIVITAS
===================================================== */

function openAccount() {
    goTo("account");
}


function openActivity() {
    goTo("activity");
}


/* =========================
   LOG OUT
========================= */

function logout() {

    // kembali ke halaman login
    goTo("login");

    // kosongkan input login
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if (usernameInput) {
        usernameInput.value = "";
    }

    if (passwordInput) {
        passwordInput.value = "";
    }

    // kosongkan pesan error
    const loginError = document.getElementById("loginError");

    if (loginError) {
        loginError.textContent = "";
    }
}
/* =====================================================
   INFORMASI AKUN
===================================================== */

function openAccountInfo() {

    // tampilkan username
    document.getElementById("accountUsername").textContent =
        currentUser || "Pengguna";

    // tampilkan kelas yang sedang dipilih
    document.getElementById("accountClass").textContent =
        currentClass || "Belum memilih kelas";

    // tanggal bergabung
    document.getElementById("accountJoinDate").textContent =
        getJoinDate(currentUser);

    goTo("accountInfo");
}
function getJoinDate(username) {

    const joinDates = {

        "teacherWH": "3 Oktober 2026",

        "studentWH": "3 Oktober 2026",

        "masterIYSA": "3 Oktober 2026",

        "MAHHATA38pi": "3 Oktober 2026",

        "MAHHATA38pa": "3 Oktober 2026"

    };

    return joinDates[username] || "3 Oktober 2026";
}