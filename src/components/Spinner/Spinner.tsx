import { spinner } from "../../assets/icons"

export const Spinner = () => {
  return (
    <div className="bg-white flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-50">
      <div>
         <img src={spinner} alt="Loading ..." className="w-24 h-24"/>
      </div>
    </div>
  )
}
