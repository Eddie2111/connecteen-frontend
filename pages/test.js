
import { useState } from "react";
export default function Test(props) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [drawer, setDrawer] = useState("20px");
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file", {
      method: "POST",
      body
    });
  };
  const works = ()=>{
    if (drawer === "20px") {
      setDrawer("200px");
    console.log("works");
    }
    if (drawer === "200px") {
      setDrawer("20px");
    console.log("works");
    }
  }
  const styled = {
    display: "flex",
    marginLeft:drawer,
    transition:"0.3 ease-in-out",
  }

  return (
    <div>
      <button className="styleButton" onClick={works}></button>
      <div style={styled}> xox</div>
      <div>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}
