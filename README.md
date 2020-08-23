# Onetap-ts [beta]
Typescript support for onetap.com js
 
## Instalation

* [Install node](https://nodejs.org/en/)

* Install typescript 
```
npm install -g typescript
```

* Run onetap-ts installer

```bash
# this must be run from the 'ot' folder
# [CSGO INSTALL LOCATION]\Counter-Strike Global Offensive\ot
npx onetap-ts init
```
## Usage
If you use VSCode, you should automatically get better autocomplete.
For other editors you might need to install a TS language server.

After installation you can start adding scripts to `ot/onetap-ts`.

To transpile scripts once run:
```bash
npm run build
```
This generate ES5 .js into `ot/scripts`

For development you can use:
```bash
npm start
```
This does the same as build, but automatically updates on save.

## Issues
* [Pls report issues](https://github.com/marwuint/onetap-ts/issues) (also accepting feature requests)


[xd](https://www.youtube.com/watch?v=BnwbOcX86qI)