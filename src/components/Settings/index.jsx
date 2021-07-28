import { useState } from "react"
import { SettingsButton } from "./Button"
import { Close } from "../../svg/icons/Close"
import { Options } from "./Options"

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

          <Options />
        </SettingsContainer>
      </Modal>
    </>
  )
}