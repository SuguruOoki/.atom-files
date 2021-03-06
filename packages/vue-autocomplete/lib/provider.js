'use babel'

import { Disposable } from 'atom'
import { filter } from 'fuzzaldrin'
// import API from './modules/api'
import COMPONENT from './modules/component'

export default class Provider extends Disposable {
  constructor () {
    super()
    this.selector = '.text.html, .source.js, .source.ts'
    this.completions = {}
  }

  getSuggestions (request) {
    const { prefix, bufferPosition, editor } = request
    const scopes = request.scopeDescriptor.getScopesArray()
    const line = editor.getTextInRange([ [bufferPosition.row, 0], bufferPosition ])

    return new Promise((resolve) => {
      let suggestions = []

      // console.log(scopes)
      if (COMPONENT.isAttributeValue(scopes)) {
        // console.log('COMPONENT.isAttributeValue')
        // suggestions = COMPONENT.getAttributeValueCompletions(line)
      } else if (COMPONENT.isTag(scopes, line)) {
        suggestions = COMPONENT.getTagNameCompletions()
      } else if (COMPONENT.isAttribute(prefix, scopes)) {
        suggestions = COMPONENT.getAttributeNameCompletions(editor, bufferPosition)
      } else {
        // suggestions = API.getCompletions(line)
        // console.log('other')
      }

      resolve(this.cenas(prefix, suggestions))
    })
  }

  cenas (prefix, suggestions) {
    return filter(suggestions, prefix, {
      key: 'displayText'
    })
  }

  onDidInsertSuggestion ({ editor, suggestion }) {
    // console.log(suggestion)
    if (suggestion.rightLabelHTML === 'vue.js') {
      setTimeout(function () {
        atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate', { activatedManually: false })
      }, 1)
    }
  }

  // loadCompletions () {
  //   this.completions = {}
  //   fs.readFile(path.resolve(__dirname, '..', 'completion.json'), (error, content) => {
  //     if (error) {
  //       this.completions = JSON.parse(content)
  //     }
  //   })
  // }
}
