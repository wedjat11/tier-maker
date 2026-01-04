import { useState } from "react";

export default function AddImg() {
  const [images, setImages] = useState<File[]>([]);
  return (
    <div className="flex flex-col gap-4">
      <p>Add images to your tier list</p>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setImages([...images, ...e.target.files])}
      />
      <div>
        <p>Uploaded Images:</p>
        <ul className="flex gap-3">
          {images.map((image, index) => (
            <li key={index}>
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="h-20 w-20"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
