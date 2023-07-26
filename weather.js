#!/usr/bin/env node

import { program } from 'commander'
import { printHelp } from './services/log.service.js';

const initCLI = () => {
    program
        .option('-s, --town <char>')
        .option('-h, --help')
        .option('-token, --token <char>')
    program.parse();
    const options = program.opts();
    if (options.help) {
        printHelp()
    } 
    if (options.town) {
        console.log(`Save ${options.town}`);
    }
    if (options.token) {
        console.log(`Save ${options.token}`);
    }

}
initCLI()