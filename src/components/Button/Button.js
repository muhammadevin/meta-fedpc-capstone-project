import './button.css'

const Button = ({children}) => {
  return (
    <button className='button' >
      <h4 className='card-title'>
        { children }
      </h4>
    </button>
  )
}

export default Button