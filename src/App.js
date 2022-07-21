import React, { useState } from "react"
import { tint, shade } from "tint-shade-color"

function App() {
  let [color, setColor] = useState("#FCFCFC")
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let tints = color
    let shades = color

    for (let i = 0; i < 5; i++) {
      setList([])
      tints = tint(tints, 0.4)
      console.log(tints)
      list.push(tints)
      // setList(list =>[...list,tints])
    }

    list.push(color)

    for (let i = 0; i < 5; i++) {
      shades = shade(shades, 0.4)
      console.log(shades)
      list.push(shades)
    }
    console.log(list)
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            value={color}
            placeholder={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {/* {JSON.stringify(list)} */}
        {list.map((hnum) => {
          return (
            <div style={{ backgroundColor: `${hnum}` }}>
              <article>{hnum}</article>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default App
