module.exports =
class OneLineInputView
  callback: null
  element: null
  editorElement: null
  editor: null

  constructor: (serializedState) ->
    # Create root element
    @element = document.createElement('div')
    @element.classList.add('atom-keyboard-macros')

    # Create Editor & Editor element
    @editorElement = document.createElement('atom-text-editor')
    @editor = atom.workspace.buildTextEditor({
      mini: true,  # １行のみのエディタ
      lineNumberGutterVisible: false,  # 行番号は非表示
      placeholderText: 'Macro name'    # 説明文
    })
    @editorElement.setModel(@editor)
    self = this
    @editorElement.onkeydown = (e) ->
      # Enterキーでコールバック関数を呼ぶ
      if e.keyIdentifier == 'Enter'
        value = self.editor.getText()
        self.clearText()
        self.callback?(value)
    @element.appendChild(@editorElement)

  focus: ->
    @editorElement.focus()

  clearText: ->
    @editor.setText('')

  # Returns an object that can be retrieved when package is activated
  serialize: ->

  # Tear down any state and detach
  destroy: ->
    @element.remove()

  getElement: ->
    @element

  setCallback: (callback) ->
    @callback = callback