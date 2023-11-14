import Learning from "../components/Learning"

export const About = () => {
  return (
    <div>

      <div className="bg-footer-blue flex flex-col justify-center items-center h-[30rem] text-white font-poppins">
        <h1 className="text-5xl font-semibold mb-5">
        Shaping Tech Innovators Of Tommorrow
        </h1>

        <h4 className="text-base w-[46rem] text-center">
        Leadwinn is dedicated to transforming learners, inspiring progress, and nurturing the future of tech education.
        </h4>
    
      </div>

    <div className="flex flex-col justify-between md:px-12 md:py-6 px-5 xl:px-40 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins">

    </div>

      <Learning />
    </div>
  )
}
