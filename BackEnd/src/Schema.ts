import mongoose, { Schema, Document } from "mongoose";

// 1️⃣ Define TypeScript interface for type safety
export interface IUser extends Document {
  name: string;
  userID: string;
  email: string;
  password: string;
  encryptPassword: string;
  token?: string;

}

// 2️⃣ Define Schema
const userSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  userID: { type: String, required: true, unique: true },
  email: {  type: String, required: true, unique: true },
  password: { type: String, required: true },
  encryptPassword: { type: String, required: false },
  token: { type: String  }
});
               

// 3️⃣ Create and export Model
export const User = mongoose.model<IUser>("userRegistrationee", userSchema, "userRegistrations");
// ("any model Name", userSchema, "vollection Name");"