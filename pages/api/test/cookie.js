import axios from "axios";
import backend from "../backend";
const cookieTest = async ()=>{
    await fetch(backend+"cookies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "test",
        }),
    })
    .then((res) => console.log(res))
}
export default cookieTest;
 