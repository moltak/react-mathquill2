import React from 'react'
import PropTypes from 'prop-types'
import {
  MathQuill
} from './mathquill-loader'

class EditableMathQuillComponent extends React.Component {
  constructor(props) {
    super(props)

    this.element = null
    this.mathField = null

    // MathJax apparently fire 4 edit events on startup.
    this.ignoreEditEvents = 4
  }

  componentDidMount() {
    let config = {
      restrictMismatchedBrackets: true,
      handlers: {},
    }

    if (this.props.config) {
      config = {
        ...config,
        ...this.props.config,
      }
    }

    let configEditHandler = config.handlers.edit

    config.handlers.edit = mathField => {
      if (configEditHandler) {
        configEditHandler()
      }

      if (this.ignoreEditEvents > 0) {
        this.ignoreEditEvents -= 1
        return
      }
      if (this.props.onChange) {
        this.props.onChange(mathField)
      }
    }

    this.mathField = MathQuill.MathField(this.element, config)
    this.mathField.latex(this.props.latex || '')

    if (this.props.mathquillDidMount) {
      this.props.mathquillDidMount(this.mathField)
    }
  }

  render() {
    const {
      latex,
      onChange,
      config,
      mathquillDidMount,
      ...otherProps
    } = this.props

    return ( <
      div {
        ...otherProps
      }
      ref = {
        x => {
          this.element = x
        }
      }
      />
    )
  }
}

EditableMathQuillComponent.propTypes = {
  latex: PropTypes.string,
  onChange: PropTypes.func,
  config: PropTypes.object,
  mathquillDidMount: PropTypes.func,
}

export default EditableMathQuillComponent