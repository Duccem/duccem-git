import inquirer from "inquirer";
import { emojis } from "./emojis.js";
import inquirerPrompt from "inquirer-autocomplete-prompt";
import maxLengthPrompt from "inquirer-maxlength-input-prompt";
import { execa } from "execa";

inquirer.registerPrompt("autocomplete", inquirerPrompt);
inquirer.registerPrompt("max-length", maxLengthPrompt);

const filter = (prompt = "") => {
  const filtered = emojis.filter((emoji) =>
    emoji.description.toLowerCase().includes(prompt.toLowerCase())
  );
  return filtered.map((emoji) => `${emoji.emoji} ${emoji.description}`);
};

inquirer
  .prompt([
    {
      type: "input",
      name: "project",
      message: "¿Cual es el código del proyecto?",
    },
    {
      type: "input",
      name: "number",
      message: "¿Cual es el numero de la tarea?",
    },
    {
      type: "autocomplete",
      name: "type",
      message: "¿Que tipo de adición es?",
      source: (answersSoFar, input) => filter(input),
    },
    {
      name: "title",
      type: "max-length",
      message: "Titulo del commit",
      maxLength: 30,
    },
    {
      type: "input",
      name: "description",
      message: "Descripción del commit",
    },
  ])
  .then(async (answers) => {
    const emoji = emojis.find((e) => answers.type.includes(e.description));
    console.log(emoji);
    const code = `${answers.project?.toUpperCase() || "TASK"}-${
      answers.number
    }`;
    let title = [code, emoji.code, answers.title];
    await execa("git", [
      "commit",
      "-m",
      title.join(" "),
      "-m",
      answers.description,
    ]);
  });
