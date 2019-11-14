import React from 'react'
import PropTypes from 'prop-types'
import {
  MQ
} from './mathquill-loader'

class StaticMathQuillComponent extends React.Component {
  constructor(props) {
    super(props)

    this.element = null
    this.staticMath = null
  }

  componentDidMount() {
    let config = {
      restrictMismatchedBrackets: true,
    }

    if (this.props.config) {
      config = {
        ...config,
        ...this.props.config,
      }
    }

    this.staticMath = MQ.StaticMath(this.element)
    this.staticMath.latex(this.props.latex || '')

    if (this.props.mathquillDidMount) {
      this.props.mathquillDidMount(this.staticMath)
    }
  }

  render() {
    const {
      latex,
      config,
      mathquillDidMount,
      ...otherProps
    } = this.props

    return (<
      div {
      ...otherProps
      }
      ref={
        x => {
          this.element = x
        }
      }
    />
    )
  }
}

StaticMathQuillComponent.propTypes = {
  latex: PropTypes.string,
  config: PropTypes.object,
  mathquillDidMount: PropTypes.func,
}

export default StaticMathQuillComponent