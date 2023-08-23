const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

// Response for newer version of api ie:V2
const infoV2 = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "coming from newer version API",
    error: {},
    data: {},
  });
};

module.exports = {
  infov1: info,
  infov2: infoV2,
};
