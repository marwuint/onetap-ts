let xpos = 100;
let xdir = true;
let ypos = 350;
let ydir = true;

function main(): void {
    Cheat.Print("This is transpiled .ts file");
    UI.AddLabel("POGCHAMP");
}

function pog(): void {
    Render.String(xpos, ypos, 0, "POGCHAMP", [255, 255, 255, 255], 20);
    
    xpos += xdir ? 1 : -1;
    ypos += ydir ? 1 : -1;

    if (xpos >= 500 || xpos <= 100) xdir = !xdir;
    if (ypos >= 500 || ypos <= 100) ydir = !ydir;
}   


main();
Cheat.RegisterCallback("Draw", "pog");