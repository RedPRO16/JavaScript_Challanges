

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powersave = true
  }

  getTemperature() {
    return { temperature: this.temperature };
  }

  setPowerSavingMode(hot) {
    this.powersave = hot;
    return { powersavingmode: this.powersave }
  }

  reset() {
    this.temperature = 20
  }

  eneryUsage() {
    if (this.temperature < 18) {
      return 'low-usage'
    } else if (this.temperature <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }

  up() {
    if (this.temperature < 32 && this.powersave == false) {
      this.temperature += 1;
    } else if (this.temperature < 25) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  }
}

module.exports = Thermostat;