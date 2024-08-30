import Button from "../Button/Button"
import MenuCard from "../MenuCard/MenuCard"
import './highlights.css'
import Bruchetta from '../../assets/bruchetta.svg'
import LemonDessert from '../../assets/lemon dessert.jpg'
import GreekSalad from '../../assets/greek salad.jpg'

const specials = [
  {
    name: "Greek Salad",
    price: 12.98,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus iaculis lacus, sed pretium augue malesuada sit amet.",
    image: GreekSalad
  },
  {
    name: "Bruchetta",
    price: 5.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus iaculis lacus, sed pretium augue malesuada sit amet.",
    image: Bruchetta
  },
  {
    name: "Lemon Dessert",
    price: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus iaculis lacus, sed pretium augue malesuada sit amet.",
    image: LemonDessert
  }
]

const Highlights = () => {
  return (
    <div className='highlights-section'>
      <div className="highlights-section__heading">
        <h1>This weeks specials!</h1>
        <Button>Online menu</Button>
      </div>
      <div className="highlights-section__product">
        {
          specials.map((menu) => {
            return (
              <MenuCard title={menu.name} price={menu.price} description={menu.description} image={menu.image}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Highlights