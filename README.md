<div align="center">
<h1>readdirsync2</h1>
readdirSync with some useful options: recursively, exclude name and ext, get only file or directory.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/readdirSync2" target="_blank"><img src="https://travis-ci.org/fabioricali/readdirSync2.svg?branch=master" title="Build Status"/></a>
<a href="https://coveralls.io/github/fabioricali/readdirSync2?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/fabioricali/readdirSync2/badge.svg?branch=master" title="Coverage Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>
</div>

## Installation

```
npm install readdirsync2 --save
```

# Example

#### Basic usage

```javascript
const readdirSync = require('readdirsync2');
readdirSync('./foo/bar');
```

#### Get only files

```javascript
readdirSync('./foo/bar', {only: 'file'});
```

#### Get only directories

```javascript
readdirSync('./foo/bar', {only: 'directory'});
```

#### Disable recursive mode

```javascript
readdirSync('./foo/bar', {recursive: false});
```

#### Ignore files with extension

```javascript
readdirSync('./foo/bar', {ignoreExt: ['.js', '.txt']});
```

#### Ignore files or directories with name

```javascript
readdirSync('./foo/bar', {ignoreName: ['index.js', 'my-folder']});
```

### API
<a name="readdirSync"></a>

## readdirSync(dir, [opts]) ⇒ <code>Array</code>
Read directory content

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dir</td><td><code>string</code></td><td></td><td><p>directory path</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>options</p>
</td>
    </tr><tr>
    <td>[opts.ignoreExt]</td><td><code>Array</code></td><td><code>[]</code></td><td><p>an array of extensions to ignore, eg: &#39;.txt&#39;</p>
</td>
    </tr><tr>
    <td>[opts.ignoreName]</td><td><code>Array</code></td><td><code>[]</code></td><td><p>an array of filename or directory to ignore, eg: &#39;index.js&#39;</p>
</td>
    </tr><tr>
    <td>[opts.only]</td><td><code>string</code></td><td></td><td><p>get file or directory or both. The value can be: <code>file</code> or <code>directory</code></p>
</td>
    </tr><tr>
    <td>[opts.recursive]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>lookup also in nested directories</p>
</td>
    </tr>  </tbody>
</table>

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/readdirsync2/blob/master/CHANGELOG.md">here</a>

## License
readdirsync2 is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Authors
<a target="_blank" href="http://rica.li">Fabio Ricali</a>