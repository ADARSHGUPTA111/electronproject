const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const userAgent = require("./userAgent");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

// app.userAgentFallback = app.userAgentFallback.replace(
//   "Electron/" + process.versions.electron,
//   ""
// );

//to fix google sign-up and whatsapp updated version
app.userAgentFallback = userAgent();
// report.onExtendedProcessMetrics(app, { samplingInterval: 1000 })
// .subscribe(report => console.log(report));

function createWindow() {
  mainWindow = new BrowserWindow(
    { 
      minWidth: 900,
      minHeight: 680,
      webPreferences: { 
        nodeIntegration: false,
        webviewTag: true,
        nativeWindowOpen: true
      }
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
