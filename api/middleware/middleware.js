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

module.exports = { checkWord, logQuote };
