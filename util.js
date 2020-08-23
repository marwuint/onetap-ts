const readline = require("readline");
const fs = require("fs");
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const colors = {
    "red": '\x1b[91m',
    yellow: '\x1b[93m',
    green: '\x1b[92m',
    blue: '\x1b[94m',
    cyan: '\x1b[96m',
    reset: '\x1b[0m'
};

function readLine(prompt) {
    return new Promise((resolve, reject) => {
        try {
            rl.question(prompt, resolve);
        } catch {
            reject();
        }

    })
}
function colorPrint(color, text) {
    console.log(color + text.toString() + colors.reset);
}
async function ynQuestion(prompt) {
    while (true) {
        const text = await readLine(prompt);
        let c = text.toLowerCase()[0];
        if (c === 'y' || c === 'n') {
            return c === 'y';
        } else
            module.exports.colorPrint(colors.red, "Invalid choice: y or n only");
    }
}
function deleteFolder(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            let curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
                colorPrint(colors.blue, `[INFO] deleted ${curPath}`);
            }
        });
        fs.rmdirSync(path);
    }
}
function safeIO(f) {
    try {
        f();
    } catch{ }
}
function npm(command) {
    return new Promise((resolve, reject) => {
        exec(`npm ${command}`, (err, stdout, stderr) => {
            if (err) reject(err);
            resolve(stdout);
        });
    })
}
module.exports = {
    c: colors,
    colorPrint: colorPrint,
    readLine: readLine,
    ynQuestion: ynQuestion,
    deleteFolder: deleteFolder,
    npm: npm,
    sIO:safeIO
}

