import { NextApiResponse, NextApiRequest } from "next";
import cookie from "cookie";

export default(req: NextApiRequest, res: NextApiResponse) => {
    //const { username, password } = req.body;
    //const user = { username, password };

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 3600*24*30,
            path: "/"
        })
    );

    res.status(200).json({ message: "Success" });
}
