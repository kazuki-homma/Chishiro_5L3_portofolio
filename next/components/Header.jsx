const Header = (props) => {
    return (
      <header className={props.header}>
       <div className={props.headerElement}>ABOUT</div>
       <div className={props.headerElement}>BLOG</div>
       <div className={props.headerElement}>CONTACT</div>
       <div className={props.headerElement}>WORKS</div>
      </header>
    )
}

export default Header;

