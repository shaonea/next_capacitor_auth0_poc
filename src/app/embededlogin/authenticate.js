import { createAuth0Client } from '@auth0/auth0-spa-js';

export default async function authenticate() {

    const auth0 = await createAuth0Client({
        domain: "https://energyaspects-dev.eu.auth0.com",
        clientId: "WnCdwX3oAZYjCOtHIxP9n09Xr3N88jJ3",
        // authorizationParams: {
        //   redirect_uri: '<MY_CALLBACK_URL>'
        // }
      });

    console.log(await auth0.loginWithPopup())
    // await auth0.loginWithRedirect();
    await auth0.loginWithPopup();
}
