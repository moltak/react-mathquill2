declare module 'react-mathquill2' {
  import * as React from 'react'

  export { addStyles } from 'react-mathquill'

  export interface Config {
    spaceBehavesLikeTab: boolean
    leftRightIntoCmdGoes: string
    restrictMismatchedBrackets: boolean
    sumStartsWithNEquals: boolean
    supSubsRequireOperand: boolean
    charsThatBreakOutOfSupSub: string
    autoSubscriptNumerals: boolean
    autoCommands: string
    autoOperatorNames: string
    maxDepth: number
    substituteTextarea: () => void
    handlers: {
      edit: (mathField: MathField) => void
      upOutOf: (mathField: MathField) => void
      moveOutOf: (dir: string, mathField: MathField) => void
    }
  }

  export interface MathField {
    latex(): string
    el(): string
  }

  export interface Props {
    latex: string
    config?: Config
    onChange?: (mathField: MathField) => void
    mathquillDidMount?: (mathField: MathField) => void
  }

  export default EditableMathQuillComponent

  declare class EditableMathQuillComponent extends React.Component<Props> {
    constructor(props: MathQuillProps)
  }
}
