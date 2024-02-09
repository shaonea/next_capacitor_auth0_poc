import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nextauthcap.app',
  appName: 'next_capacitor_auth0_poc',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  },
  bundledWebRuntime: true


};

export default config;
