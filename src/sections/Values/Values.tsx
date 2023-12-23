import { values } from "../../assets/images"

export const Values = () => {
  return (
    <div className="bg-nav-blue h-full w-full py-10 px-5 md:px-12 flex flex-col justify-center items-center font-poppins text-heading">
      <h1 className="text-base sm:text-3xl font-semibold mb-2">Our Core Values</h1>
      <h4 className="text-xs sm:text-sm mb-5 max-sm:text-center">Our core mission is to empower every child for the tech-driven future.</h4>

      <img src={values} alt="Core values" className="w-4/5 sm:w-[30rem]"/>
    </div>
  )
}
