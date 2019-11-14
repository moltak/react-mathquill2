import React from 'react'
import ReactDOM from 'react-dom'

// import the library
import {
  EditableMathQuill,
  StaticMathQuill,
  addStyles as addMathquillStyles,
} from '../../index'

addMathquillStyles()

const initialLatex =
  '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latex: initialLatex,
      text: '',
    }

    this.mathQuillEl = null
    this.staticMathEl = null

    this.resetField = () => {
      this.mathQuillEl.latex(initialLatex)
    }
  }

  render() {
    return (
      <div>
        Math field:{' '}
        <EditableMathQuill
          className='mathquill-example-field'
          latex={this.state.latex}
          onChange={mathField => {
            const latex = mathField.latex()
            const text = mathField.text()
            console.log('latex changed:', latex)
            console.log('text changed:', text)
            this.setState({
              latex,
              text,
            })
          }}
          mathquillDidMount={el => {
            this.mathQuillEl = el
          }}
        />{' '}
        <div>
          Static Math:

          <StaticMathQuill
            className='mathquill-static-example-field'
            latex={this.state.latex}
            mathquillDidMount={el => {
              console.log('StaticMath has been loaded')
              this.staticMathEl = el
            }}
          />
        </div>
        <div className='result-container'>
          <span> Raw latex: </span>{' '}
          <span className='result-latex'> {this.state.latex} </span>{' '}
        </div>{' '}
        <div className='result-container'>
          <span> Raw text: </span>{' '}
          <span className='result-latex'> {this.state.text} </span>{' '}
        </div>{' '}
        <button onClick={this.resetField}> Reset field </button>{' '}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
