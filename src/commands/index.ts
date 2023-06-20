import { resolve } from 'path';
import { readFileSync } from 'fs';
import createProgram from './createProgram';
import { generateComponent, generatePage, generateHook } from './generator';

export default createProgram;
export * from './generator';

export const run = (): void => {
  const pkgPath: string = resolve(process.cwd(), 'package.json');
  const pkg: string = readFileSync(pkgPath, { encoding: 'utf-8' });
  const program = createProgram(JSON.parse(pkg));

  const generatorCommand = program.command('cli <type>').alias('g');

  generateComponent(generatorCommand);
  generatePage(generatorCommand);
  generateHook(generatorCommand);

  generatorCommand.description('Defines what type of component to generate');

  program.parse();
};
