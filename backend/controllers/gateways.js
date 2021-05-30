const { gatewaysModel } = require('../models');

exports.getAllgateways = async (req, res, next) => {
  try {
    const gateways = await gatewaysModel.find();
    return res.status(200).json({ data: gateways });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.getGatewayById = async (req, res, json) => {
  const _id = req.params.id;
  try {
    const gateway = await gatewaysModel.findOne({ _id });
    return res.status(200).json({ data: gateway });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.updateGateway = async (req, res, json) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const updateResult = await gatewaysModel.updateOne({ _id }, body, {
      runValidators: true,
    });
    return res.status(204).json({ data: updateResult });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.deleteGatewayById = async (req, res, json) => {
  const _id = req.params.id;
  try {
    const deleteResult = await gatewaysModel.deleteOne({ _id });
    console.log(deleteResult);
    return res.status(204);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.addGateway = async (req, res, next) => {
  try {
    const {
      name,
      serial_number = undefined,
      ip_address,
      devices = [],
    } = req.body;
    const gateway = new gatewaysModel({
      name,
      serial_number,
      ip_address,
      devices,
    });
    const addedGateway = await gateway.save();
    return res.status(201).json({ data: addedGateway });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
