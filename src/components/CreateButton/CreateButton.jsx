import { Envelope } from "@phosphor-icons/react";

export function CreateButton () {
  return (
    <button
      style={{
        background: "var(--green)",
        color: "var(--purple)"
      }}
    >
      <Envelope size={32} weight="fill" />
      <span>
        Create an account 
      </span>
    </button>
  );
}
