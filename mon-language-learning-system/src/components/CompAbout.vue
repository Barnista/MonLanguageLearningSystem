<template>
    <div class="comp-about container">
        <div class="d-flex justify-content-between mb-4">
            <img src="@/assets/logo.png" width="auto" height="256" :alt="about.appName2 + ' Logo'" />
            <div class="text-start">
                <h1>{{ about.appName2 }}</h1>
                <h4 class="mt-4">About</h4>
                <p class="mt-3">
                    This system is designed to help users learn the Mon language through interactive lessons, exercises,
                    and
                    resources.
                </p>
                <p>
                    The platform includes features such as a virtual keyboard for typing in Mon, alphabet tables, and
                    various
                    learning tools.
                </p>
                <p>
                    Developed by Barnista, this project aims to promote the Mon language and culture, making it
                    accessible to a
                    wider audience.
                </p>
                <p>
                    For more information, you can visit the <a
                        href="https://github.com/Barnista/MonLanguageLearningSystem" target="_blank"
                        rel="noopener noreferrer">GitHub
                        repository</a>.
                </p>
            </div>
        </div>
        <hr>
        <div class="mt-5">
            <h3>Follow me: Barnista</h3>
            <p class="fs-6">
                <span class="text-primary"><i class="bi bi-twitch"></i> Twitch:</span>
                <a class="text-primary fw-bold ms-1 me-4" href="https://www.twitch.tv/barnista27" target="_blank"
                    rel="noopener noreferrer">barnista27</a>
                <span class="text-danger"><i class="bi bi-youtube"></i> YouTube:</span>
                <a class="text-danger fw-bold ms-1 me-4" href="https://www.youtube.com/@barnista27" target="_blank"
                    rel="noopener noreferrer">Barnista27</a>
                <span class="text-dark"><i class="bi bi-twitter-x"></i> X (Twitter):</span>
                <a class="text-dark fw-bold ms-1 me-4" href="https://x.com/barnista27" target="_blank"
                    rel="noopener noreferrer">Barnista</a>
                <span class="text-dark text-primary"><i class="bi bi-tiktok"></i> TikTok:</span>
                <a class="text-dark fw-bold ms-1 me-4" href="https://www.tiktok.com/@barnista27" target="_blank"
                    rel="noopener noreferrer">barnista27</a>
                <span class="text-primary"><i class="bi bi-facebook"></i> Facebook:</span>
                <a class="text-primary fw-bold ms-1 me-4" href="https://www.facebook.com/profile.php?id=61574757156088"
                    target="_blank" rel="noopener noreferrer">Barnista27</a>
            </p>

        </div>
        <hr>
        <div class="mt-5">
            <h3>Many Thanks To</h3>
            <p>
                Telegram:
                <a class="fw-bold" href="https://t.me/mot_tip_ebook" target="_blank" rel="noopener noreferrer">
                    မတ်ဒိဗ် E book
                </a>
            </p>
            <p>
                Special Advisers: <strong>Min Salad</strong>, <strong>Rosa Mon</strong>
            </p>
        </div>
        <hr>
        <div class="mt-5">
            <h3>References</h3>
            <p>
                The Mon Alphabets:
                <a href="https://en.wikipedia.org/wiki/Mon_alphabet" target="_blank" rel="noopener noreferrer">
                    https://en.wikipedia.org/wiki/Mon_alphabet
                </a>
            </p>
            <p>
                อักษรมอญ:
                <a href="https://th.wikipedia.org/wiki/%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%A1%E0%B8%AD%E0%B8%8D"
                    target="_blank" rel="noopener noreferrer">
                    https://th.wikipedia.org/wiki/อักษรมอญ
                </a>
            </p>
            <p>
                คู่มือการเรียนรู้ภาษามอญ (ပြကိုဟ် ပရေင်ကတ်လ္ၚတ်လိက်မန်):
                <a href="https://online.fliphtml5.com/yjjtg/ejio/#p=1" target="_blank" rel="noopener noreferrer">
                    https://online.fliphtml5.com/yjjtg/ejio
                </a>
            </p>
            <p>
                พจนานุกรมมอญ-ไทย:
                <a href="https://online.fliphtml5.com/yjjtg/bkuu/?1747471532#p=1" target="_blank" rel="noopener noreferrer">
                    https://online.fliphtml5.com/yjjtg/bkuu/?1747471532
                </a>
            </p>
            <p>
                Mon Library:
                <a href="http://www.monlibrary.com/" target="_blank" rel="noopener noreferrer">
                    http://www.monlibrary.com
                </a>
            </p>
        </div>
        <hr>
    </div>
</template>

<script>

import about from '@/services/about';

export default {
    name: "CompAbout",
    data: () => {
        return {
            about: about
        }
    }
}

</script>
