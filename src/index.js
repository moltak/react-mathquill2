import EditableMathQuill from './EditableMathQuillComponent'
import StaticMathQuill from './StaticMathQuillComponent'
import style from '@edtr-io/mathquill/build/mathquill.css'

export function addStyles() {
  if (document.getElementById('react-mathquill-styles') == null) {
    const styleTag = document.createElement('style')
    styleTag.setAttribute('id', 'react-mathquill-styles')
    styleTag.innerHTML = style[0][1]

    const head = document.getElementsByTagName('head')[0]
    head.appendChild(styleTag)
  }
}

export {
  EditableMathQuill,
  StaticMathQuill
};