import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, header, description, pp, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1 style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          {pp && (
            <img
              src={pp}
              alt={name}
              style={{
                height: '2em',
                width: '2em',
                marginRight: '0.5em',
                borderRadius: '50%',
                flexShrink: 0,
              }}
            />
          )}
          <span className="about__name">{name}.</span>
        </h1>
      )}

      {header && <h3 className='about__role'>{header}</h3>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        
        {social && (
          <>
            {social.email && (
                <a
                  href={social.email}
                  aria-label='email'
                  className='link link--icon'
                >
                  <EmailIcon />
                </a>
              )}
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
