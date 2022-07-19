import React, { useState } from "react"
import Values from "values.js"
function App() {
  const [color, setColor] = useState("#FCFCFC")
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const colors = new Values(color).all(20)
    setList(colors)

    // console.log(list)
    // let color=new Values(color.all(10))
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
        {list.map((color, index) => {
          if (index !== 0 && index !== 10) {
            return (
              <div style={{ backgroundColor: `#${color.hex}` }}>
                <article>
                  #{color.hex} ,{color.weight}
                </article>
              </div>
            )
          }
        })}
      </section>
    </>
  )
}

export default App
