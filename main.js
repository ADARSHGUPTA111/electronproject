//This needs to be added in order to run both react and electron together
const electron = require("electron");
const ipcMain = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const report = require('electron-process-reporter');

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");
const userAgent = require("./src/helpers/userAgent");

let mainWindow;


// app.userAgentFallback = app.userAgentFallback.replace(
//   "Electron/" + process.versions.electron,
//   ""
// );

//to fix google sign-up and whatsapp updated version
app.userAgentFallback = userAgent();
report.onExtendedProcessMetrics(app, { samplingInterval: 1000 })
.subscribe(report => console.log(report));

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      webviewTag: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`,
    {
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
    }
  );
  // this makes the browser in the app to a more latest version

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

// setInterval(function () {
//   logPerformanceMetrics();
// }, 10000);

// function logPerformanceMetrics() {
//   let total = { memory: 0, cpu: 0, maxMemory: 0 };
//   app.getAppMetrics().forEach(function (metric) {
//     total.memory += metric.memory.workingSetSize / 1024;
//     total.cpu += metric.cpu.percentCPUUsage * 100;
//     total.maxMemory += metric.memory.peakWorkingSetSize / 1024;
//   });
//   console.log(
//     app.getAppMetrics().length +
//       " processes || memory: " +
//       total.memory +
//       "MB || cpu:" +
//       total.cpu +
//       "% || maxMemory:" +
//       total.maxMemory +
//       "MB"
//   );
//   return total;
// }

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
