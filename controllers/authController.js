const { registerUser } = require("../services/authService");

function register(req, res) {
    const { email, password } = req.body;

    const result = registerUser(email, password);

    if (!result.ok) {
        return res.status(result.status).json({
            ok: false,
            error: { message: result.message },
        });
    }

    return res.json({
        ok: true,
        data: result.data,
    });
}
