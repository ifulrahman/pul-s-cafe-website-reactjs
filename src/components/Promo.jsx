import './promo-style.css';
import promo from '../assets/promo.png';

const Promo = () => {
    return (
        <div className="promo-section">
            <div className="promo-content">
                <h1>Promo Ayam Panggang</h1>
                <p> Nikmati Ayam Panggang spesial kami dengan harga terjangkau! </p>
                <p> <strong>Hanya Rp55.000,00 per porsi.</strong> </p>
                <p> Gratis minuman segar untuk setiap pembelian dua porsi. </p>
                <p> Promo berlaku hingga akhir bulan ini. Jangan sampai ketinggalan! </p>
            </div>
            <div className="promo-image">
                <img src={promo} alt="Ayam Panggang" />
            </div>
        </div>
    );
};

export default Promo;
