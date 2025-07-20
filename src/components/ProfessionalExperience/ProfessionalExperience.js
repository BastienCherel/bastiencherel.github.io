import uniqid from 'uniqid'
import { professionnalexperiences} from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './ProfessionalExperience.css'

const ProfessionalExperience = () => {
  if (!professionnalexperiences.length) return null

  return (
    <section id='professionnalexperiences' className='section projects'>
      <h2 className='section__title'>Professional Experiences</h2>

      <div className='projects__grid'>
        {professionnalexperiences.map((professionnalexperience) => (
          <ProjectContainer key={uniqid()} project={professionnalexperience} />
        ))}
      </div>
    </section>
  )
}

export default ProfessionalExperience
