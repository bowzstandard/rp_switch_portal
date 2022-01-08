import 'dotenv/config';

export default {
  expo: {
    name: 'frontend_entry',
    slug: 'frontend_entry',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    jsEngine: 'hermes',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: ['BACKEND_ENDPOINT'].reduce(
      (envs, key) => ({
        ...envs,
        [key]: process.env[key],
      }),
      {}
    ),
  },
};
