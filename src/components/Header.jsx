import './header-style.css';

const Header = () => {
    const handleScroll = () => {
      document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <header className="header">
        <div className="header-content">
          <h1>Welcome to Pul's Cafe</h1>
          <button onClick={handleScroll} className="begin-button">Begin</button>
        </div>
      </header>
    );
  }

export default Header;