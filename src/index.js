const logic = require('./module_logic');

module.exports = {
  start: () => {
    console.log("🟢 OpenMod Module Started");
    logic.run();
  }
};