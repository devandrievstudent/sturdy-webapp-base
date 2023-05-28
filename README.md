# ⚡ Sturdy web app base
## Initial setup
This repository comes without the `node_modules` folder, so before using this library and/or building please run `/tools/download-legacy-deps.bat` or use 

```npm i --legacy-peer-deps``` 

to install the required dependencies.
## Usage
The web app base uses `@material/web` library, so to use the Material Design components follow the guide at the [Material Web's repository.](https://github.com/material-components/material-web/tree/main/docs/components)
## Build (new!)
Use `/tools/build.bat` to build your project by a double click  or set `/tools/build-ide.bat` as the build script in your respective IDE. For **JetBrains Webstorm** go to `Run > Edit Configurations > New Configuration > Shell Script` and in **Script path** select `/tools/build-ide.bat`. Now you can build your project with IDE run and debug buttons.

After the build has finished, you can find the built files in the `/build` directory.

**Important note!** Rollup will not add included images, fonts etc. to the `/build/` directory unless you include them in `rollup.config.js` as follows:
```javascript
export default {
    // ...
    plugins: [
        // ...
        copy({
            patterns: [
                'images/**/*',
                'fonts/*',
                // etc..
            ]
        })
    ]
}
```
Use `*` to for files and `**` for directories.
## Build (manual)
Once you are finished with your app or changes to it, you can then build your application by running `rollup -c` or `npx rollup -c` if you do not allow execution of external PowerShell scripts.