import dictionary from '../assets/dictionary.svg';
import review from '../assets/review.svg';
import budget from '../assets/budget.svg';
import data from '../assets/data.svg';

const Projects = () => {
  const projects = [
    {
      icon: dictionary,
      title: "b's dictionary",
      description:
        'A sleek, minimalist web app that helps users effortlessly expand their vocabulary with definitions, pronunciations, related images, and a random word generator.',
      link: 'https://github.com/blopez024/Bryans-Dictionary',
    },
    {
      icon: review,
      title: 'prisma book reviews',
      description:
        'Developed a full-stack book review web app with Express and Prisma ORM, featuring relational database modeling, and RESTful CRUD APIs.',
      link: 'https://github.com/blopez024/Prisma-Book-Reviews',
    },
    {
      icon: budget,
      title: 'pocket book',
      description:
        'Flutter mobile app for easy income and expense tracking, featuring a clean interface and secure, personalized finance management with Firebase integration. ',
      link: 'https://github.com/blopez024/pocket_book',
    },
    {
      icon: data,
      title: 'predicting world happiness',
      description:
        "Developed a data science project for Ethics & Algorithms class, investigating the correlation between a country's economic indicators, life expectancy, and its overall happiness index.",
      link: 'https://github.com/blopez024/predicting_world_happiness',
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2 className="title-section">projects</h2>
      <div className="all-projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project"
            onClick={() => window.open(project.link, '_blank')}
            style={{ cursor: 'pointer' }}
          >
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
