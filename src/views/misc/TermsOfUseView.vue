<template>
    <main class="terms-view" role="main" aria-labelledby="terms-heading">
        <header class="terms-header">
            <h1 id="terms-heading">Terms of Use</h1>
            <p class="subtitle">Please read these terms carefully before using the Service.</p>
            <div class="actions">
                <button @click="printPage" class="btn ghost" aria-label="Print terms">Print</button>
                <button
                    @click="acceptTerms"
                    :disabled="accepted"
                    class="btn primary"
                    aria-pressed="false"
                >
                    {{ accepted ? 'Accepted' : 'I Agree' }}
                </button>
            </div>
        </header>

        <nav class="toc" aria-label="Table of contents">
            <strong>Contents</strong>
            <ul>
                <li><a href="#acceptance">Acceptance of Terms</a></li>
                <li><a href="#use">Permitted Use</a></li>
                <li><a href="#accounts">Accounts & Security</a></li>
                <li><a href="#content">User Content</a></li>
                <li><a href="#ip">Intellectual Property</a></li>
                <li><a href="#disclaimer">Disclaimer & Limitation</a></li>
                <li><a href="#termination">Termination</a></li>
                <li><a href="#changes">Changes to Terms</a></li>
                <li><a href="#governing">Governing Law</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <article class="terms-content">
            <section id="acceptance">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using this website, application, or any services provided
                    by the Service ("Service"), you agree to be bound by these Terms of Use
                    ("Terms"). If you do not agree, do not use the Service.
                </p>
            </section>

            <section id="use">
                <h2>2. Permitted Use</h2>
                <p>
                    You may use the Service only for lawful purposes and in accordance with
                    these Terms. You agree not to use the Service in any way that harms,
                    disrupts, or interferes with other users, systems, or networks.
                </p>
            </section>

            <section id="accounts">
                <h2>3. Accounts & Security</h2>
                <p>
                    If you create an account, you are responsible for maintaining the
                    confidentiality of your credentials and for all activities that occur
                    under your account. Notify us immediately of any unauthorized use.
                </p>
            </section>

            <section id="content">
                <h2>4. User Content</h2>
                <p>
                    You retain ownership of content you upload, submit, or post to the
                    Service ("User Content"). By providing User Content you grant the
                    Service a non-exclusive, worldwide, royalty-free license to host, use,
                    reproduce, modify, and display that content as reasonably necessary to
                    provide the Service.
                </p>
            </section>

            <section id="ip">
                <h2>5. Intellectual Property</h2>
                <p>
                    All rights, title, and interest in and to the Service (excluding User
                    Content) are owned by the Service or its licensors. You may not copy,
                    modify, create derivative works, or redistribute any part of the
                    Service without prior written permission.
                </p>
            </section>

            <section id="disclaimer">
                <h2>6. Disclaimer & Limitation of Liability</h2>
                <p>
                    The Service is provided "as is" and "as available" without warranties
                    of any kind. To the maximum extent permitted by law, the Service is
                    not liable for indirect, incidental, special, or consequential damages.
                </p>
            </section>

            <section id="termination">
                <h2>7. Termination</h2>
                <p>
                    We may suspend or terminate your access for violation of these Terms or
                    for any lawful reason. Upon termination, any licenses granted to you
                    will end and you must stop using the Service.
                </p>
            </section>

            <section id="changes">
                <h2>8. Changes to Terms</h2>
                <p>
                    We may modify these Terms at any time. Material changes will be
                    communicated via the Service or by other means. Continued use after
                    changes constitutes acceptance of the updated Terms.
                </p>
            </section>

            <section id="governing">
                <h2>9. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of the jurisdiction where the
                    Service is operated, without regard to conflict of law principles.
                </p>
            </section>

            <section id="contact">
                <h2>10. Contact</h2>
                <p>
                    For questions about these Terms or the Service, contact the Service
                    operator via the contact information provided within the application.
                </p>
            </section>

            <footer class="terms-footer">
                <p class="muted">
                    Last updated: {{ lastUpdated }}. Acceptance is recorded locally in your
                    browser and does not constitute a substitute for any other required
                    acknowledgments.
                </p>
            </footer>
        </article>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const STORAGE_KEY = 'termsAccepted_v1'
const accepted = ref(false)
const lastUpdated = '2025-11-05'

onMounted(() => {
    try {
        accepted.value = localStorage.getItem(STORAGE_KEY) === 'true'
    } catch {
        accepted.value = false
    }
})

function acceptTerms() {
    try {
        localStorage.setItem(STORAGE_KEY, 'true')
        accepted.value = true
        // Navigate to home or previous route; adjust as needed
        router.push({ name: 'Home' }).catch(() => {})
    } catch {
        accepted.value = true
    }
}

function printPage() {
    window.print()
}
</script>

<style scoped>
.terms-view {
    max-width: 980px;
    margin: 28px auto;
    padding: 20px;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    color: #1f2937;
}

.terms-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;
    flex-wrap: wrap;
}

.terms-header h1 {
    margin: 0 0 6px 0;
    font-size: 1.6rem;
}

.subtitle {
    margin: 0;
    color: #6b7280;
    font-size: 0.95rem;
}

.actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

.btn {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid transparent;
    font-size: 0.95rem;
    cursor: pointer;
}

.btn.ghost {
    background: #fff;
    color: #374151;
    border-color: #d1d5db;
}

.btn.primary {
    background: #0ea5a4;
    color: white;
    border-color: #089e9d;
}

.btn[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.toc {
    margin: 12px 0 22px;
    background: #f9fafb;
    padding: 12px;
    border-radius: 8px;
    color: #374151;
}

.toc ul {
    margin: 8px 0 0 0;
    padding-left: 16px;
}

.toc a {
    color: #0ea5a4;
    text-decoration: none;
}

.terms-content section {
    margin-bottom: 18px;
}

.terms-content h2 {
    margin: 8px 0;
    font-size: 1.05rem;
}

.terms-content p {
    margin: 6px 0 0 0;
    line-height: 1.5;
    color: #374151;
}

.terms-footer {
    margin-top: 16px;
    border-top: 1px solid #e6e9ee;
    padding-top: 12px;
}

.muted {
    color: #6b7280;
    font-size: 0.9rem;
}
</style>