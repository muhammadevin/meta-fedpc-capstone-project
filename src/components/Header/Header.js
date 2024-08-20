import Button from '../Button/Button'
import './header.css'

const headerContent = {
  heading: "Little Lemon",
  subTitle: "Chicago",
  description: "We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
};

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-content__text">
          <h1 className="display-title">{headerContent.heading}</h1>
          <h2 className="sub-title">{headerContent.subTitle}</h2>
          <p>{headerContent.description}</p>
          <Button>Reserve a table</Button>
        </div>
        <div className="header-content__image"></div>
      </div>
    </div>
  )
}

export default Header