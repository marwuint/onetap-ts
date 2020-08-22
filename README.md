Typescript typings for global onetap.su scripting module/library
## Usage

* [Install node](https://nodejs.org/en/)

* Install typescript
```bash
npm install -g typescript
```

* Install type declarations
```bash
npm install onetap-ts
```

* Create a tsconfig.json file with these settings
```json
{   
    "exclude": [ "node_modules" ],
    "compilerOptions": {
        "target": "ES5",
        "lib": ["es5"],
        "module": "CommonJS",
        "esModuleInterop": true,
        "allowJs": true,
        "checkJs": true,
        "types": ["onetap-ts"],
        
        "strict": true,
        "alwaysStrict": true,

        "noImplicitAny": true,
        "strictFunctionTypes": true,
        "forceConsistentCasingInFileNames": true,
    }
}
```

## Contribute

* [Submit bugs](https://github.com/marwuint/onetap-ts/issues)