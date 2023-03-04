// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  instrumentationKey: '08f43dc8-f519-44ee-bf58-a9ad039629ca',
  applicationName: 'jabilService',
  i18nDomainUri: '/language',
  i18nApiKey: 'ZzLWTI0r9R78G0H5ZoXIKaGdYIBwPAcNaFUGkGSF',
  websocket: 'ws://cnhuam0itstg83:55001',
  baseUrl: 'http://cnhuam0itstg83:55001',

  proxy: {
    temperatureCollection: 'jabil-temperature-api',
    remoteControl: 'jabil-remote-api',
    teslaOutputTracking: 'jabil-tesla-api',
    mfgTraining: 'jabil-mfg-api',
    gateway: 'gateway',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
