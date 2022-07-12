import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || process.env.port,
  smsAPI: "https://sms.arkesel.com/api/v2/sms/send",
  smsAPI_Key: "YXNqUHJVV2tqYXZDUmRrYmhkeW8",
};
