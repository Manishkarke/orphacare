import KhaltiCheckout from "khalti-checkout-web";
import { updateDonationAmount } from "./axios";

const Khalti = async (donateAmount, id) => {
    const config = {
        // replace the publicKey with yours
        "publicKey": "test_public_key_b545a132548e48fea898fb580d489be2",
        "productIdentity": "1234567890",
        "productName": "Donation for OrphaCare",
        "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
        "paymentPreference": [
            "KHALTI",
            "EBANKING",
            "MOBILE_BANKING",
            "CONNECT_IPS",
            "SCT",
        ],
        "eventHandler": {
            onSuccess(payload) {
                // updateDonationAmount(id, donateAmount);
                // hit merchant api for initiating verfication
                console.log(payload);
            },
            onError(error) {
                console.log(error);
            },
            onClose() {
                console.log('widget is closing');
            }
        }
    };

    let checkout = new KhaltiCheckout(config);
    await checkout.show({ amount: donateAmount * 100 });

    console.log(`User want to donate ${donateAmount}`)
};

export default Khalti;
