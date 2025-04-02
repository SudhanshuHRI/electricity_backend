import mongoose from "mongoose";

const ADMIN_MONGO_URI = process.env.ADMIN_DATABASE_URL // Replace with your MongoDB URI
const AUTH_MONGO_URI = process.env.AUTH_DATABASE_URL


// const connectAdminDB = async () => {
//     try {
//         await mongoose.connect(ADMIN_MONGO_URI);
//         console.log("✅ Connected to Admin Database!");
//     } catch (error) {
//         console.error("❌ Admin MongoDB Connection Error:", error);
//         process.exit(1);
//     }
// };
// const connectAuthDB = async () => {
//     try {
//         await mongoose.connect(AUTH_MONGO_URI);
//         console.log("✅ Connected to Auth Database!");
//     } catch (error) {
//         console.error("❌ Auth MongoDB Connection Error:", error);
//         process.exit(1);
//     }
// };

const adminDB = mongoose.createConnection(ADMIN_MONGO_URI)
const authDB = mongoose.createConnection(AUTH_MONGO_URI)


adminDB.on("connected",()=>console.log("✅ Admin Database Connected!"))
adminDB.on("error",(err)=>console.error("❌ Admin DB Connection Error:", err))

authDB.on("connected",()=>console.log("✅ Auth Database Connected!"))
authDB.on("error",(err)=>console.error("❌ Auth DB Connection Error:", err))

process.on("SIGINT", async () => {
    await adminDB.close();
    await authDB.close();
    console.log("❌ Databases Disconnected");
    process.exit(0);
  });
  
export {
    adminDB,
    authDB
};
