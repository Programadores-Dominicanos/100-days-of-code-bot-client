import { resolve } from 'path';

const alias_path = [
    { find: '@', replacement: resolve(__dirname, "src") },
    { find: '@shared', replacement: resolve(__dirname, "src/shared") },
    {
		find: "@components",
		replacement: resolve(__dirname, "src/shared/components"),
	},
    { find: '@assets', replacement: resolve(__dirname, "src/assets") },
    { find: '@modules', replacement: resolve(__dirname, "src/modules") }
]


export default alias_path;