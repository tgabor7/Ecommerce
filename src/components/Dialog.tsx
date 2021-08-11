import { useState } from "react"

interface Props {
    show: boolean
    setShow: any
    title: string
    content: string
}

export const Dialog: React.FC<Props> = (props) => {

    return (<><div className={"modal " + (props.show===true ? "is-active" : "")}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">{props.title}</p>
      <button className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
        {props.content}
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success" onClick={()=>{
          props.setShow(false)
      }}>Ok</button>
    </footer>
  </div>
</div>
    </>)
}