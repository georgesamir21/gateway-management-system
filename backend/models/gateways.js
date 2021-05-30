const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');
module.exports = () => {
  const gatewaySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    serial_number: {
      type: String,
      default: uuidv4,
      unique: true,
      required: true
    },
    ip_address: {
      type: String,
      required: true
    },
    devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }]
  });

  const Gateway = model('Gateway', gatewaySchema);
  return Gateway;
}