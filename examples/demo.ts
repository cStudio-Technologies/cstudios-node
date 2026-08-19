import { CStudioClient } from "../src";

const client = new CStudioClient({
  apiKey: process.env.CSTUDIOS_API_KEY || "YOUR_API_KEY",
});

async function run() {
  console.log("--- 1. Verify UPI ---");
  try {
    const upi = await client.verifyUpi("rahul.s@okhdfcbank");
    console.log(upi);
  } catch (err) {
    console.error(err);
  }

  console.log("\n--- 2. IFSC Lookup ---");
  try {
    const ifsc = await client.getIfscInfo("SBIN0000001");
    console.log(ifsc);
  } catch (err) {
    console.error(err);
  }

  console.log("\n--- 3. Pincode Lookup ---");
  try {
    const pin = await client.getPincodeInfo("682001");
    console.log(pin);
  } catch (err) {
    console.error(err);
  }
}

run();
