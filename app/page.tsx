export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
          list-style: none;
          border: none;
          outline: none;
          transition: 0.3s ease;
        }

        :root {
          --bg-color: #080808;
          --second-bg-color: #131313;
          --main-color: #b74b4b;
          --text-color: white;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg-color);
          color: var(--text-color);
          overflow-x: hidden;
        }

        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 9%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(183, 75, 75, 0.1);
        }

        .logo {
          font-size: 2.2rem;
          color: var(--main-color);
          font-weight: 800;
        }

        nav a {
          font-size: 1rem;
          color: white;
          margin-left: 2.5rem;
          font-weight: 500;
        }

        nav a:hover {
          color: var(--main-color);
        }

        section {
          padding: 8rem 9% 5rem;
          min-height: 100vh;
        }

        .heading {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 4rem;
        }

        span {
          color: var(--main-color);
        }

        /* HOME SECTION */
        .home {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5rem;
        }

        .home-content h1 {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .home-content h3 {
          font-size: 1.8rem;
          margin: 0.5rem 0 1.5rem;
        }

        .home-content p {
          font-size: 1rem;
          line-height: 1.6;
          color: #ddd;
        }

        .home-img img {
          width: 320px;
          border-radius: 50%;
          border: 5px solid var(--main-color);
          box-shadow: 0 0 40px var(--main-color);
        }

        .social-icons a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 3rem;
          height: 3rem;
          border: 2px solid var(--main-color);
          border-radius: 50%;
          color: var(--main-color);
          font-size: 1.3rem;
          margin: 2rem 1rem 2rem 0;
        }

        .social-icons a:hover {
          background: var(--main-color);
          color: black;
          box-shadow: 0 0 15px var(--main-color);
        }

        .btn {
          display: inline-block;
          padding: 0.9rem 2.2rem;
          background: var(--main-color);
          border-radius: 3rem;
          color: black;
          font-weight: 600;
          box-shadow: 0 0 10px var(--main-color);
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px var(--main-color);
        }

        /* SERVICES SECTION */
        #services { background: var(--second-bg-color); }
        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .services-box {
          background: var(--bg-color);
          padding: 2.5rem;
          border-radius: 1.5rem;
          text-align: center;
          border: 1px solid transparent;
        }
        .services-box:hover {
          border-color: var(--main-color);
          transform: translateY(-8px);
        }
        .services-box i { font-size: 3.5rem; color: var(--main-color); }
        .services-box h3 { font-size: 1.5rem; margin: 1rem 0; }

        /* SKILLS SECTION */
        .skills-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.2rem;
        }
        .skill-badge {
          padding: 0.8rem 1.8rem;
          background: var(--second-bg-color);
          border: 1px solid var(--main-color);
          border-radius: 2rem;
        }

        /* EDUCATION & EXPERIENCE */
        #experience { background: var(--second-bg-color); }
        .timeline-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        .timeline-box {
          background: var(--bg-color);
          padding: 2rem;
          border-radius: 1.5rem;
          border-left: 4px solid var(--main-color);
        }
        #education .timeline-box { background: var(--second-bg-color); }
        .date { color: var(--main-color); font-weight: 600; font-size: 0.9rem; }
        .timeline-box h3 { margin: 0.5rem 0; font-size: 1.3rem; }
        .timeline-box h4 { color: #aaa; margin-bottom: 1rem; font-size: 1rem; }
        .timeline-box ul li { margin-bottom: 0.5rem; color: #ddd; font-size: 0.9rem; }

        /* CONTACT SECTION */
        .contact form {
          max-width: 700px;
          margin: 0 auto;
        }
        .input-box { display: flex; gap: 1rem; margin-bottom: 1rem; }
        .input-box input, textarea {
          width: 100%;
          padding: 1.2rem;
          background: var(--second-bg-color);
          color: white;
          border-radius: 0.8rem;
          font-size: 1rem;
        }
        textarea { resize: none; margin-bottom: 2rem; }

        @media (max-width: 768px) {
          header { padding: 1.5rem 5%; }
          nav { display: none; }
          .home { flex-direction: column-reverse; text-align: center; }
          .home-content h1 { font-size: 2.8rem; }
          .home-img img { width: 220px; }
          .social-icons a { margin: 2rem 0.5rem; }
        }
      `}</style>

      <header>
        <a href="#home" className="logo">Chelsea.</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Halo, Saya</h3>
          <h1><span>Chelsea</span></h1>
          <h3>Web Developer</h3>
          <p>
            Saya seorang pengembang web yang berfokus pada pembuatan website 
            modern, responsif, dan fungsional. Saya senang mempelajari teknologi 
            baru dan mengubah ide menjadi baris kode yang berguna.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <a href="#contact" className="btn">Hubungi Saya</a>
        </div>
        <div className="home-img">
          <img src="profil.jpeg" alt="Chelsea" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <h2 className="heading">Layanan <span>Saya</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3>Web Development</h3>
            <p>Pembuatan website kustom dengan performa tinggi menggunakan teknologi modern.</p>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-mobile-screen"></i>
            <h3>Responsive Design</h3>
            <p>Memastikan tampilan website Anda optimal di berbagai perangkat mobile dan desktop.</p>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h3>SEO Dasar</h3>
            <p>Optimasi struktur website agar lebih mudah ditemukan di mesin pencari.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2 className="heading">Keahlian <span>Teknis</span></h2>
        <div className="skills-content">
          <div className="skill-badge">HTML5</div>
          <div className="skill-badge">CSS3</div>
          <div className="skill-badge">JavaScript</div>
          <div className="skill-badge">React.js</div>
          <div className="skill-badge">Next.js</div>
          <div className="skill-badge">Tailwind CSS</div>
          <div className="skill-badge">Git & GitHub</div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <h2 className="heading">Pendidikan <span>Saya</span></h2>
        <div className="timeline-container">
          <div className="timeline-box">
            <span className="date">2021 - Sekarang</span>
            <h3>Teknologi Informasi</h3>
            <h4>Universitas Nama Kampus</h4>
            <p>Mendalami rekayasa perangkat lunak, algoritma, dan manajemen basis data.</p>
          </div>
          <div className="timeline-box">
            <span className="date">2018 - 2021</span>
            <h3>Rekayasa Perangkat Lunak</h3>
            <h4>SMK / SMA Negeri 1</h4>
            <p>Dasar-dasar pemrograman web dan logika komputer.</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2 className="heading">Pengalaman <span>Kerja</span></h2>
        <div className="timeline-container">
          <div className="timeline-box">
            <span className="date">2024 - Sekarang</span>
            <h3>Freelance Web Developer</h3>
            <h4>Project-based</h4>
            <ul>
              <li>Membangun landing page untuk bisnis lokal.</li>
              <li>Maintenance website berbasis WordPress dan React.</li>
            </ul>
          </div>
          <div className="timeline-box">
            <span className="date">2023</span>
            <h3>Frontend Developer Intern</h3>
            <h4>PT Digital Creative</h4>
            <ul>
              <li>Membantu slicing desain UI dari Figma ke kode React.</li>
              <li>Optimalisasi kecepatan loading halaman web.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2 className="heading">Hubungi <span>Saya</span></h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Email Anda" required />
          </div>
          <textarea cols="30" rows="8" placeholder="Apa yang bisa saya bantu?" required></textarea>
          <div style={{ textAlign: 'center' }}>
            <input type="submit" value="Kirim Pesan" className="btn" style={{ cursor: 'pointer' }} />
          </div>
        </form>
      </section>

      <footer style={{ background: 'black', padding: '3rem', textAlign: 'center', borderTop: '1px solid #222' }}>
        <p>© 2024 Chelsea Portfolio | Dibuat dengan Passion</p>
      </footer>
    </>
  );
}