import { connectRedis, getRedis } from "./config/redis.js";
import { sendOtpEmail } from "./services/emailService.js";


const emailWorker = async () => {
  try {
    await connectRedis();
    const client = getRedis();

    while (1) {
      const user = await client.brpop("sendMail", 0);

      const parsedUserData = JSON.parse(user[1]);

      const { email, code, purpose } = parsedUserData;
      const data = await sendOtpEmail(email, code, purpose);
    }
  } catch (error) {
    console.log("Error in email worker", error);
  }
};

emailWorker();
