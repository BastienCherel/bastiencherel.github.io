import uniqid from 'uniqid'
import AttachmentIcon from '@material-ui/icons/Attachment';
import WebsiteIcon from '@material-ui/icons/Language';
import './EducationContainer.css'

const EducationContainer = ({ project }) => (
  <div className='project'>
    <h3>  {project.logo && (
    <img
      src={project.logo}
      alt={`${project.name} logo`}
      style={{ height: '1.5em', marginRight: '0.5em', verticalAlign: 'middle' }}
    />
  )}{project.name}</h3>

    {project.major && (
      <ul className='project__major'>
        {project.major.map((item) => (
          <li key={uniqid()} className='project__major-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    <p className='project__description'>{project.description}</p>

    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    {project.attachment && (
      <a
        href={project.attachment}
        aria-label='live preview'
        className='link link--icon'
      >
        <AttachmentIcon />
      </a>
    )}
    {project.website && (
      <a
        href={project.website}
        aria-label='live preview'
        className='link link--icon'
      >
        <WebsiteIcon />
      </a>
    )}
  </div>
)

export default EducationContainer
