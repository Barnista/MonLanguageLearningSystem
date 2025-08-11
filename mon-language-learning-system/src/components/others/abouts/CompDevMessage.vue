<template>
    <div class="comp-dev-message">
        <h3>{{ langSet[lang || 'en'].aboutView.founderTitle }}</h3>
        <hr>
        <div class="row">
            <div class="col-12 col-md-5 col-lg-4 col-xl-3 mb-3">
                <img src="@/assets/imgs/developer/profile-pic-2.jpg" class="rounded shadow-sm"
                    style="width: 100%; height: 380px; object-fit: cover;" />
                <div class="mt-2">
                    <div class="py-2 px-4 rounded border shadow-sm">
                        <VueAudioPlayer ref="audioPlayer" :audio-list="audioList" :before-play="handleBeforePlay"
                            :show-play-loading="false" />
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-7 col-lg-8 col-xl-9 mb-3">
                <div class="d-flex align-items-center h-100">
                    <figure>
                        <blockquote class="blockquote">
                            <p>ข้าพเจ้ามีนามว่า ธรรมนูญ วันชะเอม เรียนจบในสาขาเทคโนโลยีสารสนเทศ เป็นคนไทยเชื้อสายมอญ
                                ที่มีงานอดิเรกสนใจศึกษาประวัติศาสตร์ การเมือง และเศรษฐกิจของโลก
                            </p>
                            <p>เคยทำงานในตำแหน่ง Senior Software Developer ปัจจุบันเป็นสตรีมเมอร์ชื่อ Barnista
                                และเป็นนักธุรกิจอสังหาริมทรัพย์</p>
                            <p>มารดาของข้าพเจ้าเป็นคน อ.ภาชี จ.อยุธยา ส่วนบิดาของข้าพเจ้าเป็นคนเชื้อสายมอญ ต.เตาปูน
                                อ.โพธาราม จ.ราชบุรี</p>
                            <p>ครั้นที่ข้าพเจ้าบวชเป็นพระภิกษุ ณ วัดเขาช่องพราน อ.โพธาราม จ.ราชบุรี เมื่อปี พ.ศ. 2567
                                ข้าพเจ้าได้เห็นถึง
                                การอนุรักษ์วัฒนธรรมและอัตลักษ์ของความเป็นมอญ ของคนในชุมชน
                                ที่มีความเลื่อมใสในพระพุทธศาสนาอย่างแรงกล้า
                                ซึ่งมีในทุก ๆ ช่วงวันพระ และวันสำคัญต่าง ๆ</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {{ langSet[lang || 'en'].aboutView.founderName }} - <cite title="Source Title">{{
                                langSet[lang || 'en'].aboutView.founderCareer }}</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <div class="d-flex h-100">
                    <figure>
                        <blockquote class="blockquote">
                            <p>แต่การอนุรักษ์นั้นจำกัดแค่ในกลุ่มผู้สูงอายุ แม้แต่ตัวข้าพเจ้าเองซึ่งเป็นคนรุ่นใหม่
                                ก็ขอยอมรับตามตรงว่าไม่เคยพูดภาษามอญ ศึกษาภาษามอญ
                                หรือแม้แต่ปฏิบัติตามขนบธรรมเนียมแบบมอญ</p>
                            <p>ข้าพเจ้าใช้เวลาปฏิบัติธรรมและสอบถามผู้คนต่าง ๆ อยู่เป็นเวลานาน
                                จึงเข้าใจถึงธรรมชาติของทุกสิ่งที่เป็นไป</p>
                            <p>จากทวารวดีสู่หงสาวดี จากพระปฐมเจดีย์ถึงชเวมอดอ อารยธรรมที่เคยยิ่งใหญ่ในโลก
                                ล้วนมีจุดเริ่มต้นที่เรียบง่าย ไปสู่จุดรุ่งเรืองที่สูงสุด
                                จนเข้าสู่จุดถดถอย และสุดท้ายเลือนหายไปตามกาลเวลา</p>
                            <p>วันหนึ่งภาษา วัฒนธรรม ขนบธรรมเนียม หรือแม้แต่อัตลักษณ์
                                ก็ต้องถูกลืมเลือนไปจากอิธิพลของวัฒนธรรมหลักในประเทศนั้นๆที่ชาวมอญอยู่</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {{ langSet[lang || 'en'].aboutView.founderName }} - <cite title="Source Title">{{
                                langSet[lang || 'en'].aboutView.founderCareer }}</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <div class="d-flex h-100">
                    <figure>
                        <blockquote class="blockquote">
                            <p>เมื่อเห็นเป็นเช่นนี้แล้ว ข้าพเจ้าจึงมีความตั้งมั่นด้วยใจจริง
                                ที่จะรวบรวมและเก็บรักษาไว้ซึ่งอารยธรรมมอญ อันประกอบด้วยภาษา ประวัติศาสตร์ ศิลปะ
                                วัฒนธรรม และพระพุทธศาสนา ให้อยู่ในรูปแบบของเทคโนโลยีสมัยใหม่ที่สุดเท่าที่จะมี</p>
                            <p>จึงถือกำเนิดเป็นโปรเจค The Mon Language: Learning System
                                ขึ้น ซึ่งจะเป็นแพลตฟอร์มการเรียนรู้ภาษามอญ ด้วยเทคโนโลยีสมัยใหม่อย่าง Web Application,
                                Cloud Service, และ Artificial Intelligence
                                ที่จะเข้ามาช่วยเสริมการเรียนรู้ให้ง่ายขึ้นและมีเครื่องมือพร้อมสนับสนุนตลอดเวลา</p>
                            <p>ข้าพเจ้าหวังว่าในอนาคต แพลตฟอร์มนี้จะสร้างคุณประโยชน์แก่อารยธรรมมอญ
                                และจะได้รับความร่วมมือจากแวดวงวิชาการและชุมชนมอญ ในการรวบรวมข้อมูลต่างๆ
                                ให้เกิดเป็นคลังปัญญา ที่จะได้มีไว้ให้คนรุ่นหลังได้มองย้อนกลับไป
                            </p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {{ langSet[lang || 'en'].aboutView.founderName }} - <cite title="Source Title">{{
                                langSet[lang || 'en'].aboutView.founderCareer }}</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <div class="d-flex h-100">
                    <figure>
                        <blockquote class="blockquote">
                            <p>สำหรับลูกหลานชาวมอญที่ฟังอยู่ หากท่านเกิดความรู้สึกโศกเศร้าเสียใจ
                                ข้าพเจ้าขอบอกกับท่านว่า "อย่าเศร้าไปเลย"
                                จงยิ้มให้กับสัจธรรมที่สวยงามนี้เถิด
                            </p>
                            <p>
                                อันซากสัตว์ที่ย่อยสลาย ล้วนคืนแร่ธาตุกลับสู่ผืนดินและผืนน้ำ
                                การเลือนหายไปของความเป็นมอญก็ไม่ใช่จุดสิ้นสุดเช่นกัน หากแต่เป็นความต่อเนื่อง
                                ดั่งวัฎสังสารที่ไม่รู้จบ
                            </p>
                            <p>
                                หากท่านพยายามจะกอบกู้สิ่งที่เคยรุ่งเรืองในอดีต จงตั้งคำถามในใจว่าสิ่งที่ท่านทำ
                                นำพามาสู่การซ้ำรอยความผิดพลาด
                                หรือเป็นการหาทางหลุดพ้นจากวัฎสังสารเพื่อไปสู่อนาคตที่เราจะสร้างความแตกต่างและยืนหนึ่งได้ในโลกใบนี้
                            </p>
                            <p>หากท่านพบคำตอบในใจ โปรดระบายให้ข้าพเจ้าได้ยิน
                                ด่าให้ข้าพเจ้าได้คิด และนำเสนอให้ข้าพเจ้าได้เห็น</p>
                            <p>ท่านไม่จำเป็นต้องเห็นด้วยกับข้าพเจ้า แต่อัตลักษณ์ใหม่ที่ท่านได้สร้างขึ้นในใจ
                                เป็นสิ่งที่ข้าพเจ้าคาดหวังจากท่าน</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {{ langSet[lang || 'en'].aboutView.founderName }} - <cite title="Source Title">{{
                                langSet[lang || 'en'].aboutView.founderCareer }}</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <div class="d-flex h-100">
                    <figure>
                        <blockquote class="blockquote">
                            <p>สุดท้ายนี้ ข้าพเจ้าขออวยพรให้ผู้เรียนทุกท่าน มีสติปัญญาที่เฉียบแหลม มีกายที่แข็งแรง
                                มีใจที่นิ่งและมั่งคง</p>
                            <p>ไม่ว่าท่านจะอยู่ที่ใดในโลกขอให้ประสบความสำเร็จในสิ่งที่ดีงาม
                                ไม่ว่าท่านจะถือสัญชาติใดขอให้จงรักภักดีและเป็นพลเมืองที่ดีในประเทศที่ท่านอยู่</p>
                            <p>และขอให้แพลตฟอร์มนี้เป็นดั่งแสงสว่างทางปัญญาแก่ท่าน
                                เฉกเช่นสายน้ำและดวงตะวันที่ให้ผลผลิตแก่พืชไร่และนาข้าวทั้งปวง</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {{ langSet[lang || 'en'].aboutView.founderName }} - <cite title="Source Title">{{
                                langSet[lang || 'en'].aboutView.founderCareer }}</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueAudioPlayer from '@liripeng/vue-audio-player'
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompDevMessage',
    components: {
        VueAudioPlayer
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => ({
        langSet: displayLanguages.langSet,
        currentAudioName: '',
        audioList: [
            /*{
                src: 'http://music.163.com/song/media/outer/url?id=317151.mp3', // Required
                title: 'Audio Title 1', // Optional，Phone lock screen music player display
                artist: 'Artist Name 1', // Optional，Phone lock screen music player display
                album: 'Album Name 1', // Optional，Phone lock screen music player display
                artwork: [
                    {
                        src: 'https://upload.jianshu.io/users/upload_avatars/1696356/c358e43854eb?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
                        sizes: '512x512',
                        type: 'image/jpg',
                    },
                ], // Optional，Phone lock screen music player display
            },*/
            {
                src: require('@/assets/sounds/dev-messages/dev-msg-1.mp3'), // Required
                title: 'Paragraph-1', // Optional，Phone lock screen music player display
            },
            {
                src: require('@/assets/sounds/dev-messages/dev-msg-2.mp3'), // Required
                title: 'Paragraph-2', // Optional，Phone lock screen music player display
            },
            {
                src: require('@/assets/sounds/dev-messages/dev-msg-3.mp3'), // Required
                title: 'Paragraph-3', // Optional，Phone lock screen music player display
            },
            {
                src: require('@/assets/sounds/dev-messages/dev-msg-4.mp3'), // Required
                title: 'Paragraph-4', // Optional，Phone lock screen music player display
            },
            {
                src: require('@/assets/sounds/dev-messages/dev-msg-5.mp3'), // Required
                title: 'Paragraph-5', // Optional，Phone lock screen music player display
            },
        ],
    }),
    methods: {
        // Use this function if you want to do something before you start playing
        handleBeforePlay(next) {
            this.currentAudioName =
                this.audioList[this.$refs.audioPlayer.currentPlayIndex].title

            next() // Start play
        },
    },
}
</script>