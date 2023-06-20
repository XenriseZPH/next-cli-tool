import { Command } from 'commander';
import actions from '../actions';

export const generateComponent = (baseCommand: Command): void => {
  baseCommand
    .command('make:component <name>')
    .option('-m, --module <name>', 'Generate component under a module', 'common')
    .action(actions.component)
    .description('Generates a component');
};

export const generatePage = (baseCommand: Command): void => {
  baseCommand.command('make:page <name>').action(actions.page).description('Generates a page');
};

export const generateHook = (baseCommand: Command): void => {
  baseCommand
    .command('make:hook <name>')
    .option('-m, --module <name>', 'Generate hook under a module')
    .action(actions.hook)
    .description('Generates a hook');
};
