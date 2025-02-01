import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <h2>We Deliver Across These Cities</h2>
            <div className="city-grid">
                <div className="city-column">
                    <a href="#mumbai" className="city-link">Mumbai</a>
                    <a href="#delhi" className="city-link">Delhi</a>
                    <a href="#bangalore" className="city-link">Bangalore</a>
                    <a href="#hyderabad" className="city-link">Hyderabad</a>
                </div>
                <div className="city-column">
                    <a href="#chennai" className="city-link">Chennai</a>
                    <a href="#kolkata" className="city-link">Kolkata</a>
                    <a href="#pune" className="city-link">Pune</a>
                    <a href="#ahmedabad" className="city-link">Ahmedabad</a>
                </div>
                <div className="city-column">
                    <a href="#jaipur" className="city-link">Jaipur</a>
                    <a href="#surat" className="city-link">Surat</a>
                    <a href="#lucknow" className="city-link">Lucknow</a>
                    <a href="#kanpur" className="city-link">Kanpur</a>
                </div>
                <div className="city-column">
                    <a href="#nagpur" className="city-link">Nagpur</a>
                    <a href="#visakhapatnam" className="city-link">Visakhapatnam</a>
                    <a href="#indore" className="city-link">Indore</a>
                    <a href="#thane" className="city-link">Thane</a>
                </div>
                <div className="city-column">
                    <a href="#bhopal" className="city-link">Bhopal</a>
                    <a href="#patna" className="city-link">Patna</a>
                    <a href="#vadodara" className="city-link">Vadodara</a>
                    <a href="#ghaziabad" className="city-link">Ghaziabad</a>
                </div>
                <div className="city-column">
                    <a href="#ludhiana" className="city-link">Ludhiana</a>
                    <a href="#agra" className="city-link">Agra</a>
                    <a href="#nashik" className="city-link">Nashik</a>
                    <a href="#faridabad" className="city-link">Faridabad</a>
                </div>
            </div>
        </footer>
    );
};     