const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, '../public/bgs/');
const projects = fs
  .readdirSync(folder)
  .filter(x => x.endsWith('.json'))
  .map(x => x.replace('.json', ''))
  .reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: JSON.parse(
        fs.readFileSync(path.join(folder, cur + '.json'), 'utf8')
      ),
    }),
    {}
  );

fs.writeFileSync(
  path.join(__dirname, '../public/projects.json'),
  JSON.stringify(
    Object.entries(projects).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: { type: value.type, title: value.title },
      }),
      {}
    )
  )
);
fs.writeFileSync(
  path.join(__dirname, '../public/bgs.json'),
  JSON.stringify(Object.keys(projects))
);
