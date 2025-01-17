export default function Mainlogo({src, width}) {
  return (
    <>
      <style jsx>
        {`
          .mainlogo {
            text-align: center;
            margin-top: 2rem;
          }
        `}
      </style>
      <div className="mainlogo">
      <a href="https://github.com/Neilblaze/SecurePDF/blob/android_app/APP/securepdf.apk?raw=true">
        <img src={src} width={width} />
      </a>
      </div>
    </>
  );
}
