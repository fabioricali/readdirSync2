const fs = require('fs');
const path = require('path');
const slash = require('super-trailing-slash');
const defaulty = require('defaulty');

const defaultOpts = {
    ignoreExt: [],
    ignoreName: [],
    only: '', //file|directory
    recursive: true
};

/**
 * Read directory content
 * @param dir {string} directory path
 * @param [opts] {Object} options
 * @param [opts.ignoreExt=[]] {Array} an array of extensions to ignore, eg: '.txt'
 * @param [opts.ignoreName=[]] {Array} an array of filename or directory to ignore, eg: 'index.js'
 * @param [opts.only] {string} get file or directory or both. The value can be: `file` or `directory`
 * @param [opts.recursive=true] {boolean} lookup also in nested directories
 * @returns {Array}
 */
function readdirSync(dir, opts = {}) {
    let newFiles = [];
    let stat;
    let filePath;
    let files = [];

    /* istanbul ignore else  */
    if(!fs.existsSync(dir)) return files;

    opts = defaulty.copy(opts, defaultOpts);

    dir = slash.add(dir);

    files = fs.readdirSync(dir);

    files.forEach(function (file) {
        filePath = dir + file;
        stat = fs.statSync(filePath);

        /* istanbul ignore else  */
        if ((Array.isArray(opts.ignoreName) && opts.ignoreName.includes(file)) ||
            (Array.isArray(opts.ignoreExt) && opts.ignoreExt.includes(path.extname(file)) && stat.isFile())) {
            return;
        }

        if (opts.only) {
            /* istanbul ignore else  */
            if ((opts.only === 'file' && !stat.isDirectory()) ||
                (opts.only === 'directory' && !stat.isFile())) {
                newFiles.push(filePath);
            }
        } else {
            newFiles.push(filePath);
        }

        /* istanbul ignore else  */
        if (opts.recursive && stat.isDirectory()) {
            readdirSync(filePath, opts).forEach(function (file) {
                newFiles.push(file);
            });
        }
    });

    return newFiles;
}

module.exports = readdirSync;