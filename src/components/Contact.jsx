import './contact-style.css';
import contactImage from '../assets/contact.png';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-section address">
                <h3>Alamat Cafe.</h3>
                <p>Jalan Raya Tapos, Kecamatan Tapos, Kelurahan Cimpaeun, Depok, Jawa Barat (71279)</p>
            </div>
            <div className="contact-section image">
                <img src={contactImage} alt="Coffee cups" />
            </div>
            <div className="contact-section info">
                <h3>Jam Operasional:</h3>
                <p>Senin - Jumat // 09:00 - 18:00 WIB</p>
                <p>Sabtu // 10:00 - 01:00 WIB</p>
                <p>Minggu // TUTUP</p>
                <br />
                <h3>Nomor Reservasi:</h3>
                <p>📞 + (628)-13-1566-9406</p>
                <p>(Muhammad Syaiful Rahman)</p>
            </div>
        </div>
    );
}

export default Contact;
