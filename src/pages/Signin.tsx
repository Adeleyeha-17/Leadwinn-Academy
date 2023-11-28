import dotImage from "../../src/assets/dots.png"

export const Signin = () => {
  return (
    <div className="h-screen">
      
      <div className="bg-head-black text-white w-4/12 h-screen flex flex-col justify-center font-poppins">
      <div className=" w-[28rem] flex flex-col gap-10 ml-12">
        <h2 className=" font-medium text-5xl">Join Leadwinn For Free</h2>
        <img src={dotImage}  className="w-11/12"/>
        <h4 className="w-[24rem] font-bold text-2xl">Fuel your creativity at Leadwinn with cutting-edge courses in coding, tech skills, and more.</h4>
      </div>
      </div>
      
    </div>
  )
}
