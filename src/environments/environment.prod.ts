export const environment = {
  production: true,
  instrumentationKey: '08f43dc8-f519-44ee-bf58-a9ad039629ca',
  applicationName: 'jabilService',
  i18nDomainUri: '/language',
  i18nApiKey: 'ZzLWTI0r9R78G0H5ZoXIKaGdYIBwPAcNaFUGkGSF',
  websocket: 'wss://jabilbus.jblapps.com',
  baseUrl: 'https://jabilbus.jblapps.com',

  proxy: {
    temperatureCollection: 'jabil-temperature-api/',
    remoteControl: 'jabil-remote-api/',
    teslaOutputTracking: 'jabil-tesla-api',
    mfgTraining: 'jabil-mfg-api',
    gateway: 'gateway',
  },
};
