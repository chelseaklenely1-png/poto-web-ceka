import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      {/* STYLE LANGSUNG */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        body{
          background:black;
          color:white;
        }

        header{
          position:fixed;
          width:100%;
          padding:1rem 9%;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .logo{
          font-size:3rem;
          color:#b74b4b;
          font-weight:800;
        }

        nav a{
          font-size:1.8rem;
          color:white;
          margin-left:4rem;
          text-decoration:none;
        }

        nav a:hover{
          color:#b74b4b;
        }

        .home{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8rem;
          min-height:100vh;
        }

        .home-img img{
          width:300px;
          border-radius:50%;
        }

        .home-content h1{
          font-size:5rem;
        }

        span{
          color:#b74b4b;
        }

        .home-content p{
          font-size:1.6rem;
        }

        .social-icons a{
          display:inline-flex;
          justify-content:center;
          align-items:center;
          width:4rem;
          height:4rem;
          border:2px solid #b74b4b;
          border-radius:50%;
          margin:2rem 1rem 2rem 0;
          color:#b74b4b;
          font-size:2rem;
        }

        .social-icons a:hover{
          background:#b74b4b;
          color:black;
        }

        .btn{
          display:inline-block;
          padding:1rem 2rem;
          border:2px solid #b74b4b;
          color:#b74b4b;
          border-radius:2rem;
          text-decoration:none;
          margin-top:1rem;
        }
      `}</style>

      {/* CONTENT */}
      <header>
        <a href="#" className="logo">Chelsea</a>

        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Skills</a>
          <a href="#">Education</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="home">
        <div className="home-img">
          <img src="/main.jpg" alt="" />
        </div>

        <div className="home-content">
          <h1>Hi, It's <span>Chelsea</span></h1>
          <h3>I'm a Developer</h3>
          <h1>Halo ini test</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>

          <a href="#" className="btn">Hire me</a>
        </div>
      </section>
    </>
  )
}