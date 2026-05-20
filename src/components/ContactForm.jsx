import { Send } from 'lucide-react'
import { useForm } from '../hooks/useForm'

export function ContactForm() {
  const { values, handleChange, reset } = useForm({ name: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert(`Mensaje enviado por ${values.name || 'Invitado'}: ${values.message || 'Sin mensaje'}`)
    reset()
  }

  return (
    <section id="about" className="contact-section glass-panel">
      <div className="section-heading">
        <div>
          <span>Custom Hook</span>
          <h2>Archive Request</h2>
        </div>
        <p>Formulario gestionado con el Hook personalizado useForm.</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
        <input
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Solicita un nuevo personaje"
        />
        <button className="primary-button" type="submit">
          <Send size={17} /> Enviar
        </button>
      </form>
    </section>
  )
}
