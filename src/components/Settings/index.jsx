import { useState } from "react"
import { SettingsButton } from "./Button"
import { Close } from "../../svg/icons/Close"
import SettingsContainer, { ModalStyles } from "./style"
import "./style.css"

import Modal from "react-modal"
Modal.setAppElement("#root")

export function Settings() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SettingsButton onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen ? true : false}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Settings"
        closeTimeoutMS={200}
        style={ ModalStyles }
      >
        <SettingsContainer>
          <button onClick={() => setIsOpen(false)}>
            <Close />
          </button>

          <h1>Settings</h1>

          <div className="options">
            {/* exemplo bobo pra preencher espaço */}
            <p>Select default temperature unity:</p>
            <br />
            <select name="" id="">
              <option value="C">Celsius</option>
              <option value="F">Fahrenheit</option>
            </select>
          </div>
        </SettingsContainer>
      </Modal>
    </>
  )
}