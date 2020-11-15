import Button from "./button";
import Bowser from "bowser";
// Bowser is used to detect if device is on Android/Chrome (Deprecated ~ 15.11.20)

export default function Install({ children, compact }) {
  const supported = {
    chrome: {
      eventName: 'install: android',
      text: "Download now for Android",
      url:
        "https://github.com/Neilblaze/SecurePDF/blob/android_app/APP/securepdf.apk?raw=true"
    },
  };

  const browser = Bowser.getParser(window.navigator.userAgent);
  const details = supported[browser.getBrowser().name.toLowerCase()] || supported.chrome;
  const buttonUrl = details.url;
  const buttonLabel = compact ? "Install" : details.text;

  return (
    <Button
      compact={compact}
      href={buttonUrl}
      onClick={function() {
        window.plausible(details.eventName)
      }}
    >
      {buttonLabel}
    </Button>
  );
}
