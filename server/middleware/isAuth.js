import jwt from "jsonwebtoken";

export default async function isAuth(req, res, next) {
  try {
    if (!req.headers.authorization) {
      res
        .status(401)
        .json({ message: "unauthorized access", data: {}, success: false });
      return;
    }

    const bearerToken = req.headers.authorization; //extract bearerToken from auth header

    const token = getToken(bearerToken);

    if (!token) {
      res
        .status(400)
        .json({ message: "Invalid token", data: {}, success: false });
      return;
    }
    /**
     * verifying token
     * return object with userId as id
     */
    const verify = jwt.verify(token, process.env.JWT_SECRET);

    if (!verify) {
      res
        .status(400)
        .json({ message: "try to login again", data: {}, success: false });
      return;
    }

    const userId = verify.id;
    /**
     * attach userId to the request object
     */
    req.userId = userId;

    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "unauthorized access", data: {}, success: false });
    console.error("Error occurred while checking auth ", error);
  }
}

function getToken(bearerToken) {
  try {
    if (!bearerToken && bearerToken.startsWith("Bearer ")) return null;

    const token = bearerToken.split(" ")[1];
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
}
