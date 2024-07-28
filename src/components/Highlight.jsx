import './highlight-style.css';

const Highlight = ({ highlights }) => {
  return (
    <section className="highlight-section">
      <div className="highlight-content">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-item">
            <img src={item.img} alt={item.text} className="highlight-image" />
            <p className="highlight-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlight;
