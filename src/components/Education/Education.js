import uniqid from 'uniqid'
import { educations } from '../../portfolio'
import EducationContainer from '../EducationContainer/EducationContainer'
import './Education.css'

const Education = () => {
  if (!educations.length) return null

  return (
    <section id='educations' className='section projects'>
      <h2 className='section__title'>Education</h2>

      <div className='projects__grid'>
        {educations.map((education) => (
          <EducationContainer key={uniqid()} project={education} />
        ))}
      </div>
    </section>
  )
}

export default Education
