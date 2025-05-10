const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, '../public/bgs/');
const projects = fs
  .readdirSync(folder)
  .filter(x => x.endsWith('.json'))
  .map(x => x.replace('.json', ''));

fs.writeFileSync(
  path.join(__dirname, '../public/bgs.json'),
  JSON.stringify(projects)
);
