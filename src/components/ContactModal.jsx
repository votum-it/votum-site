// src/components/ContactModal.jsx — new file
// Drop-in modal with form, validation, loading + success state

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/useLanguage'
import './ContactModal.css'

export default function ContactModal({ open, onClose }) {
  const { locale } = useLanguage()
  const t = locale.contact
  const [state, setState] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)

  useEffect(() => {
    if (!open) { setState('idle'); setErrors({}) }
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const validate = (data) => {
    const errs = {}
    if (!data.name.trim())   errs.name = t.errors.name
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) errs.email = t.errors.email
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(formRef.current)
    const data = Object.fromEntries(fd)
    const errs = validate(data)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setState('loading')
    setErrors({})

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    if (!endpoint) {
      console.error('VITE_FORMSPREE_ENDPOINT is not set')
      setErrors({ submit: t.errors.submit })
      setState('error')
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
      setState('success')
    } catch (err) {
      console.error(err)
      setErrors({ submit: t.errors.submit })
      setState('error')
    }
  }

  if (!open) return null

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        <div className="contact-modal__top">
          <button className="contact-modal__close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {state === 'success' ? (
          <div className="contact-modal__success">
            <SuccessIcon />
            <h2 className="contact-modal__success-title">{t.success.title}</h2>
            <p className="contact-modal__success-body">{t.success.body}</p>
            <span className="contact-modal__success-detail">{t.success.detail}</span>
          </div>
        ) : (
          <div className="contact-modal__body">
            <span className="contact-modal__eyebrow">{t.eyebrow}</span>
            <h2 className="contact-modal__title">{t.title}</h2>
            <p className="contact-modal__sub">{t.sub}</p>

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="_subject" value="New contact from votum.com" />
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px' }}
              />
              <div className="contact-form__row">
                <Field label={t.fields.name}    name="name"    type="text"  placeholder={t.placeholders.name}    error={errors.name} />
                <Field label={t.fields.company} name="company" type="text"  placeholder={t.placeholders.company} />
              </div>
              <Field label={t.fields.email} name="email" type="email" placeholder={t.placeholders.email} error={errors.email} />
              <Field label={t.fields.brief} name="brief" type="textarea" placeholder={t.placeholders.brief} />

              {errors.submit && (
                <div className="contact-form__error contact-form__error--submit" role="alert">
                  {errors.submit}
                </div>
              )}

              <div className="contact-form__submit">
                <span className="contact-form__note">{t.note}</span>
                <button type="submit" className="btn btn-primary btn-lg" disabled={state === 'loading'}>
                  {state === 'loading' ? <Spinner /> : t.send}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

// Helper components (in same file or separate)
function Field({ label, name, type, placeholder, error }) {
  return (
    <div className="contact-form__field">
      <label htmlFor={name}>{label}</label>
      {type === 'textarea'
        ? <textarea id={name} name={name} placeholder={placeholder} />
        : <input id={name} name={name} type={type} placeholder={placeholder}
                 className={error ? 'error' : ''} />
      }
      {error && <span className="contact-form__error">{error}</span>}
    </div>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor"
            strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function SuccessIcon() {
  return (
    <div className="contact-modal__success-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2.5"
           strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12l5 5 11-13" />
      </svg>
    </div>
  )
}

function Spinner() {
  return <span className="contact-spinner" aria-hidden="true" />
}