
// SRC: https://www.emqx.com/en/blog/mqtt-js-tutorial

const mqtt = require('mqtt')
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  clientId: 'emqx_test',
  username: '',
  password: '',
}
const client  = mqtt.connect('mqtt://localhost:1883', options)
client.on('connect', function () {
  console.log('Connected')
  client.subscribe('test', function (err) {
    if (!err) {
      client.publish('test', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
