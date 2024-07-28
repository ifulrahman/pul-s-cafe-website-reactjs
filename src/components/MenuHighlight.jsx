import './menuHighlight-style.css';
import menuData from '../helpers/const.js';

const MenuHighlight = () => {
    return (
        <section className="menu-section">
            <h2>Our Menu</h2>
            <p>"Hidangan Penuh Kenikmatan yang Siap Memenuhi Kebutuhan Anda"</p>
            <div className="menu-grid">
                {menuData.map(item => (
                    <div className="menu-item-2" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="item-description">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuHighlight;
