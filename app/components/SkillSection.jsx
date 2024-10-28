import { getIcon } from '../utils'

export const SkillSection = ({ title, skills }) => (
  <div className='mb-4 mt-4 rounded-lg border border-gray-700 p-4 shadow-md md:w-1/3'>
    <h1 className='mb-4 text-3xl font-bold'>{title}</h1>
    {skills.map((skill, index) => (
      // <SkillBar key={index} name={skill.name} color={skill.color} percent={skill.percent} />
      <div
        key={index}
        className='flex flex-row items-center gap-4 p-2 text-center'
      >
        {getIcon(skill.name, skill.color)}
        <p className='mb-1 text-2xl font-semibold'>{skill.name}</p>
      </div>

      // <p key={index}>{skill.name}</p>
    ))}
  </div>
)
