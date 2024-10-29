import { getIcon } from "../utils";

type SkillType = {
  name: string;
  color: string;
}

export const SkillSection = ({ title, skills }: { title: string, skills: SkillType[]}) => {


  const getIconBySkill = (skill: SkillType) : React.ReactNode | null => {
    return getIcon(skill.name, skill.color)
  }

  return (
    <div className='mb-4 mt-4 rounded-lg border border-gray-700 p-4 shadow-md md:w-1/3'>
      <h1 className='mb-4 text-3xl font-bold'>{title}</h1>
      {skills.map((skill, index) => (
        <div
          key={index}
          className='flex flex-row items-center gap-4 p-2 text-center'
        >
          {getIconBySkill(skill)}
          <p className='mb-1 text-2xl font-semibold'>{skill.name}</p>
        </div>
      ))}
    </div>
  )
}
