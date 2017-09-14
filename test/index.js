const readdirSync = require('../');
const be = require('bejs');

describe('readDir', function () {
    it('should be return only files', function () {
        let files = readdirSync('./test/texture', {only: 'file', recursive: false});
        console.log(files);
        be.err.equal(['./test/texture/file1.txt', './test/texture/file2.txt'], files);
    });
    it('should be return only directory', function () {
        let files = readdirSync('./test/texture', {only: 'directory', recursive: false});
        console.log(files);
        be.err.equal(['./test/texture/subfolder'], files);
    });
    it('should be return all', function () {
        let files = readdirSync('./test/texture', {recursive: false});
        console.log(files);
        be.err.equal(['./test/texture/file1.txt', './test/texture/file2.txt', './test/texture/subfolder'], files);
    });
    it('should be return only files, ignoreName one file', function () {
        let files = readdirSync('./test/texture', {only: 'file', ignoreName: ['file1.txt'], recursive: false});
        console.log(files);
        be.err.equal(['./test/texture/file2.txt'], files);
    });
    it('should be return files and directories, ignoreName one file', function () {
        let files = readdirSync('./test/texture', {ignoreName: ['file1.txt'], recursive: false});
        console.log(files);
        be.err.equal(['./test/texture/file2.txt', './test/texture/subfolder'], files);
    });
    it('should be return recursive', function () {
        let files = readdirSync('./test/texture', {recursive: true});
        console.log(files);
        be.err.equal([ './test/texture/file1.txt',
            './test/texture/file2.txt',
            './test/texture/subfolder',
            './test/texture/subfolder/file3.txt',
            './test/texture/subfolder/subfolder2',
            './test/texture/subfolder/subfolder2/file4.txt' ], files);
    });
    it('should be return recursive, only file', function () {
        let files = readdirSync('./test/texture', {recursive: true, only: 'file'});
        console.log(files);
        be.err.equal([ './test/texture/file1.txt',
            './test/texture/file2.txt',
            './test/texture/subfolder/file3.txt',
            './test/texture/subfolder/subfolder2/file4.txt' ], files);
    });
    it('should be return only directory, ignore ext .txt', function () {
        let files = readdirSync('./test/texture', {recursive: true, ignoreExt: ['.txt']});
        console.log(files);
        be.err.equal(['./test/texture/subfolder',
            './test/texture/subfolder/subfolder2' ], files);
    });
});