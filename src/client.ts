export interface CStudioConfig {
  apiKey: string;
  baseUrl?: string;
}

export class CStudioClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: CStudioConfig) {
    if (!config.apiKey) {
      throw new Error("An apiKey is required to initialize CStudioClient.");
    }
    this.apiKey = config.apiKey;
    this.baseUrl = (config.baseUrl || "https://api.cstudio.sbs").replace(/\/+$/, "");
  }

  private async request<T = any>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "X-API-Key": this.apiKey,
        "Content-Type": "application/json",
        "User-Agent": "cstudios-node/1.0.0",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`cStudios API Error [${response.status}]: ${errorText}`);
    }

    return (await response.json()) as T;
  }

  // --- Finance & KYC APIs ---

  /** Verify any Indian UPI VPA & get account holder details. */
  async verifyUpi(upiId: string) {
    return this.request("/v1/upi/verify", { upi_id: upiId });
  }

  /** Discover all active UPI handles linked to an Indian mobile number. */
  async lookupUpiByNumber(mobileNumber: string) {
    return this.request("/v1/upi/lookup-by-number", { mobile_number: mobileNumber });
  }

  /** Get bank branch details, MICR code, and payment capabilities from an IFSC code. */
  async getIfscInfo(ifsc: string) {
    return this.request("/v1/ifsc/info", { ifsc });
  }

  /** Extract PAN and discover all multi-state GST registrations from a GSTIN. */
  async gstinToPan(gstin: string) {
    return this.request("/v1/gstin/to-pan", { gstin });
  }

  /** Find all active and inactive GST registrations linked to an Indian PAN. */
  async panToGstin(pan: string) {
    return this.request("/v1/pan/to-gstin", { pan });
  }

  // --- Vehicle & Transportation APIs ---

  /** Get comprehensive RTO vehicle registration data (insurance, fitness, PUCC). */
  async getRtoVehicleInfo(vehicleNumber: string) {
    return this.request("/v1/rto/vehicle-info", { vehicle_number: vehicleNumber });
  }

  /** Enterprise-grade RC verification with owner, insurance, and financier details. */
  async getVehicleDetailsPro(vehicleNumber: string) {
    return this.request("/v1/vehicle/details-pro", { vehicle_number: vehicleNumber });
  }

  /** Check FASTag active status, issuing bank, and vehicle owner details. */
  async getFastagInfo(vehicleNumber: string) {
    return this.request("/v1/vehicle/fastag", { vehicle_number: vehicleNumber });
  }

  /** Get real-time traffic challan violation history and pending amounts. */
  async getChallanDetails(vehicleNumber: string) {
    return this.request("/v1/rto/challan", { vehicle_number: vehicleNumber });
  }

  // --- Location & Intelligence APIs ---

  /** Get post office names, district, state, and location data from a 6-digit pincode. */
  async getPincodeInfo(pincode: string) {
    return this.request("/v1/pincode/info", { pincode });
  }

  /** Get telecom carrier, state circle, and location details for an Indian mobile number. */
  async getPhoneInfo(phoneNumber: string) {
    return this.request("/v1/phone/info", { phone_number: phoneNumber });
  }

  /** Get complete device specifications, brand, and model details from an IMEI. */
  async getImeiInfo(imei: string) {
    return this.request("/v1/imei/info", { imei });
  }

  /** Validate email deliverability, disposable detection, and breach history. */
  async getEmailInfo(email: string) {
    return this.request("/v1/email/info", { email });
  }
}
