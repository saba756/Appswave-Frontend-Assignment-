import BreadCrumb from "./BreadCrumb";

      
      function Header() {
       return( 
       <div className="header-wrapper">
            <div className="right">
                <header >
                    <div className="header-box">
                        <h2 className="text">Obtaining Transporter Qualification Service</h2>
                    </div>
                </header>
                <BreadCrumb />
            </div>
            <div className="left">
                <button className="rateButton">Rate service</button>
            </div>
       </div>
      
      )
      }
      
      export default Header;
    