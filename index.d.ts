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

  export interface StaticMathQuillProps {
    latex: string
    config?: Config
    mathquillDidMount?: (mathField: MathField) => void
  }

  export interface EditableMathQuillProps extends StaticMathQuillProps {
    onChange?: (mathField: MathField) => void
  }

  declare class EditableMathQuill extends React.Component<
    EditableMathQuillProps
  > {
    constructor(props: EditableMathQuillProps)
  }

  declare class StaticMathQuill extends React.Component<StaticMathQuillProps> {
    constructor(props: StaticMathQuillProps)
  }

  export { EditableMathQuill, StaticMathQuill }
}
