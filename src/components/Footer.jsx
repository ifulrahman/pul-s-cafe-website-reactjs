import './footer-style.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <h2>Pul's Cafe</h2>
                    <nav className="footer-nav">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#menu">Menu</a>
                    </nav>
                </div>
                <div className="footer-right">
                    <h3>CONTACT US</h3>
                    <br />
                    <address>
                        Jalan Raya Tapos, Kecamatan Tapos, Kelurahan Cimpaeun, Depok, Jawa Barat (71279)<br />
                        Phone: 0813 1566 9406<br />
                        Email: <a href="mailto:syaifulmuhammad02@gmail.com">syaifulmuhammad02@gmail.com</a><br />
                        Website: <a href="https://ifulrahman.github.io" target="_blank" rel="noopener noreferrer">ifulrahman.github.io</a>
                    </address>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright 2024 Pul's Cafe | Muhammad Syaiful Rahman. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
