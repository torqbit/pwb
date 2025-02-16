import "./About.css"
export function About({img, name, introduction}){
    return(
    <section id="1" className="about">
    <div className="about__container">
      <div className="img__container">
        <img src={img} />
      </div>
      <p>Hey,I'm {name}</p>
      <h1>
        {introduction}
      </h1>
    </div>
    </section>
    )
}
