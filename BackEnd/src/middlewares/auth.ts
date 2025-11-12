import jwt from "jsonwebtoken";
require("dotenv").config();



// ✅ Middleware to protect routes
export function auth1(req: any, res: any, next: any) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied: No token provided" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
}



// ✅ Middleware to protect routes
 function auth(req: any, res: any, next: any) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied: No token provided" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
}
export default auth;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbGl0QGV4YW1wbGUxNC5jb20iLCJpYXQiOjE3NjI5NDk4MTcsImV4cCI6MTc2Mjk1MzQxN30.JrImz-hIr_U8ImhFdQgVyJ8dvkikUzY2Ip0UtHnpubI