'use client'

import dynamic from 'next/dynamic'
import { Inter_Tight } from 'next/font/google'

const interTight = Inter_Tight({ subsets: ['latin'] })

const CardAnimation = dynamic(() => import('@/components/CardAnimation'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-transparent" />,
})

export default function AboutPage() {
  return (
    <main className="container py-12">
      <div className="mb-16 w-full">
        <h1 className={`${interTight.className} text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl`}>
          About Me
        </h1>
        <div className="mt-4 h-1 w-24 bg-primary"></div>
      </div>

      {/* CardAnimation Section with 50/50 Layout */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex h-[700px] w-full items-center justify-center bg-background">
          <CardAnimation />
        </div>

        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-muted">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
            <p className="text-muted">
              Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature from
              45 BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
            </p>
            <p className="text-muted">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly believable.
            </p>
          </div>
        </div>
      </div>

      {/* Licenses & Certifications Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Certification Card 1 */}
          <div className="rounded-lg border-2 border-primary/20 bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">AWS Certified Solutions Architect</h3>
            <p className="mb-3 text-sm text-muted">Amazon Web Services</p>
            <p className="text-sm text-muted">Issued: Jan 2024 • Expires: Jan 2027</p>
            <div className="mt-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Cloud Computing
              </span>
            </div>
          </div>

          {/* Certification Card 2 */}
          <div className="rounded-lg border-2 border-primary/20 bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Google Professional Cloud Developer</h3>
            <p className="mb-3 text-sm text-muted">Google Cloud</p>
            <p className="text-sm text-muted">Issued: Mar 2023 • Expires: Mar 2026</p>
            <div className="mt-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Cloud Development
              </span>
            </div>
          </div>

          {/* Certification Card 3 */}
          <div className="rounded-lg border-2 border-primary/20 bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Meta Front-End Developer Professional</h3>
            <p className="mb-3 text-sm text-muted">Meta (Facebook)</p>
            <p className="text-sm text-muted">Issued: Jun 2023 • No Expiration</p>
            <div className="mt-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Web Development
              </span>
            </div>
          </div>

          {/* Certification Card 4 */}
          <div className="rounded-lg border-2 border-primary/20 bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Docker Certified Associate</h3>
            <p className="mb-3 text-sm text-muted">Docker Inc.</p>
            <p className="text-sm text-muted">Issued: Sep 2023 • Expires: Sep 2025</p>
            <div className="mt-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                DevOps
              </span>
            </div>
          </div>

          {/* Certification Card 5 */}
          <div className="rounded-lg border-2 border-primary/20 bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Certified Kubernetes Administrator</h3>
            <p className="mb-3 text-sm text-muted">Cloud Native Computing Foundation</p>
            <p className="text-sm text-muted">Issued: Nov 2023 • Expires: Nov 2026</p>
            <div className="mt-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Kubernetes
              </span>
            </div>
          </div>

          {/* Certification Card 6 */}
          <div className="rounded-lg border-2 border-primary/20 bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">MongoDB Certified Developer</h3>
            <p className="mb-3 text-sm text-muted">MongoDB University</p>
            <p className="text-sm text-muted">Issued: Feb 2024 • No Expiration</p>
            <div className="mt-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Database
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 