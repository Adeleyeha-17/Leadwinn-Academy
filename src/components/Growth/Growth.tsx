import Button from "../Button"

export const Growth = () => {
  return (
    <div className="flex justify-center items-center gap-14">
      <div className="flex flex-col gap-6 text-head-black max-w-[320px]">
         <h1 className=" font-bold text-4xl">See our growth, progress, and <span className="text-hero-blue">evolution</span></h1>
         <h4 className="text-base">Founded in 2020, Leadwinn has trained 100+ students in 10+ countries, demonstrating a global commitment to top-notch coding education. Our mission is to shape the future of education in an evolving digital landscape.</h4>

         <Button path="" title="LEARN MORE"/>
      </div>

      <div>
         <img src="./growth.svg" alt="growth image" />
      </div>
    </div>
  )
}
