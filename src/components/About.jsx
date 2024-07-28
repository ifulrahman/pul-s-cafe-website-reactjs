import './about-style.css';
import aboutImage from "../assets/about.jpg"

const About = () => {
    return (
        <section id='main-content' className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h3>Read Our Story</h3>
                    <h2>Tentang Kami</h2>
                    <h4>Kami Sudah Berpengalaman Membuat Hidangan Khas Cafe Sejak 1999</h4>
                    <p>
                        Selamat datang di tempat yang mengundang untuk menikmati kelezatan hidangan yang dipenuhi cinta dan kopi yang membangunkan semangat. 
                        Di sini, setiap tegukan membawa cerita, dan setiap gigitan adalah perjalanan rasa yang menggetarkan.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="Breakfast at Pul's Cafe" />
                </div>
            </div>
        </section>
    )
}

export default About;