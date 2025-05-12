
interface btnType {
    btntext: string
}

const Button = ({btntext}: btnType) => {
  return (
    <div>
        <button className="bg-primary text-white px-3 font-[500] py-1 rounded font-[Jost]">{btntext}</button>
    </div>
  )
}

export default Button