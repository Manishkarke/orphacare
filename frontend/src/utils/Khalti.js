import KhaltiCheckout from "khalti-checkout-web";

const Khalti = async (amount,donationId) => {
    const config = {
        // replace the publicKey with yours
        "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
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

    var checkout = new KhaltiCheckout(config);
    checkout.show({ amount: amount * 100 });

    // const config = {
    //     amount: amount * 100, // amount in paisa
    //     productIdentity: "donation",
    //     productName: "Donation",
    //     productUrl: "http://example.com/donation",
    //     additionalData: {},
    //     checkoutUrl: "http://example.com/checkount",
    //     returnUrl: "http://example.com/return",
    //     // You can also provide `eventHandler` and `closedHandler` functions
    // };

    // try {
    //     const response = await khalti.checkout(config);
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }

    console.log(`User want to donate ${amount}`)
};

export default Khalti;
