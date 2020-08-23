const fs = require('fs');
const cd = process.cwd();
const util = require('./util');
const { ynQuestion, colorPrint, npm } = require('./util');


async function installer() {
    if (!cd.endsWith('ot')) {
        util.colorPrint(util.c.red, '[ERROR] Run this from the ot folder!');
        return;
    }

    util.colorPrint(util.c.green, "[OK] Found ot");

    if (fs.existsSync('./onetap-ts')) {
        util.colorPrint(util.c.yellow, '[WARN] onetap-ts already installed, do you wanna reinstall? [y/n]')
        if (await ynQuestion('')) {
            util.colorPrint(util.c.yellow, '[WARN] Do you want to delete your .ts scripts ? [y/n]');
            if (await ynQuestion('')) {
                util.deleteFolder('./onetap-ts');
                installFiles();
            } else {
                util.sIO(()=>fs.unlinkSync('./onetap-ts/package.json'));
                util.sIO(()=>fs.unlinkSync('./onetap-ts/tsconfig.json'));
                util.sIO(()=>fs.unlinkSync('./onetap-ts/ot.d.ts'));
                installFiles(false);
            }
        } else {
            util.colorPrint(util.c.blue, '[INFO] Nothing to do... Exiting...')
            return;
        }
        
    } else {
        installFiles();
    }
    await installTs();
    return
}



async function installFiles(createFolder) {
    if (createFolder === undefined) {
        fs.mkdirSync('./onetap-ts');
        util.colorPrint(util.c.green, "[OK] Created folder");
    } else {
        if (createFolder) {
            fs.mkdirSync('./onetap-ts');
            util.colorPrint(util.c.green, "[OK] Created folder");
        }
    }
    const sourceDir = `${__dirname}\\files`;
    const destDir = './onetap-ts';

    fs.readdirSync(sourceDir).forEach(file => {
        fs.copyFileSync(`${sourceDir}\\${file}`,`${destDir}\\${file}`);
        colorPrint(util.c.blue, `[INFO] Wrote ${file}`);
    });
}

async function main() {
    await installer();
    process.exit(0);
}

async function installTs(){
    util.colorPrint(util.c.blue,'[INFO] Installing typescript');
    await npm('i typescript -g');
    util.colorPrint(util.c.blue,'[INFO] Typescript is (probably) installed');
}

main();