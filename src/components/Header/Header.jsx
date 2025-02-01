import "./Header.css"

export  const Header=()=>{
    return (
        <>
        <header>
            <div className="logo">
                <img src="https://vismaifood.com/themes/pivisions/assets/images/logo.png" width="50px"/>
                <h3>Vismai Foods</h3>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Order</a></li>
            </ul>
        </header>
        <input class="search" type="text" placeholder="Search"/>
        </>
    )
}