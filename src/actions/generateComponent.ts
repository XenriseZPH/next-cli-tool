import { ComponentActionOption } from '../interfaces/ActionOption';
import capitalize from '../utils/capitalize';
import { writeFile, readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const generateComponent = (name: string, options: ComponentActionOption): void => {
  const tmpPath: string = resolve(process.cwd(), 'templates/component/index.txt');
  const tmpContent: string = readFileSync(tmpPath, { encoding: 'utf-8' });

  const [_name]: string[] = name.toLowerCase().split('component');
  const filename: string = capitalize(_name);

  if (existsSync(`${filename}.tsx`)) {
    console.log('File already exists!');
  } else {
    writeFile(`${filename}.tsx`, tmpContent.replaceAll('Template', filename), { encoding: 'utf-8' }, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully created next.json config file.');
      }
    });
  }

  console.log(options);
};

export default generateComponent;
