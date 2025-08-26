const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'C#',
        'HTML',
        'CSS',
        'MUMPS',
      ],
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Node.js', 'Express.js'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma ORM', 'Sequelize ORM'],
    },
  ];

  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Skills };
