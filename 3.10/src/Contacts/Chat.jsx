
export default function Chat({text, onChange, contact, onClear }) {
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={onChange}
      />
      <br />
      <button 
      onClick={onClear}
      >Send to {contact.email}</button>
    </section>
  );
}
