import KhaltiCheckout from "khalti-checkout-web";
import { updateDonationAmount } from "./axios";

const Khalti = async (donateAmount, id) => {
  const isSuccess = false;
  const config = {
    // replace the publicKey with yours
    publicKey: "test_public_key_b545a132548e48fea898fb580d489be2",
    productIdentity: "1234567890",
    productName: "Donation for OrphaCare",
    productUrl: "http://gameofthrones.wikia.com/wiki/Dragons",
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
    eventHandler: {
      async onSuccess(payload) {
        await updateDonationAmount(donateAmount);
        return isSuccess = true;
      },
      onError(error) {
        console.log(error);
      },
      onClose() {
        return isSuccess = false;
      },
    },
  };

  let checkout = new KhaltiCheckout(config);
  await checkout.show({ amount: donateAmount * 100 });

  console.log(`User want to donate ${donateAmount}`);
  return isSuccess;
};

export default Khalti;
