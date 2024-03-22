import { UnerlineButtonInterface } from "../Interfaces";

import "./underline-button.scss"

function UnderlineButton({wrapperClassName='', textButton} :UnerlineButtonInterface) {
  return (
    <button className={`underline-button ${wrapperClassName}`}>
      {textButton}
    </button>
  )
}

export default UnderlineButton