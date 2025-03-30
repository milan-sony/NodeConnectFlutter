import Users from "../model/userModel.js";

export const signup = (req, res) => {
    try {

        const { username, password } = req.body

        if (username == "" || password == "") {
            return res.status(400).json({
                status: 400,
                message: "Username and password is required"
            })
        }

        const newUser = {
            username: username,
            password: password
        }

        Users.signupUser(newUser, (error, result) => {
            if (error) {
                console.error("Error creating the user")
                return res.status(400).json({
                    status: 400,
                    message: "Error creating the user",
                    error: error.sqlMessage
                })
            }
            return res.status(200).json({
                status: 200,
                message: "User registerd successfully"
            })
        })

    } catch (error) {

    }
}