import { useEffect, useRef, useState } from "react";
import "./Camera.scss";
import MacWindow from "../MacWindow";

const Camera = ({ setWindowState, windowName, activeWindow, setActiveWindow }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraError, setCameraError] = useState("");
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error(error);
        setCameraError("Camera permission denied or camera unavailable.");
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const takePhoto = () => {
    const video = videoRef.current;

    if (!video || video.readyState < 2) return;

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    // Preview mirror effect ko captured image mein bhi maintain karna
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    ctx.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Flash effect
    setFlash(true);

    setTimeout(() => {
      setFlash(false);
    }, 150);

    // Canvas → PNG
    canvas.toBlob((blob) => {
      if (!blob) return;

      const imageUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = imageUrl;

      // File name
      const date = new Date();

      const fileName = `swarup-camera-${date
        .toISOString()
        .replace(/[:.]/g, "-")}.png`;

      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Memory cleanup
      URL.revokeObjectURL(imageUrl);
    }, "image/png");
  };

  return (
    <MacWindow
      setWindowState={setWindowState}
      windowName={windowName}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
    >
      <div className="camera-body">

        {cameraError ? (
          <p className="camera-error">{cameraError}</p>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="camera-video"
            />

            {/* Flash */}
            <div className={`camera-flash ${flash ? "active" : ""}`} />

            {/* Shutter */}
            <button
              className="camera-shutter"
              onClick={takePhoto}
              aria-label="Take photo"
            >
              <span></span>
            </button>
          </>
        )}

      </div>
    </MacWindow>
  );
};

export default Camera;