


const subjects = [

  {
    id:'math', cls:'math', title:'Matematika', icon:'📐',
    filter:['eksakta'], badge:'Wajib bet',
    desc:'Logika, aljabar, dan geometri — pondasi berpikir kritis.',
    accentA:'#a78bfa', accentB:'#7c3aed',
    tagBg:'rgba(167,139,250,.12)', tagColor:'#a78bfa',
    topics:['Aljabar','Fungsi','Trigonometri','Statistika'],
    illus:`<svg width="140" height="120" viewBox="0 0 140 120" fill="none"><circle cx="70" cy="60" r="45" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4 3" opacity=".4"/><line x1="25" y1="60" x2="115" y2="60" stroke="#a78bfa" stroke-width="1.5" opacity=".6"/><line x1="70" y1="15" x2="70" y2="105" stroke="#a78bfa" stroke-width="1.5" opacity=".6"/><path d="M30 90 Q55 20 70 60 Q85 100 110 30" stroke="#c4b5fd" stroke-width="2" fill="none"/><circle cx="70" cy="60" r="4" fill="#a78bfa"/><text x="80" y="55" fill="#a78bfa" font-size="16" font-family="serif" opacity=".8">∫</text><text x="40" y="45" fill="#c4b5fd" font-size="12" opacity=".7">f(x)</text><text x="90" y="90" fill="#c4b5fd" font-size="10" opacity=".6">x²+y²=r²</text></svg>`,
    chapters:[
      {
        name:'Eksponen dan Logaritma',
        topics:[
          {
            nama: 'Sifat-sifat eksponen',
            materi: `<div class="materi-embed">
                    <iframe src="math/eksponen.html" style="width:100%;height:640px;border:none;border-radius:12px;"></iframe>
                    </div>`,  
            gambar: ``   
          },
          { nama:'Persamaan eksponen',               materi:``, gambar:`` },
          { nama:'Definisi dan sifat logaritma',     materi:``, gambar:`` },
          { nama:'Persamaan logaritma',              materi:``, gambar:`` },
          { nama:'Pertidaksamaan eksponen dan logaritma', materi:``, gambar:`` },
        ]
      },
      {
        name:'Fungsi',
        topics:[
          { nama:'Pengertian relasi dan fungsi', materi:``, gambar:`` },
          { nama:'Jenis-jenis fungsi',           materi:``, gambar:`` },
          { nama:'Operasi aljabar fungsi',       materi:``, gambar:`` },
          { nama:'Komposisi fungsi',             materi:``, gambar:`` },
          { nama:'Fungsi invers',                materi:``, gambar:`` },
        ]
      },
      {
        name:'Sistem Persamaan Linear',
        topics:[
          { nama:'SPLDV dan SPLTV',                    materi:``, gambar:`` },
          { nama:'Metode substitusi',                  materi:``, gambar:`` },
          { nama:'Metode eliminasi',                   materi:``, gambar:`` },
          { nama:'Metode Gauss',                       materi:``, gambar:`` },
          { nama:'Penerapan SPLTV dalam masalah',      materi:``, gambar:`` },
        ]
      },
      {
        name:'Trigonometri',
        topics:[
          { nama:'Perbandingan trigonometri sudut khusus', materi:``, gambar:`` },
          { nama:'Identitas trigonometri',                 materi:``, gambar:`` },
          { nama:'Aturan sinus dan kosinus',               materi:``, gambar:`` },
          { nama:'Luas segitiga dengan trigonometri',      materi:``, gambar:`` },
          { nama:'Grafik fungsi trigonometri',             materi:``, gambar:`` },
        ]
      },
      {
        name:'Statistika dan Peluang',
        topics:[
          { nama:'Ukuran pemusatan data',     materi:``, gambar:`` },
          { nama:'Ukuran penyebaran data',    materi:``, gambar:`` },
          { nama:'Histogram dan ogive',       materi:``, gambar:`` },
          { nama:'Kaidah pencacahan',         materi:``, gambar:`` },
          { nama:'Peluang kejadian majemuk',  materi:``, gambar:`` },
        ]
      },
    ]
  },

  {
    id:'fisika', cls:'fisika', title:'Fisika', icon:'⚡',
    filter:['sains','eksakta'], badge:'Wajib',
    desc:'Hukum-hukum alam yang mengatur gerak, energi, dan materi.',
    accentA:'#60a5fa', accentB:'#1d4ed8',
    tagBg:'rgba(96,165,250,.12)', tagColor:'#60a5fa',
    topics:['Kinematika','Dinamika','Gelombang','Fluida'],
    illus:`<svg width="140" height="120" viewBox="0 0 140 120" fill="none"><ellipse cx="70" cy="60" rx="55" ry="18" stroke="#60a5fa" stroke-width="1.5" opacity=".5"/><ellipse cx="70" cy="60" rx="30" ry="10" stroke="#93c5fd" stroke-width="1" opacity=".4"/><circle cx="70" cy="60" r="8" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.5"/><circle cx="125" cy="60" r="5" fill="#60a5fa"/><path d="M20 80 Q50 40 80 80 Q110 120 125 70" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity=".7"/><text x="55" y="25" fill="#93c5fd" font-size="11" opacity=".8">F=ma</text><text x="88" y="105" fill="#60a5fa" font-size="10" opacity=".6">v=λf</text></svg>`,
    chapters:[
      { name:'Kinematika Gerak', topics:[
        { nama:'Besaran skalar dan vektor',                      materi:``, gambar:`` },
        { nama:'GLB dan GLBB',                                   materi:``, gambar:`` },
        { nama:'Gerak jatuh bebas',                              materi:``, gambar:`` },
        { nama:'Gerak parabola',                                 materi:``, gambar:`` },
        { nama:'Gerak melingkar',                                materi:``, gambar:`` },
      ]},
      { name:'Dinamika Partikel', topics:[
        { nama:'Hukum Newton I, II, III',                        materi:``, gambar:`` },
        { nama:'Gaya gesekan statis dan kinetis',                materi:``, gambar:`` },
        { nama:'Gaya sentripetal',                               materi:``, gambar:`` },
        { nama:'Usaha dan energi',                               materi:``, gambar:`` },
        { nama:'Momentum dan impuls',                            materi:``, gambar:`` },
      ]},
      { name:'Fluida', topics:[
        { nama:'Tekanan hidrostatis',                            materi:``, gambar:`` },
        { nama:'Hukum Archimedes',                               materi:``, gambar:`` },
        { nama:'Hukum Pascal',                                   materi:``, gambar:`` },
        { nama:'Tegangan permukaan',                             materi:``, gambar:`` },
        { nama:'Aliran fluida (Bernoulli)',                      materi:``, gambar:`` },
      ]},
      { name:'Gelombang dan Bunyi', topics:[
        { nama:'Karakteristik gelombang',                        materi:``, gambar:`` },
        { nama:'Gelombang transversal dan longitudinal',         materi:``, gambar:`` },
        { nama:'Interferensi dan difraksi',                      materi:``, gambar:`` },
        { nama:'Efek Doppler',                                   materi:``, gambar:`` },
        { nama:'Intensitas bunyi (desibel)',                     materi:``, gambar:`` },
      ]},
      { name:'Suhu dan Kalor', topics:[
        { nama:'Skala termometer',                               materi:``, gambar:`` },
        { nama:'Pemuaian zat',                                   materi:``, gambar:`` },
        { nama:'Kalor jenis',                                    materi:``, gambar:`` },
        { nama:'Perubahan wujud zat',                            materi:``, gambar:`` },
        { nama:'Perpindahan kalor: konduksi, konveksi, radiasi', materi:``, gambar:`` },
      ]},
    ]
  },

  {
    id:'kimia', cls:'kimia', title:'Kimia', icon:'🧪',
    filter:['sains','eksakta'], badge:'Wajib',
    desc:'Menjelajahi struktur materi, reaksi, dan transformasi zat.',
    accentA:'#34d399', accentB:'#065f46',
    tagBg:'rgba(52,211,153,.12)', tagColor:'#34d399',
    topics:['Atom','Ikatan Kimia','Stoikiometri','Laju Reaksi'],
    illus:`<svg width="140" height="120" viewBox="0 0 140 120" fill="none"><circle cx="70" cy="60" r="12" fill="#065f46" stroke="#34d399" stroke-width="2"/><circle cx="38" cy="38" r="7" fill="#047857" stroke="#34d399" stroke-width="1.5"/><circle cx="102" cy="38" r="7" fill="#047857" stroke="#34d399" stroke-width="1.5"/><circle cx="38" cy="82" r="7" fill="#047857" stroke="#34d399" stroke-width="1.5"/><circle cx="102" cy="82" r="7" fill="#047857" stroke="#34d399" stroke-width="1.5"/><line x1="70" y1="60" x2="38" y2="38" stroke="#6ee7b7" stroke-width="1.5" opacity=".6"/><line x1="70" y1="60" x2="102" y2="38" stroke="#6ee7b7" stroke-width="1.5" opacity=".6"/><line x1="70" y1="60" x2="38" y2="82" stroke="#6ee7b7" stroke-width="1.5" opacity=".6"/><line x1="70" y1="60" x2="102" y2="82" stroke="#6ee7b7" stroke-width="1.5" opacity=".6"/><circle cx="70" cy="60" r="4" fill="#34d399"/><text x="60" y="18" fill="#34d399" font-size="11" opacity=".8">H₂O</text></svg>`,
    chapters:[
      { name:'Struktur Atom', topics:[
        { nama:'Perkembangan model atom',     materi:``, gambar:`` },
        { nama:'Nomor atom dan nomor massa',  materi:``, gambar:`` },
        { nama:'Konfigurasi elektron',        materi:``, gambar:`` },
        { nama:'Bilangan kuantum',            materi:``, gambar:`` },
        { nama:'Tabel periodik modern',       materi:``, gambar:`` },
      ]},
      { name:'Ikatan Kimia', topics:[
        { nama:'Ikatan ion',                  materi:``, gambar:`` },
        { nama:'Ikatan kovalen',              materi:``, gambar:`` },
        { nama:'Ikatan logam',                materi:``, gambar:`` },
        { nama:'Gaya antar molekul',          materi:``, gambar:`` },
        { nama:'Bentuk molekul (VSEPR)',      materi:``, gambar:`` },
      ]},
      { name:'Stoikiometri', topics:[
        { nama:'Konsep mol',                  materi:``, gambar:`` },
        { nama:'Hukum-hukum dasar kimia',     materi:``, gambar:`` },
        { nama:'Persamaan reaksi kimia',      materi:``, gambar:`` },
        { nama:'Pereaksi pembatas',           materi:``, gambar:`` },
        { nama:'Kadar dan kemurnian zat',     materi:``, gambar:`` },
      ]},
      { name:'Termokimia', topics:[
        { nama:'Sistem dan lingkungan',       materi:``, gambar:`` },
        { nama:'Entalpi dan ΔH',              materi:``, gambar:`` },
        { nama:'Hukum Hess',                  materi:``, gambar:`` },
        { nama:'Energi ikatan',               materi:``, gambar:`` },
        { nama:'Kalorimetri',                 materi:``, gambar:`` },
      ]},
      { name:'Laju Reaksi', topics:[
        { nama:'Pengertian laju reaksi',                    materi:``, gambar:`` },
        { nama:'Faktor yang mempengaruhi laju reaksi',      materi:``, gambar:`` },
        { nama:'Teori tumbukan',                            materi:``, gambar:`` },
        { nama:'Orde reaksi',                               materi:``, gambar:`` },
        { nama:'Persamaan laju reaksi',                     materi:``, gambar:`` },
      ]},
    ]
  },

  {
    id:'bio', cls:'bio', title:'Biologi', icon:'🌿',
    filter:['sains'], badge:'Wajib',
    desc:'Kehidupan, sel, ekosistem, dan semua yang hidup di bumi.',
    accentA:'#4ade80', accentB:'#166534',
    tagBg:'rgba(74,222,128,.12)', tagColor:'#4ade80',
    topics:['Sel','Jaringan','Ekosistem','Klasifikasi'],
    illus:`<svg width="140" height="120" viewBox="0 0 140 120" fill="none"><ellipse cx="70" cy="60" rx="40" ry="30" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/><ellipse cx="70" cy="60" rx="18" ry="13" fill="#166534" stroke="#86efac" stroke-width="1"/><circle cx="70" cy="60" r="5" fill="#4ade80"/><text x="28" y="100" fill="#4ade80" font-size="10" opacity=".7">DNA</text></svg>`,
    chapters:[
      { name:'Keanekaragaman Hayati', topics:[
        { nama:'Tingkat keanekaragaman hayati',          materi:``, gambar:`` },
        { nama:'Keanekaragaman hayati Indonesia',        materi:``, gambar:`` },
        { nama:'Klasifikasi makhluk hidup',              materi:``, gambar:`` },
        { nama:'Binomial nomenclature',                  materi:``, gambar:`` },
        { nama:'Konservasi keanekaragaman hayati',       materi:``, gambar:`` },
      ]},
      { name:'Virus', topics:[
        { nama:'Ciri-ciri dan struktur virus',           materi:``, gambar:`` },
        { nama:'Siklus litik dan lisogenik',             materi:``, gambar:`` },
        { nama:'Penyakit yang disebabkan virus',         materi:``, gambar:`` },
        { nama:'Peran virus dalam kehidupan',            materi:``, gambar:`` },
        { nama:'Pencegahan penyakit virus',              materi:``, gambar:`` },
      ]},
      { name:'Sel', topics:[
        { nama:'Sel prokariotik dan eukariotik',         materi:``, gambar:`` },
        { nama:'Struktur dan fungsi organel sel',        materi:``, gambar:`` },
        { nama:'Transport membran',                      materi:``, gambar:`` },
        { nama:'Pembelahan sel: mitosis dan meiosis',    materi:``, gambar:`` },
        { nama:'Perbedaan sel tumbuhan dan hewan',       materi:``, gambar:`` },
      ]},
      { name:'Jaringan Tumbuhan', topics:[
        { nama:'Jaringan meristem dan permanen',                 materi:``, gambar:`` },
        { nama:'Jaringan epidermis, parenkim, pengangkut',       materi:``, gambar:`` },
        { nama:'Organ tumbuhan: akar, batang, daun',             materi:``, gambar:`` },
        { nama:'Modifikasi organ tumbuhan',                      materi:``, gambar:`` },
        { nama:'Adaptasi tumbuhan',                              materi:``, gambar:`` },
      ]},
      { name:'Ekosistem', topics:[
        { nama:'Komponen biotik dan abiotik',            materi:``, gambar:`` },
        { nama:'Rantai dan jaring-jaring makanan',       materi:``, gambar:`` },
        { nama:'Siklus materi dan aliran energi',        materi:``, gambar:`` },
        { nama:'Dinamika populasi',                      materi:``, gambar:`` },
        { nama:'Suksesi ekosistem',                      materi:``, gambar:`` },
      ]},
    ]
  },

  {
    id:'indo', cls:'indo', title:'Bahasa Indonesia', icon:'📝',
    filter:['bahasa'], badge:'Wajib',
    desc:'Kemampuan berbahasa yang kuat — dasar komunikasi dan literasi.',
    accentA:'#f87171', accentB:'#991b1b',
    tagBg:'rgba(248,113,113,.12)', tagColor:'#f87171',
    topics:['Teks LHO','Eksposisi','Anekdot','Hikayat'],
    illus:`<svg width="140" height="120" viewBox="0 0 140 120" fill="none"><rect x="30" y="20" width="80" height="90" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/><rect x="30" y="20" width="80" height="15" rx="6" fill="#991b1b"/><rect x="38" y="43" width="50" height="2" rx="1" fill="#fca5a5" opacity=".6"/><rect x="38" y="51" width="64" height="2" rx="1" fill="#fca5a5" opacity=".5"/><rect x="38" y="59" width="44" height="2" rx="1" fill="#fca5a5" opacity=".4"/><text x="40" y="33" fill="#fca5a5" font-size="10" font-weight="bold">A</text></svg>`,
    chapters:[
      { name:'Teks Laporan Hasil Observasi', topics:[
        { nama:'Ciri dan struktur teks LHO',    materi:``, gambar:`` },
        { nama:'Kaidah kebahasaan teks LHO',    materi:``, gambar:`` },
        { nama:'Menganalisis isi teks LHO',     materi:``, gambar:`` },
        { nama:'Menyusun teks LHO',             materi:``, gambar:`` },
        { nama:'Menyunting teks LHO',           materi:``, gambar:`` },
      ]},
      { name:'Teks Eksposisi', topics:[
        { nama:'Pengertian dan ciri teks eksposisi',   materi:``, gambar:`` },
        { nama:'Struktur teks eksposisi',              materi:``, gambar:`` },
        { nama:'Pola pengembangan teks eksposisi',     materi:``, gambar:`` },
        { nama:'Menyusun teks eksposisi',              materi:``, gambar:`` },
        { nama:'Membandingkan dua teks eksposisi',     materi:``, gambar:`` },
      ]},
      { name:'Teks Anekdot', topics:[
        { nama:'Pengertian dan fungsi teks anekdot',               materi:``, gambar:`` },
        { nama:'Struktur: abstrak, orientasi, krisis, reaksi, koda', materi:``, gambar:`` },
        { nama:'Unsur humor dan kritik sosial',                    materi:``, gambar:`` },
        { nama:'Memproduksi teks anekdot',                         materi:``, gambar:`` },
        { nama:'Menganalisis makna tersirat',                      materi:``, gambar:`` },
      ]},
      { name:'Hikayat', topics:[
        { nama:'Karakteristik hikayat sebagai sastra lama', materi:``, gambar:`` },
        { nama:'Nilai-nilai dalam hikayat',                 materi:``, gambar:`` },
        { nama:'Membandingkan hikayat dengan cerpen',       materi:``, gambar:`` },
        { nama:'Mengidentifikasi alur dan tokoh',           materi:``, gambar:`` },
        { nama:'Mengembangkan makna hikayat',               materi:``, gambar:`` },
      ]},
      { name:'Teks Negosiasi', topics:[
        { nama:'Pengertian dan konteks negosiasi',          materi:``, gambar:`` },
        { nama:'Struktur teks negosiasi',                   materi:``, gambar:`` },
        { nama:'Menyampaikan persetujuan dan penolakan',    materi:``, gambar:`` },
        { nama:'Bernegosiasi dalam berbagai konteks',       materi:``, gambar:`` },
        { nama:'Menyusun teks negosiasi',                   materi:``, gambar:`` },
      ]},
    ]
  },

  {
    id:'sejarah', cls:'sejarah', title:'Sejarah Indonesia', icon:'🏛️',
    filter:['sosial'], badge:'Wajib',
    desc:'Perjalanan panjang bangsa Indonesia dari zaman prasejarah.',
    accentA:'#fbbf24', accentB:'#78350f',
    tagBg:'rgba(251,191,36,.12)', tagColor:'#fbbf24',
    topics:['Prasejarah','Hindu-Buddha','Islam','Kolonial'],
    illus:`<svg width="140" height="120" viewBox="0 0 140 120" fill="none"><rect x="50" y="80" width="40" height="30" fill="#451a03" stroke="#fbbf24" stroke-width="1.5"/><polygon points="70,20 30,80 110,80" fill="#78350f" stroke="#fbbf24" stroke-width="1.5"/><circle cx="70" cy="20" r="4" fill="#fbbf24"/><text x="22" y="55" fill="#fbbf24" font-size="9" opacity=".6">1945</text><text x="98" y="40" fill="#d97706" font-size="9" opacity=".6">MERDEKA</text></svg>`,
    chapters:[
      { name:'Manusia dan Sejarah', topics:[
        { nama:'Konsep dasar sejarah',                  materi:``, gambar:`` },
        { nama:'Manusia sebagai subjek sejarah',        materi:``, gambar:`` },
        { nama:'Cara berpikir diakronik dan sinkronik', materi:``, gambar:`` },
        { nama:'Sumber, bukti, dan fakta sejarah',      materi:``, gambar:`` },
        { nama:'Historiografi Indonesia',               materi:``, gambar:`` },
      ]},
      { name:'Kehidupan Masa Prasejarah', topics:[
        { nama:'Ciri-ciri manusia praaksara',                    materi:``, gambar:`` },
        { nama:'Corak kehidupan: berburu hingga perundagian',    materi:``, gambar:`` },
        { nama:'Peninggalan masa prasejarah',                    materi:``, gambar:`` },
        { nama:'Persebaran Homo sapiens di Nusantara',           materi:``, gambar:`` },
        { nama:'Asal usul nenek moyang bangsa Indonesia',        materi:``, gambar:`` },
      ]},
      { name:'Kerajaan Hindu-Buddha', topics:[
        { nama:'Masuknya budaya India ke Nusantara',     materi:``, gambar:`` },
        { nama:'Kerajaan Kutai dan Tarumanegara',        materi:``, gambar:`` },
        { nama:'Kerajaan Sriwijaya',                     materi:``, gambar:`` },
        { nama:'Kerajaan Mataram Kuno dan Singhasari',   materi:``, gambar:`` },
        { nama:'Kerajaan Majapahit',                     materi:``, gambar:`` },
      ]},
      { name:'Kerajaan Islam di Nusantara', topics:[
        { nama:'Masuk dan berkembangnya Islam',              materi:``, gambar:`` },
        { nama:'Kerajaan Samudera Pasai dan Malaka',         materi:``, gambar:`` },
        { nama:'Kerajaan Demak, Pajang, Mataram Islam',      materi:``, gambar:`` },
        { nama:'Kerajaan Aceh, Banten, Makassar',            materi:``, gambar:`` },
        { nama:'Perlawanan terhadap VOC',                    materi:``, gambar:`` },
      ]},
      { name:'Kolonialisme dan Kebangkitan Nasional', topics:[
        { nama:'Kedatangan bangsa Barat ke Nusantara',   materi:``, gambar:`` },
        { nama:'VOC dan kolonial Belanda',               materi:``, gambar:`` },
        { nama:'Sistem tanam paksa',                     materi:``, gambar:`` },
        { nama:'Pergerakan nasional Indonesia',          materi:``, gambar:`` },
        { nama:'Pendudukan Jepang di Indonesia',         materi:``, gambar:`` },
      ]},
    ]
  },

  {
    id:'ekonomi', cls:'ekonomi', title:'Ekonomi', icon:'📊',
    filter:['sosial'], badge:'Pilihan',
    desc:'Cara manusia membuat keputusan dengan sumber daya yang terbatas.',
    accentA:'#818cf8', accentB:'#312e81',
    tagBg:'rgba(129,140,248,.12)', tagColor:'#818cf8',
    topics:['Permintaan','Penawaran','Pasar','Manajemen'],
    illus:`<svg width="140" height="120" viewBox="0 0 140 120" fill="none"><line x1="25" y1="100" x2="25" y2="20" stroke="#818cf8" stroke-width="1.5" opacity=".6"/><line x1="25" y1="100" x2="120" y2="100" stroke="#818cf8" stroke-width="1.5" opacity=".6"/><path d="M30 90 L50 70 L70 75 L90 50 L115 30" stroke="#818cf8" stroke-width="2" fill="none"/><circle cx="50" cy="70" r="3" fill="#818cf8"/><circle cx="90" cy="50" r="3" fill="#818cf8"/><rect x="35" y="78" width="8" height="22" rx="2" fill="#312e81" stroke="#818cf8" stroke-width="1"/><rect x="55" y="65" width="8" height="35" rx="2" fill="#312e81" stroke="#818cf8" stroke-width="1"/><rect x="75" y="55" width="8" height="45" rx="2" fill="#3730a3" stroke="#818cf8" stroke-width="1"/><rect x="95" y="40" width="8" height="60" rx="2" fill="#3730a3" stroke="#a5b4fc" stroke-width="1"/></svg>`,
    chapters:[
      { name:'Konsep Dasar Ekonomi', topics:[
        { nama:'Pengertian dan ruang lingkup ilmu ekonomi', materi:``, gambar:`` },
        { nama:'Kebutuhan dan alat pemuas kebutuhan',       materi:``, gambar:`` },
        { nama:'Kelangkaan dan pilihan ekonomi',            materi:``, gambar:`` },
        { nama:'Biaya peluang (opportunity cost)',          materi:``, gambar:`` },
        { nama:'Sistem ekonomi di dunia',                   materi:``, gambar:`` },
      ]},
      { name:'Permintaan dan Penawaran', topics:[
        { nama:'Faktor yang mempengaruhi permintaan',       materi:``, gambar:`` },
        { nama:'Hukum permintaan dan kurva permintaan',     materi:``, gambar:`` },
        { nama:'Faktor yang mempengaruhi penawaran',        materi:``, gambar:`` },
        { nama:'Hukum penawaran dan kurva penawaran',       materi:``, gambar:`` },
        { nama:'Keseimbangan pasar (equilibrium)',          materi:``, gambar:`` },
      ]},
      { name:'Peran Pelaku Ekonomi', topics:[
        { nama:'Rumah tangga konsumen',                     materi:``, gambar:`` },
        { nama:'Rumah tangga produsen',                     materi:``, gambar:`` },
        { nama:'Pemerintah sebagai pelaku ekonomi',         materi:``, gambar:`` },
        { nama:'Masyarakat luar negeri',                    materi:``, gambar:`` },
        { nama:'Circular flow diagram',                     materi:``, gambar:`` },
      ]},
      { name:'Badan Usaha', topics:[
        { nama:'BUMN, BUMS, dan Koperasi',                  materi:``, gambar:`` },
        { nama:'Bentuk-bentuk badan usaha swasta',          materi:``, gambar:`` },
        { nama:'Koperasi: prinsip dan jenis',               materi:``, gambar:`` },
        { nama:'Pengelolaan badan usaha',                   materi:``, gambar:`` },
        { nama:'Peran badan usaha dalam perekonomian',      materi:``, gambar:`` },
      ]},
      { name:'Manajemen', topics:[
        { nama:'Pengertian dan fungsi manajemen',           materi:``, gambar:`` },
        { nama:'Prinsip-prinsip manajemen',                 materi:``, gambar:`` },
        { nama:'Bidang-bidang manajemen',                   materi:``, gambar:`` },
        { nama:'Manajemen produksi dan pemasaran',          materi:``, gambar:`` },
        { nama:'Manajemen keuangan dan SDM',                materi:``, gambar:`` },
      ]},
    ]
  },

  {
    id:'english', cls:'english', title:'Bahasa Inggris', icon:'🌐',
    filter:['bahasa'], badge:'Wajib',
    desc:'Komunikasi global: reading, writing, listening, and speaking.',
    accentA:'#f472b6', accentB:'#831843',
    tagBg:'rgba(244,114,182,.12)', tagColor:'#f472b6',
    topics:['Descriptive','Narrative','Report','Grammar'],
    illus:`<svg width="140" height="120" viewBox="0 0 140 120" fill="none"><circle cx="70" cy="60" r="42" stroke="#f472b6" stroke-width="1.5" fill="none"/><ellipse cx="70" cy="60" rx="20" ry="42" stroke="#f9a8d4" stroke-width="1" fill="none" opacity=".6"/><line x1="28" y1="60" x2="112" y2="60" stroke="#f472b6" stroke-width="1" opacity=".5"/><line x1="35" y1="38" x2="105" y2="38" stroke="#f9a8d4" stroke-width="1" opacity=".4"/><line x1="35" y1="82" x2="105" y2="82" stroke="#f9a8d4" stroke-width="1" opacity=".4"/><circle cx="70" cy="60" r="6" fill="#831843" stroke="#f472b6" stroke-width="1.5"/><text x="55" y="18" fill="#f472b6" font-size="10" opacity=".8">Hello!</text></svg>`,
    chapters:[
      { name:'Descriptive Text', topics:[
        { nama:'Purpose and structure of descriptive text',     materi:``, gambar:`` },
        { nama:'Language features: adjectives and present tense', materi:``, gambar:`` },
        { nama:'Describing people, places, and things',         materi:``, gambar:`` },
        { nama:'Writing a descriptive paragraph',               materi:``, gambar:`` },
        { nama:'Using figurative language',                     materi:``, gambar:`` },
      ]},
      { name:'Narrative Text', topics:[
        { nama:'Generic structure: orientation, complication, resolution', materi:``, gambar:`` },
        { nama:'Language features: past tense and connectives', materi:``, gambar:`` },
        { nama:'Types of narratives: fables, legends, fairy tales', materi:``, gambar:`` },
        { nama:'Analyzing narrative elements',                  materi:``, gambar:`` },
        { nama:'Writing a short narrative story',               materi:``, gambar:`` },
      ]},
      { name:'Report Text', topics:[
        { nama:'Purpose and structure of report text',          materi:``, gambar:`` },
        { nama:'Difference between report and descriptive text',materi:``, gambar:`` },
        { nama:'Scientific and social report texts',            materi:``, gambar:`` },
        { nama:'Technical vocabulary in reports',               materi:``, gambar:`` },
        { nama:'Writing a structured report',                   materi:``, gambar:`` },
      ]},
      { name:'Grammar Essentials', topics:[
        { nama:'Simple, compound, and complex sentences',       materi:``, gambar:`` },
        { nama:'Modal verbs: can, could, may, might, should, must', materi:``, gambar:`` },
        { nama:'Conditional sentences types 1 and 2',          materi:``, gambar:`` },
        { nama:'Passive voice in various tenses',               materi:``, gambar:`` },
        { nama:'Relative clauses: who, which, that',            materi:``, gambar:`` },
      ]},
      { name:'Speaking and Listening', topics:[
        { nama:'Expressing opinions and suggestions',           materi:``, gambar:`` },
        { nama:'Making and responding to requests',             materi:``, gambar:`` },
        { nama:'Discussion and debate skills',                  materi:``, gambar:`` },
        { nama:'Listening for main ideas and details',          materi:``, gambar:`` },
        { nama:'Pronunciation and intonation patterns',         materi:``, gambar:`` },
      ]},
    ]
  },

];

let flatList = [];       
let flatIdx  = 0;        
let curSubject = null;

function buildFlatList(s){
  const list = [];
  s.chapters.forEach((ch, ci) => {
    ch.topics.forEach((tp, ti) => {
      list.push({ subjectId:s.id, chIdx:ci, tpIdx:ti,
        nama:tp.nama, bab:ch.name, materi:tp.materi, gambar:tp.gambar,
        icon:s.icon, title:s.title, accentA:s.accentA, accentB:s.accentB });
    });
  });
  return list;
}

const cvs=document.getElementById('particles'),ctx=cvs.getContext('2d');
let W,H,pts=[];
function resize(){W=cvs.width=innerWidth;H=cvs.height=innerHeight}
resize();addEventListener('resize',resize);
function mp(){return{x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.5,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,a:Math.random()*.7+.1,col:Math.random()<.5?'167,139,250':'52,211,153'}}
for(let i=0;i<90;i++)pts.push(mp());
function dp(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(${p.col},${p.a})`;ctx.fill();});for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(167,139,250,${.08*(1-d/120)})`;ctx.lineWidth=.5;ctx.stroke();}}requestAnimationFrame(dp);}
dp();

let activeFilter='all';
function renderGrid(){
  const grid=document.getElementById('grid');
  const q=document.getElementById('searchInput').value.toLowerCase();
  grid.innerHTML='';
  const filtered=subjects.filter(s=>{
    const mf=activeFilter==='all'||s.filter.includes(activeFilter);
    const mq=!q||s.title.toLowerCase().includes(q)||s.topics.some(t=>t.toLowerCase().includes(q));
    return mf&&mq;
  });
  document.getElementById('gridLabel').textContent=`— ${filtered.length} Mata Pelajaran`;
  if(!filtered.length){grid.innerHTML=`<div class="empty">nggak ada yang cocok <br><small>makanya yang bener ngetiknya</small></div>`;return;}
  filtered.forEach(s=>{
    const total=s.chapters.reduce((a,c)=>a+c.topics.length,0);
    const isi=s.chapters.reduce((a,c)=>a+c.topics.filter(t=>t.materi.trim()).length,0);
    const a=document.createElement('a');
    a.href='#';a.className=`scard ${s.cls}`;
    a.onclick=e=>{e.preventDefault();openModal(s);};
    a.innerHTML=`
      <div class="scard-illus" style="background:linear-gradient(135deg,${s.accentB}22,${s.accentA}15)">
        <div class="illus-bg" style="background:radial-gradient(ellipse at center,${s.accentA}30 0%,transparent 70%)"></div>
        ${s.illus}
      </div>
      <div class="scard-body">
        <div class="scard-row">
          <div class="scard-title">${s.icon} ${s.title}</div>
          <div class="scard-tag" style="background:${s.tagBg};color:${s.tagColor}">${s.badge}</div>
        </div>
        <div class="scard-desc">${s.desc}</div>
        <div class="scard-topics">${s.topics.map(t=>`<span class="topic-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="scard-footer">
        <span>${s.chapters.length} bab · ${total} topik · ${isi} terisi</span>
        <span class="open-btn">Buka materi <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 4l3 3-3 3" stroke="${s.tagColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </div>`;
    grid.appendChild(a);
  });
}

function openModal(s){
  curSubject=s;
  flatList=buildFlatList(s);
  const hero=document.getElementById('modalHero');
  hero.style.background=`linear-gradient(135deg,${s.accentB}55,${s.accentA}30)`;
  const closeBtn=hero.querySelector('button');hero.innerHTML='';hero.appendChild(closeBtn);
  const d=document.createElement('div');d.style.cssText='transform:scale(1.4)';d.innerHTML=s.illus;hero.appendChild(d);
  document.getElementById('mTitle').textContent=`${s.icon} ${s.title}`;
  document.getElementById('mDesc').textContent=s.desc;
  const total=s.chapters.reduce((a,c)=>a+c.topics.length,0);
  const isi=s.chapters.reduce((a,c)=>a+c.topics.filter(t=>t.materi.trim()).length,0);
  document.getElementById('mStats').innerHTML=`
    <div class="mstat"><strong>${s.chapters.length}</strong>Bab</div>
    <div class="mstat"><strong>${total}</strong>Topik</div>
    <div class="mstat"><strong>${isi}/${total}</strong>Terisi</div>
    <div class="mstat"><strong>${s.badge}</strong>Status</div>`;

  let offset=0;
  document.getElementById('mChapters').innerHTML=s.chapters.map((ch,ci)=>{
    const chOffset=offset;
    offset+=ch.topics.length;
    return `
    <div class="chapter" id="ch${s.id}${ci}">
      <div class="ch-head" onclick="toggleCh('ch${s.id}${ci}')">
        <div class="ch-num">${String(ci+1).padStart(2,'0')}</div>
        <div class="ch-name">${ch.name}</div>
        <span class="ch-arr">▾</span>
      </div>
      <div class="ch-body">
        ${ch.topics.map((tp,ti)=>{
          const gi=chOffset+ti;
          const ada=tp.materi.trim();
          return `<button class="ch-topic-btn" onclick="openMateri(${gi})">
            <span class="tb-left">${tp.nama}</span>
            <span class="tb-badge${ada?'':' empty'}">${ada?'✓ Ada':'Kosong'}</span>
            <span class="tb-arrow">→</span>
          </button>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');

  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow='';
}
function toggleCh(id){document.getElementById(id).classList.toggle('open');}

function openMateri(idx){
  flatIdx=idx;
  renderMateri();
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('materiOverlay').classList.add('open');
  document.querySelector('.materi-wrap').scrollTop=0;
  document.getElementById('materiOverlay').scrollTop=0;
}

function renderMateri(){
  const item=flatList[flatIdx];

  // topbar
  document.getElementById('topbarTitle').textContent=`${item.icon} ${item.title} › ${item.bab}`;
  document.getElementById('btnPrev').disabled=flatIdx===0;
  document.getElementById('btnNext').disabled=flatIdx===flatList.length-1;

  // breadcrumb
  document.getElementById('mBreadcrumb').innerHTML=
    `${item.icon} ${item.title} <span class="bc-accent">›</span> ${item.bab} <span class="bc-accent">›</span> Topik ${flatIdx+1} dari ${flatList.length}`;

  // header
  document.getElementById('mNum').textContent=`Topik ${String(flatIdx+1).padStart(2,'0')}`;
  document.getElementById('mJudul').textContent=item.nama;
  document.getElementById('mMeta').innerHTML=`
    <div class="materi-meta-pill">📖 ${item.bab}</div>
    <div class="materi-meta-pill">${item.materi.trim() ? '✅ Sudah diisi' : '⬜ Belum diisi'}</div>`;

  // gambar
  const imgSec=document.getElementById('mImgSection');
  if(item.gambar.trim()){
    imgSec.style.display='flex';
    imgSec.innerHTML=item.gambar.trim();
  } else {
    imgSec.style.display='none';
  }

  // body materi
  const bodyEl=document.getElementById('mBody');
  if(item.materi.trim()){
    bodyEl.innerHTML=`<div class="materi-body">${item.materi.trim()}</div>`;
  } else {
    bodyEl.innerHTML=`
      <div class="materi-empty">
        <span class="ei">✏️</span>
        <p>Materi untuk topik ini belum diisi.<br>
        makanya kerja di vs code<br>
        <code>${item.nama}</code><br>
      </div>`;
  }

  // nav bawah
  const prev=flatIdx>0?flatList[flatIdx-1]:null;
  const next=flatIdx<flatList.length-1?flatList[flatIdx+1]:null;
  const fp=document.getElementById('fnPrev');
  const fn=document.getElementById('fnNext');
  fp.disabled=!prev;
  fn.disabled=!next;
  document.getElementById('fnPrevLabel').textContent=prev?prev.nama:'—';
  document.getElementById('fnNextLabel').textContent=next?next.nama:'—';
}

function navigateMateri(dir){
  const next=flatIdx+dir;
  if(next<0||next>=flatList.length)return;
  flatIdx=next;
  renderMateri();
  document.getElementById('materiOverlay').scrollTop=0;
}

function closeMateri(){
  document.getElementById('materiOverlay').classList.remove('open');
  if(curSubject) openModal(curSubject);
}

document.getElementById('overlay').addEventListener('click',e=>{
  if(e.target===document.getElementById('overlay'))closeModal();
});
document.querySelectorAll('.ftab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');activeFilter=btn.dataset.f;renderGrid();
  });
});
document.getElementById('searchInput').addEventListener('input',renderGrid);

renderGrid();
