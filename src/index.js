const fs = require('fs');

const tachyonsGenerator = require('tachyons-generator');

const generate = async () => {
  const tachy = tachyonsGenerator(config);

  const out = await tachy.generate({
    customMedia: [{ m: 48 }, { l: 64 }, { xl: 128 }],
  });

  fs.writeFileSync('index.html', out.docs);
  fs.writeFileSync('tachyons.css', out.css);
  fs.writeFileSync('tachyons.min.css', out.min);
};

generate();
