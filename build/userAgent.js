const os = require("os");
const macosVersion = require("macos-version");

let { platform } = process;
if (process.env.OS_PLATFORM) {
  platform = process.env.OS_PLATFORM;
}

const isMac = platform === "darwin";
const isWindows = platform === "win32";
const isLinux = platform === "linux";

function macOS() {
  const version = macosVersion();

  return `Macintosh; Intel Mac OS X ${version.replace(/\./g, "_")}`;
}

function windows() {
  const version = os.release();
  const [majorVersion, minorVersion] = version.split(".");
  return `Windows NT ${majorVersion}.${minorVersion}; Win64; x64`;
}

function linux() {
  return "X11; Ubuntu; Linux x86_64";
}

function userAgent(removeChromeVersion = false) {
  let platformString = "";

  if (isMac) {
    platformString = macOS();
  } else if (isWindows) {
    platformString = windows();
  } else if (isLinux) {
    platformString = linux();
  }

  // TODO: Update AppleWebKit and Safari version after electron update
  return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36`;
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) old-airport-include/1.0.0 Chrome Electron/7.1.7 Safari/537.36
}

module.exports = userAgent;
