import Faq from "../components/Faq"
import { Path, PlanCourses, Otherplans, Skill, SelectedPlans } from "../sections"

export const Plans = () => {
  return (
    <div className="font-poppins pt-24">
      <Path />

      <Skill />

      <SelectedPlans />

      <PlanCourses />

      <Otherplans />

      <Faq />

    </div>
  )
}
