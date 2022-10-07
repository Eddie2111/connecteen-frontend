import { NextApiResponse, NextApiRequest } from "next";
import cookie from "cookie";

export default(req: NextApiRequest, res: NextApiResponse) => {
    //const { username, password } = req.body;
    //const user = { username, password };

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", req.body.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            expires:new Date(0),
            sameSite: "strict",
            path: "/"
        })
    );

    res.status(200).json({ message: "Success" });
}
