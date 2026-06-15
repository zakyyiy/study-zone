// ==========================================
// VERSI TANPA FIREBASE (SIMPEL & INSTAN)
// ==========================================

// 1. Fungsi memuat UI login.html secara dinamis
async function muatHalamanLogin() {
    try {
        const response = await fetch('auth/login.html');
        if (!response.ok) throw new Error("Gagal mengambil file login.html");
        
        const htmlContent = await response.text();
        document.getElementById('login-container').innerHTML = htmlContent;
        
        // Aktifkan klik tombol setelah HTML dimasukkan ke halaman
        aktifkanTombolLogin();
    } catch (error) {
        console.error("Error saat memuat UI Auth:", error);
    }
}

// 2. Logika Utama Login (Hardcode)
function aktifkanTombolLogin() {
    const loginManualBtn = document.getElementById("loginManual");
    const googleLoginBtn = document.getElementById("googleLoginBtn");

    // Sembunyikan tombol Google
    if (googleLoginBtn) {
        googleLoginBtn.style.display = "none";
    }

    if (loginManualBtn) {
        loginManualBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Mencegah form ke-refresh

            const usernameInput = document.getElementById("username").value; 
            const passwordInput = document.getElementById("password").value;

            if (!usernameInput || !passwordInput) {
                alert("Harap isi Username dan Password kamu!");
                return;
            }

            // --- CEK LOGIN DISINI ---
            // Kita atur username "admin" dan password "12345"
            if (usernameInput === "admin" && passwordInput === "12345") {
                alert("Selamat! Login Sukses, Bang.");
                
                // Simpan status login ke memori browser (Local Storage)
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", usernameInput);
                
                // Refresh halaman agar masuk ke web utama
                window.location.reload(); 
            } else {
                alert("Username atau Password salah! (Hint: pakai admin / 12345)");
            }
        });
    }
}

// 3. Cek Status Login (Biar gak disuruh login terus saat di-refresh)
function cekStatusLogin() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // Karena elemennya ada di index.html, kita ambil id authOverlay
    const overlay = document.getElementById('authOverlay'); 

    if (isLoggedIn === "true") {
        // Jika sudah login, sembunyikan penutup halamannya
        if (overlay) overlay.style.display = 'none';
        console.log("User saat ini:", localStorage.getItem("username"));
    } else {
        // Jika belum login, pastikan penutupnya muncul dan muat formnya
        if (overlay) overlay.style.display = 'flex';
        muatHalamanLogin();
    }
}

// Jalankan saat web pertama kali dibuka
cekStatusLogin();