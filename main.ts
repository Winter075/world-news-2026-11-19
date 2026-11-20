// Entry for make.fun's "Sum up 19 November's world news in one image" bounty.
// Node 22, standard library only, no network. The image is committed as entry.png;
// this program copies it to the output directory the grader provides.
// Locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(output, 'entry.png'));
