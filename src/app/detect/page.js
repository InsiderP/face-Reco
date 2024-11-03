"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@nextui-org/react';
import { Card, CardBody } from "@nextui-org/react";
import { Alert } from "@nextui-org/react";
import { MdLinkedCamera } from "react-icons/md";
const WebcamCapture = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const canvasRef = useRef(null);
  const startWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      videoRef.current.srcObject = mediaStream;
    } catch (err) {
      setError("Failed to access webcam. Please ensure you've granted camera permissions.");
      console.error("Error accessing webcam:", err);
    }
  };

  const stopWebcam = () => {
    stream?.getTracks().forEach(track => track.stop());
    setStream(null);
    videoRef.current.srcObject = null;
    setCapturedImage(null);
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    if (videoRef.current && canvas) {
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      setCapturedImage(canvas.toDataURL('image/jpeg'));
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Card className='w-[600px] bg-white'>
        <CardBody>
          <div className="relative ml-8 w-full max-w-lg aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video ref={videoRef} autoPlay playsInline className={`w-full h-full object-cover ${!stream ? 'hidden' : ''}`} />
            {!stream && !error && (
              <div className="absolute inset-0 flex items-center justify-center">
                <MdLinkedCamera className='w-10 h-12'/>
              </div>
            )}
          </div>

          <canvas ref={canvasRef} className="hidden" />

          {error && <Alert className="mt-2" color="danger">{error}</Alert>}
          {capturedImage && <img src={capturedImage} alt="Captured" className="max-w-lg rounded-lg shadow-lg mt-4" />}

          <div className="flex gap-4 mt-4 justify-center">
            {!stream ? (
              <Button color="primary" onClick={startWebcam}>Start Camera</Button>
            ) : (
              <>
                <Button color="secondary" onClick={capturePhoto}>Capture Photo</Button>
                <Button color="danger" onClick={stopWebcam}>Stop Camera</Button>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default WebcamCapture;