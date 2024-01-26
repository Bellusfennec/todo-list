function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateImage(name) {
  return {
    image: `https://api.dicebear.com/7.x/initials/svg?seed=${name}`
  };
}

module.exports = {
  generateImage
};
