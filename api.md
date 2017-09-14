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

