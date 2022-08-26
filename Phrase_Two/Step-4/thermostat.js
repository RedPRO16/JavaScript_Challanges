

class Thermostat {

  constructor(){
    this.temperature = 20;
    this.powersave = true
  }

  getTemperature() {
    return this.temperature;
  }

  setPowerSavingMode(hot) {
    this.powersave = hot;
  }

  reset(){
  this.temperature = 20
  }

  usage() {
    if (this.temperature < 18) {
      return 'less'

    } else if (this.temperature <= 25) {
      return 'normal'

    } else {
      return 'high'
    }
  }
  
  getUp() {
    if (this.temperature < 32 && this.powersave == false) {
      this.temperature += 1;
    } else if (this.temperature < 25) {
      this.temperature += 1;
    }
  }

  getDown() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  }
}
module.exports = Thermostat;