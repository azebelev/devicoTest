import './appHeader.css';


const AppHeader = ({ setProductPage, productPage }) => {



  return (
    <header>
      <div className="header_title">
        <h1><span>MY</span>SHOP</h1>
      </div>
      <div className="header_github">
        <a href="https://github.com/azebelev/3.2Nest_Library.git" >examples github</a>
      </div>
      <button style={{ 'display': productPage === true ? 'block' : 'none' }}
        className="btn header_button " onClick={() => {
          setProductPage(false);
        }}>
        add product
      </button>

    </header >
  )


}

export default AppHeader;