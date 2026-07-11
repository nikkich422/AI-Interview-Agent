import genToken from "../Config/Token.js";
import userModel from "../Models/user.model.js";

export const googleAuth = async (req, res) => {
    try {
        const {name, email} = req.body;
        let user = await userModel.findOne({email});

        if(!user){
            user = await userModel.create({name, email});
        }

        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        return res.status(200).json({message: "User logged in successfully", user, token});
    } catch (error) {
        return res.status(500).json({message: `Google auth error: ${error}`});
    }
}

export const logout = async (req, res) => {
    try {
        await res.clearCookie("token");
        return res.status(200).json({message: "User logged out successfully"});
    } catch (error) {
        return res.status(500).json({message: `Logout error: ${error}`});
    }
}