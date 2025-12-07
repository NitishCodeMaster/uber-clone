const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistTokenSchema = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email });

    if (isUserExist) {
        return res.status(409).json({ error: "User with this email already exists" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'none',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
        return res.status(401).json({ error: "User not found. Please check your email." });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ error: "Incorrect password. Please try again." });
    }
    const token = user.generateAuthToken();
    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });
    res.status(200).json({ user, token });
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    await blacklistTokenSchema.create({ token });
    res.status(200).json({ message: "Logged out successfully" });
}