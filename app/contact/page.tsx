import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch with me',
}

export default function ContactPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </main>
  )
} 