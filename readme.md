# EditorJs - Codeflask

    npm i editorjs-codeflask

This is an EditorJs wrapper for [CodeFlask](https://kazzkiq.github.io/CodeFlask/) - A lovely lightweight zero-dep code formatter

It was built to be an improvement on :
* https://github.com/editor-js/code - Too Basic
* https://github.com/dev-juju/codebox - Agressive styling, and exports more data than markdown can handle


## Demo Video

./assets/editorjs-codeflask-demo.mp4




## Data Format :

| Name            | Description                                                |
| --------------- | ---------------------------------------------------------- |
| code            | The code that is displayed in the editor, with line breaks |
| language        | The programming language                                   |
| showlinenumbers | Will show/hide the line numbers                            |


---

## Markdown Compatability

> TODO!

This plugin is compatible with

    npm i editorjs-markdown-parser

It will import/export using the code fence markdown style, with the language printed imediatly after the first fence, as described in [GFM #117](https://github.github.com/gfm/#example-112)

Example :

    ```javascript
    \\ Hello World
    ```
