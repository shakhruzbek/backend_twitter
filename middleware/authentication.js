const jwt = require('jsonwebtoken');

exports.authentication = async (req, res, next) => {
	try {
		const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res.status("401").json({ message: "Token berilmadi" });
    }

    const check = jwt.verify(
      token,
      "MEN SENGA BIR SIR AYTAMAN, HECH KIM BILMASIN"
    );

		next();
	} catch (error) {
		return res.status(401).json({ message: error.message })
	}
}