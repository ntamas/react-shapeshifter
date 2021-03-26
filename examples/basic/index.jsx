import React from 'react'
import ReactDOM from 'react-dom'

import Shapeshifter from '../../src/index'

const SHAPES = 'menu close up down left right'.split(' ')

function pickRandom (items) {
  const n = items.length
  const index = Math.floor(Math.random() * n)
  return items[index]
}

function pickNextRandomShape ({ shape }) {
  while (true) {
    const nextShape = pickRandom(SHAPES)
    if (nextShape !== shape) {
      return { shape: nextShape }
    }
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shape: 'menu',
      thickness: 2,
      width: 18,
      color: 'black',
      style: {
        background: '#eee'
      }
    }
  }

  render () {
    return (
      <div>
        <h1><code>react-shapeshifter</code></h1>

        <p className='lead'>A React component that is able to render various commonly used button
          shapes with only three lines, morphing smootly between shapes using
          CSS transitions.
        </p>

        <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', marginBottom: '1em' }}>
          <Shapeshifter
            {...this.state} onClick={() => {
              this.setState(pickNextRandomShape)
            }}
          />
        </div>

        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly' }}>
          <div>
            <h5>Shape</h5>

            {SHAPES.map(key =>
              <div key={key}>
                <input
                  type='radio' name='shape' id={'shape_' + key} value={key} checked={key === this.state.shape} onChange={
                  (event) => {
                    if (event.target.checked) {
                      this.setState({ shape: event.target.value })
                    }
                  }
                }
                />
                <label htmlFor={'shape_' + key}><code>{key}</code></label>
              </div>
            )}
          </div>

          <div>
            <h5>Width</h5>

            {'9 18 27 36'.split(' ').map(x => Number.parseInt(x)).map(key =>
              <div key={key}>
                <input
                  type='radio' name='width' value={key} id={'width_' + key} checked={key === this.state.width} onChange={
                  (event) => {
                    if (event.target.checked) {
                      this.setState({ width: Number.parseInt(event.target.value) })
                    }
                  }
                }
                />
                <label htmlFor={'width_' + key}><code>{key}</code></label>
              </div>
            )}

          </div>

          <div>
            <h5>Color</h5>

            {'black red #08f #ffcc00 rgba(0,0,0,0.25)'.split(' ').map(key =>
              <div key={key}>
                <input
                  type='radio' name='color' value={key} id={'color_' + key} checked={key === this.state.color} onChange={
                  (event) => {
                    if (event.target.checked) {
                      this.setState({ color: event.target.value })
                    }
                  }
                }
                />
                <label htmlFor={'color_' + key}><code>{key}</code></label>
              </div>
            )}

            <p><small>You may use any CSS color.</small></p>
          </div>

          <div>
            <h5>Thickness</h5>

            {'1 2 3 4'.split(' ').map(x => Number.parseInt(x)).map(key =>
              <div key={key}>
                <input
                  type='radio' name='thickness' value={key} id={'thickness_' + key} checked={key === this.state.thickness} onChange={
                  (event) => {
                    if (event.target.checked) {
                      this.setState({ thickness: Number.parseInt(event.target.value) })
                    }
                  }
                }
                />
                <label htmlFor={'thickness_' + key}><code>{key}</code></label>
              </div>
            )}

          </div>
        </div>

        <p style={{ margin: 'auto', maxWidth: 600 }}>The height of the button is always set to nine times the line
          thickness. Therefore, in order to have square-shaped buttons,
          you should set the width to nine times the thickness.
        </p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
