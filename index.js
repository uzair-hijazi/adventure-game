#! usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Kindly enter your name",
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "name",
        type: "list",
        message: "Kindly select your Opponent",
        choices: ["Orochi", "Iori_Yagami", "Rugal"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.name);
do {
    if (opponent.name == "Orochi") {
        // console.log(`${chalk.bold.green(p1.name)} V/S ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "Kindly mention your action",
                choices: ["attack", "drink potion", "Run for your life"],
            },
        ]);
        if (ask.options === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You lose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations ! You Won"));
                    process.exit();
                }
            }
        }
        if (ask.options === "drink potion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green("You drank health potion. Your energy is full"));
        }
        if (ask.options === "Run for your life") {
            console.log(chalk.bold.red.italic("You lose, Better luck next time"));
            process.exit();
        }
    }
    if (opponent.name === "Iori_Yagami") {
        // console.log(`${chalk.bold.green(p1.name)} V/S ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "Kindly mention your action",
                choices: ["attack", "drink potion", "Run for your life"],
            },
        ]);
        if (ask.options === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You lose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations ! You Won"));
                    process.exit();
                }
            }
        }
        if (ask.options === "drink potion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green("You drank health potion. Your energy is full"));
        }
        if (ask.options === "Run for your life") {
            console.log(chalk.bold.red.italic("You lose, Better luck next time"));
            process.exit();
        }
    }
    if (opponent.name === "Rugal") {
        // console.log(`${chalk.bold.green(p1.name)} V/S ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "Kindly mention your action",
                choices: ["attack", "drink potion", "Run for your life"],
            },
        ]);
        if (ask.options === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You lose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations ! You Won"));
                    process.exit();
                }
            }
        }
        if (ask.options === "drink potion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green("You drank health potion. Your energy is full"));
        }
        if (ask.options === "Run for your life") {
            console.log(chalk.bold.red.italic("You lose, Better luck next time"));
            process.exit();
        }
    }
} while (true);
