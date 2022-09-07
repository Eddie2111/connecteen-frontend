import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import Banner from "../components/Banner";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3200/test");
    const data = await res.json();
    console.log(data)
    return {
        props: { Datas: data },
    };
};

const Test = ({Datas}) => {
    const data = "1";
    return (
        <>
        <Banner/>
        <Navbar2/>
        <div className="containerMod">
        <div className="grid grid-rows-2 md:grid-rows-6">
            <div className="row-span-1">
                <h1 className="text-4xl font-bold">{Datas.Status}</h1>
        </div>
        <div className="row-span-1">
                <h1 className="text-4xl font-bold">Test</h1>
        </div>
        <div className="row-span-1">
                <h1 className="text-4xl font-bold">Test</h1>
        </div>
        <div className="row-span-1">
                <h1 className="text-4xl font-bold">Test</h1>
        </div>
        </div>
        </div>
        </>
    )
}
export default Test;
