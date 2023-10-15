import inquirer from 'inquirer';

export default async function App() {
  console.log('Welcome to the Calculator App!');
  console.log('Developed by Tuyyab Bukhari\n');

  const questions = [
    { type: 'input', name: 'number1', message: 'Enter your first number:' },
    { type: 'input', name: 'number2', message: 'Enter your second number:' },
    {
      type: 'list',
      name: 'operation',
      message: 'Select an operation:',
      choices: ['Divide', 'Multiply', 'Modulus', 'Addition', 'Subtraction'],
    },
  ];

  const answers = await inquirer.prompt(questions);
  const number1 = parseFloat(answers.number1);
  const number2 = parseFloat(answers.number2);

  let result: number;

  switch (answers.operation) {
    case 'Divide':
      if (number2 === 0) {
        console.log('Error: Division by zero');
        return;
      }
      result = number1 / number2;
      break;

    case 'Multiply':
      result = number1 * number2;
      break;

    case 'Modulus':
      result = number1 % number2;
      break;

    case 'Addition':
      result = number1 + number2;
      break;

    case 'Subtraction':
      result = number1 - number2;
      break;

    default:
      console.log('Invalid operation');
      return;
  }

  console.log(`Result: ${result}`);
}
