/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1617897728130_1497';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    myAppName: 'todos',

    view: {
      defaultViewEngine: 'ejs',
      mapping: {
        '.tpl': 'ejs',
      },
    },

    sequelize: {
      dialect: 'sqlite', // support: mysql, mariadb, postgres, mssql
      storage: __dirname + '/database/todos.sqlite',
      define: {
        timestamps: true,
        underscored: false,
      }
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
