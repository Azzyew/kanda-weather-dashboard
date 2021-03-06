import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { SettingsButton } from "./Button"
import { Close } from "../../svg/icons/Close"
import { Options } from "./Options"

import SettingsContainer, { ModalStyles } from "./style"

import Modal from "react-modal"
Modal.setAppElement("#root")

export function Settings() {
  const { t } = useTranslation()
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
        <SettingsContainer className="settings-container">
          <button
            name={t('Close Settings')}
            aria-label={t('Close Settings')}
            onClick={() => setIsOpen(false)}
          >
            <Close />
          </button>

          <h1>{t('Settings')}</h1>

          <Options />
        </SettingsContainer>
      </Modal>
    </>
  )
}