// import { google } from 'googleapis';

// type Environment = "TEST" | "PRODUCTION";

// interface GooglePayConfig {
//   environment: Environment;
//   apiVersion: number;
//   apiVersionMinor: number;
//   allowedPaymentMethods: google.payments.api.PaymentMethod[];
//   merchantInfo: {
//     merchantId?: string;
//     merchantName: string;
//   };
//   transactionInfo: {
//     totalPriceStatus: string;
//     totalPrice: string;
//     currencyCode: string;
//   };
// }

// export class GooglePayAPI {
//   private paymentsClient: google.payments.api.PaymentsClient;

//   constructor(environment: Environment) {
//     // Initialize the Google Pay API PaymentsClient
//     this.paymentsClient = new google.payments.api.PaymentsClient({ environment });
//   }

//   public async isReadyToPay(config: Partial<google.payments.api.IsReadyToPayRequest>) {
//     try {
//       return await this.paymentsClient.isReadyToPay(config);
//     } catch (error) {
//       console.error("Error checking readiness for Google Pay:", error);
//       throw error;
//     }
//   }

//   public createButton(config: google.payments.api.ButtonOptions): HTMLElement {
//     return this.paymentsClient.createButton(config);
//   }

//   public async loadPaymentData(paymentDataRequest: google.payments.api.PaymentDataRequest) {
//     try {
//       return await this.paymentsClient.loadPaymentData(paymentDataRequest);
//     } catch (error) {
//       console.error("Error loading payment data:", error);
//       throw error;
//     }
//   }

//   public static createPaymentDataRequest(config: GooglePayConfig): google.payments.api.PaymentDataRequest {
//     return {
//       apiVersion: config.apiVersion,
//       apiVersionMinor: config.apiVersionMinor,
//       allowedPaymentMethods: config.allowedPaymentMethods,
//       merchantInfo: config.merchantInfo,
//       transactionInfo: config.transactionInfo,
//     };
//   }
// }

// // Example Usage
// if (typeof google !== "undefined" && google.payments) {
//   const googlePayAPI = new GooglePayAPI("TEST");

//   const googlePayConfig: GooglePayConfig = {
//     environment: "TEST",
//     apiVersion: 2,
//     apiVersionMinor: 0,
//     allowedPaymentMethods: [
//       {
//         type: "CARD",
//         parameters: {
//           allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//           allowedCardNetworks: ["MASTERCARD", "VISA"],
//         },
//         tokenizationSpecification: {
//           type: "PAYMENT_GATEWAY",
//           parameters: {
//             gateway: "example", // Replace with your gateway
//             gatewayMerchantId: "exampleMerchantId",
//           },
//         },
//       },
//     ],
//     merchantInfo: {
//       merchantName: "Your Merchant Name",
//     },
//     transactionInfo: {
//       totalPriceStatus: "FINAL",
//       totalPrice: "10.00",
//       currencyCode: "USD",
//     },
//   };

//   // Check readiness for Google Pay
//   googlePayAPI.isReadyToPay(googlePayConfig).then((result) => {
//     if (result.result) {
//       console.log("Google Pay is ready.");
//     } else {
//       console.warn("Google Pay is not available.");
//     }
//   });
// } else {
//   console.error("Google Pay API is not loaded.");
// }
