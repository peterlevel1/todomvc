// module.exports = app => {
//   if (app.config.env === 'local' || app.config.env === 'unittest') {
//     app.beforeStart(async () => {
//       await app.model.sync({
//         // force: true
//       });
//     });
//   }
// };

// app.js or agent.js
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {
    // Config, plugin files have been loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
    if (this.app.config.env === 'local' || this.app.config.env === 'unittest') {
      await this.app.model.sync();
    }
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;
