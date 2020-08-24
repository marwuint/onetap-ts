const fs = require('fs');
const cd = process.cwd();
const { ynQuestion, deleteFolder, colorPrint, npm, sIO, colors } = require('./util');
const { green, red, yellow, blue } = colors;

const sourceDir = `${__dirname}/files`;
const destDir = './onetap-ts';

async function installer() {
    if (!cd.endsWith('ot')) return  colorPrint(red, '[ERROR] Run this from the ot folder!');

    colorPrint(green, "[OK] Found ot");

    if (fs.existsSync('./onetap-ts')) {
        colorPrint(yellow, '[WARN] onetap-ts already installed, do you wanna reinstall? [y/n]');
        if (!await ynQuestion('')) return colorPrint(blue, '[INFO] Nothing to do... Exiting...');

        colorPrint(yellow, '[WARN] Do you want to delete your .ts scripts ? [y/n]');
        await ynQuestion('') ? deleteFolder('./onetap-ts') : fs.readdirSync(sourceDir)
            .forEach(file => sIO(() => file === 'example.ts' ? '' : fs.unlinkSync(`./onetap-ts/${file}`)));
    }
    
    installFiles()
    await installTs()
    process.exit(0);
}



function installFiles() {
    if (!fs.existsSync('./onetap-ts')) fs.mkdirSync('./onetap-ts') && colorPrint(green, "[OK] Created folder");
    
    const files = fs.readdirSync(sourceDir);
    
    files.forEach(file => {
        fs.copyFileSync(`${sourceDir}/${file}`, `${destDir}/${file}`);
        colorPrint(blue, `[INFO] Wrote ${file}`);
    })
}

async function installTs() {
    if (process.platform !== 'win32') return;
    colorPrint(blue, '[INFO] Installing typescript');
    await npm('i typescript -g');
    colorPrint(blue,'[INFO] Typescript is (probably) installed');
}

installer();