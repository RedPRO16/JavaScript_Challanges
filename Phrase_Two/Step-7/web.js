const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat')
const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  res.send(JSON.stringify(thermostat.getTemperature()))
});

app.post('/up', (req, res) => {
  thermostat.up()
  res.send('Increase the thermostat')
});

app.post('/down', (req, res) => {
  thermostat.down()
  res.send('Decrease the thermostat')
});

app.post('/powersave', (req, res) => {
  bool = !thermostat.powersave
  res.send(JSON.stringify(thermostat.setPowerSavingMode(bool)))
});

app.delete('/temperature', (req, res) => {
  thermostat.reset()
  res.send('Reset thermostat to 20')
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);