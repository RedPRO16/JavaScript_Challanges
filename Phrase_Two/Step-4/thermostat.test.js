// const { describe, it } = require("node:test");
// const { hasUncaughtExceptionCaptureCallback } = require("process");

// const { it } = require("node:test");

const Thermostat = required('./thermostat.js')


describe('thermostat working system', () => {

  it('termostat default mode is 20 degree', () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('up to 22 degree', () => {

    const thermostat = new Thermostat;
    thermostat.getUp()
    thermostat.getUp()
    expect(thermostat.getTemperature()).toBe(22);
  });

  it('down to 21 degree', () => {

    const thermostat = new Thermostat;
    thermostat.getUp()
    thermostat.getUp()
    thermostat.getDown()
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('max degree is 25 power save mode on', () => {

    const thermostat = new Thermostat;
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.getUp();
    }
    expect(thermostat.getTemperature()).toBe(25);
    expect(thermostat.usage()).toBe('normal');
  });

  it('low degree is 10 power save mode off', () => {

    const thermostat = new Thermostat;
    for (let i = 0 ; i < 12 ; i++) {
      thermostat.getDown();
    }
    expect(thermostat.getTemperature()).toBe(10);
    expect(thermostat.usage()).toBe('less');
  });

  it('get 30 degrees with power save mode off', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false)
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(26);
    expect(thermostat.Usage()).toBe('high')
  });

  it('reset to 20 degrees', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false)
    for (let i = 0; i < 6; i++) {
      thermostat.getUp();
    }
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20);
  });



});







// const thermostat = new Thermostat();

// thermostat.getTemperature(); // should return 20

// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22

// thermostat.down();
// thermostat.getTemperature(); // should now return 21

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20