import axios from "axios";
import { useState } from "react";

type StatusType = "idle" | "uploading" | "success" | "error";

function FileUpload() {

  const [file , setFile] = useState<File | null>(null);
  const [status , setStatus] = useState<StatusType>("idle");
  const [progress , setProgress] = useState<number>(0);

  const uploadFile = async () => {
    if(!file) return;
    setStatus("uploading");
    
    const formData = new FormData();
    formData.append("file" , file);

    try{
      await axios.post("http://localhost:3000/uploads" , formData , {
        headers : {
          "Content-Type" : "multipart/form-data",
        },
        onUploadProgress : (progressEvent) => {
          if(progressEvent.total){
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percent);
          }
        }
      });

      setStatus("success");
    }
    catch(error){
      console.log(error);
      setStatus("error");
    }
  }

  const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files?.[0]) setFile(event.target.files[0]);
  };

  const handleDrop = (event : React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if(droppedFile) setFile(droppedFile);
  }

  return (
    <div className="h-screen flex flex-col items-center gap-6 p-6 border-2 border-dashed rounded-lg mx-auto">
      <h2 className = 'text-emerald-500 text-4xl text-center mb-30 mt-10'>
        File Upload Component
      </h2>
      <div
        className="border border-white w-96 h-32 flex items-center justify-center bg-white/95 rounded-xl cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p className = 'text-lg font-light tracking-wide'>
            Drag & Drop your file here or click below
          </p>
        )}
      </div>

      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <label
        htmlFor="fileInput"
        className="cursor-pointer px-8 py-2 bg-gray-500 text-white/90 rounded-xl inline-block font-light"
      >
        Choose File
      </label>

      {file && 
      (
        <button
          className="px-8 py-2 bg-gray-500 text-white/90 font-light rounded-xl cursor-pointer"
          onClick={uploadFile}
          disabled={status === "uploading"}
        >
          {status === "uploading" ? "Uploading..." : "Upload File"}
        </button>
      )}

      {status === "uploading" && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {status === "success" && 
        <p className="text-green-600">
          ✅ File uploaded successfully!
        </p>}
      {status === "error" && 
        <p className="text-red-600">
          ❌ Upload failed. Try again.
        </p>
      }
    </div>
  );
}

export default FileUpload
