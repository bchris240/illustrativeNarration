// Include required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} generated successfully!`);
  });
}

// Function to initialize app
function init() {
  // Prompt user for input using Inquirer
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content
      const readmeContent = `# ${answers.title}\n\n## Description\n${answers.description}\n\n## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [License](#license)\n\n## Installation\n${answers.installation}\n\n## Usage\n${answers.usage}\n\n## Contributing\n${answers.contributing}\n\n## License\nThis project is licensed under the ${answers.license} License - see the [LICENSE](LICENSE) file for details.\n\n## Questions\n- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})\n- Email: ${answers.email}\n`;

      // Write README.md file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
