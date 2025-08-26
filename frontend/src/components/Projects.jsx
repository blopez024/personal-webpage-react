import chemistry from '../assets/chemistry.svg';
import data from '../assets/data.svg';
import email from '../assets/email.svg';
import weather from '../assets/weather.svg';

const Projects = () => {
  const projects = [
    {
      icon: email,
      title: 'b-mail',
      description:
        'Developed an email system as a Single Page Application (SPA) using the NERP Stack, optimized for both mobile and desktop viewing.',
    },
    {
      icon: data,
      title: 'predicting world happiness',
      description:
        "Developed a data science project for Ethics & Algorithms class, investigating the correlation between a country's economic indicators, life expectancy, and its overall happiness index.",
    },
    {
      icon: chemistry,
      title: 'irreducible representation calculator',
      description:
        'Collaborated with a team to develop a chemistry department-sponsored app to help inorganic chemistry students calculate a reducible form for a wide range of chemical point groups.',
    },
    {
      icon: weather,
      title: 'simple weather',
      description:
        'Built and designed a mobile app that displays weather information in a minimalist manner for a more reader-friendly experience.',
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2 className="title-section">projects</h2>
      <div className="all-projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.icon} alt={`${project.title} icon`} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Projects };
