import { AppleLogo } from "@phosphor-icons/react"

export function ContinueButton() {
  return (
    <button 
      style={{ 
        background: "var(--black)",
        color: "var(--white)"
      }}
    >
      <AppleLogo size={32} weight="fill" />
      <span>
        Continue With Apple
      </span>
    </button>
  )
}
