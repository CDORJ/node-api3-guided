const Hubs = require("../hubs/hubs-model.js");

const checkWord = (req, res, next) => {
  if (req.query.word && req.query.word == "turd") {
    res.json(`You can't proceed! ${req.query.word} is a bad word`);
  } else {
    next();
  }
};
const logQuote = (coin) => (req, res, next) => {
  if (
    coin === "penny" ||
    coin === "nickle" ||
    coin === "dime" ||
    coin === "quarter"
  ) {
    console.log(`A ${coin} saved is a ${coin} not enjoyed (:`);
    next();
  } else {
    console.log(`${coin} is not a valid coin`);
    next();
  }
};

const checkHubId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hub = await Hubs.findById(id);
    if (!hub) {
      res.status(400).json({ message: `No hub with id: ${id} exists` });
    } else {
      req.hub = hub;
      next();
    }
  } catch (e) {
    res.status(500).json(`Server error: ${e.message}`);
  }
};

const checkMessage = (req, res, next) => {
    if (!req.body.text || !req.body.sender) {
        res.status(400).json("text and sender required")
    } else {
        next();
    }
}

module.exports = { checkWord, logQuote, checkHubId, checkMessage };
