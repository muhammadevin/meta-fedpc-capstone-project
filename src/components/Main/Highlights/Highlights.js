import Button from "../../Button/Button"
import MenuCard from "../../MenuCard/MenuCard"

const specials = [
  {
    name: "Greek Salad",
    price: 12.98,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus iaculis lacus, sed pretium augue malesuada sit amet."
  },
  {
    name: "Bruchetta",
    price: 5.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus iaculis lacus, sed pretium augue malesuada sit amet."
  },
  {
    name: "Lemon Dessert",
    price: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus iaculis lacus, sed pretium augue malesuada sit amet."
  }
]

const Highlights = () => {
  return (
    <div className='highlights-section'>
      <div className="highlights-section__heading">
        <h1>This weeks specials!</h1>
        <Button>Reserve a table</Button>
      </div>
      <div className="highlights-section__product">
        {
          specials.map((menu) => {
            return (
              <MenuCard title={menu.name} price={menu.price} description={menu.description}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Highlights