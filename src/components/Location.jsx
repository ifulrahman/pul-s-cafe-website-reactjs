import './location-style.css';

const Location = () => {
    return (
        <div className="location-container">
            <div className="map-container">
                <iframe 
                    title="Tapos Depok Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63436.60306306505!2d106.84433915173827!3d-6.4213192537430865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eae1b5058df9%3A0x54c5baa0ce9b3df5!2sTapos%2C%20Depok%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1722172157077!5m2!1sen!2sid"
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Location;
