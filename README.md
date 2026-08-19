# cstudios-node ⚡

[![npm version](https://img.shields.io/badge/npm-v1.0.0-CB3837.svg)](https://www.npmjs.com/package/cstudios)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-cstudio.sbs-3A4ED8)](https://www.cstudio.sbs)

Official Node.js & TypeScript SDK for the **[cStudios Verification & Data API Platform](https://www.cstudio.sbs)**.

Access 15+ real-time Indian verification APIs with zero dependencies and complete TypeScript autocompletion.

---

## 📦 Installation

```bash
npm install cstudios
# or
yarn add cstudios
# or
pnpm add cstudios
```

---

## 🚀 Quick Start

```typescript
import { CStudioClient } from "cstudios";

// Initialize client with your API key
const client = new CStudioClient({
  apiKey: "YOUR_API_KEY",
});

// 1. Verify a UPI ID
const upi = await client.verifyUpi("rahul.s@okhdfcbank");
console.log(upi);

// 2. Get RTO Vehicle Registration Info
const vehicle = await client.getRtoVehicleInfo("DL10CE1234");
console.log(vehicle);

// 3. Lookup Bank Branch Details by IFSC
const bank = await client.getIfscInfo("SBIN0000001");
console.log(bank);
```

---

## 📋 Available API Methods

### 💳 Finance & KYC
- `client.verifyUpi(upiId)` — Validate UPI VPA and get account holder name
- `client.lookupUpiByNumber(mobileNumber)` — Discover all linked UPI handles for a phone number
- `client.getIfscInfo(ifsc)` — Get bank name, branch address, MICR, RTGS/NEFT/IMPS support
- `client.gstinToPan(gstin)` — Extract PAN and map all multi-state GST registrations
- `client.panToGstin(pan)` — Find every GST registration linked to an Indian PAN

### 🚗 Vehicle & Transportation
- `client.getRtoVehicleInfo(vehicleNumber)` — Complete registration, fitness, insurance & PUCC
- `client.getVehicleDetailsPro(vehicleNumber)` — Full owner, hypothecation/financier & blacklist status
- `client.getFastagInfo(vehicleNumber)` — Check FASTag active status, issuing bank & balance
- `client.getChallanDetails(vehicleNumber)` — Real-time traffic challan violation history & fines

### 📍 Location & Intelligence
- `client.getPincodeInfo(pincode)` — Post office names, district, state & delivery details
- `client.getPhoneInfo(phoneNumber)` — Telecom carrier, circle & location details
- `client.getImeiInfo(imei)` — Brand, model, chipset & specifications from IMEI
- `client.getEmailInfo(email)` — Deliverability, disposable email check & breach history

---

## 🔑 Getting an API Key

You can get a free API key with instant activation:
1. Visit **[https://www.cstudio.sbs/pricing](https://www.cstudio.sbs/pricing)**
2. Message us on **[WhatsApp](https://wa.me/message/OFW3YTE333WOA1)**
3. Or email **contact@cstudio.sbs**

---

## 📄 License

This project is licensed under the MIT License.
