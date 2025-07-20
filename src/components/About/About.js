import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PersonIcon from '@material-ui/icons/Person'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, pp, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          {pp && (
          <img
            src={pp}
            alt={`${name}`}
            style={{ height: '3em', marginRight: '0.5em', verticalAlign: 'middle' ,borderRadius: '50%'}}
          />
        )}<span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
              <a
                href={resume}
                aria-label='github'
                className='link link--icon'
              >
                <PersonIcon />
              </a>
            )}
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
