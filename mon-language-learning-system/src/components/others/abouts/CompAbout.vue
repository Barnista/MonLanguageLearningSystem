<template>
    <div class="comp-about">
        <div class="text-center">
            <img src="@/assets/logo.png" class="me-3 mb-2" width="auto" height="256" :alt="about.appName2 + ' Logo'" />
            <h1>{{ about.appName2 }}</h1>
        </div>
        <div class="=mt-5">
            <h3 class="mt-4">{{ langSet[lang || 'en'].aboutView.title }}</h3>
            <hr>
            <p v-html="langSet[lang || 'en'].aboutView.aboutDescription1" class="mt-3"></p>
            <p v-html="langSet[lang || 'en'].aboutView.aboutDescription2"></p>
            <p v-html="langSet[lang || 'en'].aboutView.aboutDescription3"></p>
        </div>
        <div class="mt-5">
            <h3>{{ langSet[lang || 'en'].aboutView.founderTitle }}</h3>
            <hr>
            <div class="row">
                <div class="col-12 col-md-5 col-lg-4 col-xl-3 mb-3">
                    <img src="@/assets/imgs/developer/profile-pic-2.jpg" class="rounded shadow-sm"
                        style="width: 100%; height: 480px; object-fit: cover;" />
                </div>
                <div class="col-12 col-md-7 col-lg-8 col-xl-9 mb-3">
                    <div class="d-flex align-items-center h-100">
                        <figure>
                            <blockquote class="blockquote">
                                <p>ข้าพเจ้ามีนามว่า ธรรมนูญ วันชะเอม เรียนจบในสาขาเทคโนโลยีสารสนเทศ เป็นคนไทยเชื้อสายมอญ ที่มีงานอดิเรกสนใจศึกษาประวัติศาสตร์ การเมือง และเศรษฐกิจของโลก
                                </p>
                                <p>เคยทำงานในตำแหน่ง Senior Software Developer ปัจจุบันเป็นสตรีมเมอร์ชื่อ Barnista
                                    และนักธุรกิจอสังหาริมทรัพย์</p>
                                <p>มารดาของข้าพเจ้าเป็นคน อ.ภาชี จ.อยุธยา ส่วนบิดาของข้าพเจ้าเป็นคนเชื้อสายมอญ ต.เตาปูน
                                    อ.โพธาราม จ.ราชบุรี</p>
                                <p>ครั้นที่ข้าพเจ้าบวชเป็นภิกษุ ณ วัดเขาช่องพราน อ.โพธาราม จ.ราชบุรี เมื่อปี พ.ศ. 2567
                                    เข้าเจ้าได้เห็นถึง
                                    การอนุรักษ์วัฒนธรรมและอัตลักษ์ความเลื่อมใสในพุทธศาสนา ของคนในชุมชน
                                    ทุกช่วงวันพระ และวันสำคัญต่าง ๆ ทางพระพุทธศาสนา</p>
                                <p>แต่การอนุรักษ์นั้นจำกัดแค่ในกลุ่มผู้สูงอายุ แม้แต่ตัวข้าพเจ้าเองซึ่งเป็นคนรุ่นใหม่
                                    ก็ขอยอมรับตามตรงว่าไม่เคยพูดภาษามอญ ศึกษาภาษามอญ
                                    หรือแม้แต่ปฏิบัติตามขนบธรรมเนียมแบบมอญ</p>
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
                                <p>ข้าพเจ้าใช้เวลาปฏิบัติธรรมและสอบถามผู้คนต่าง ๆ อยู่เป็นเวลานาน
                                    จึงเข้าใจถึงธรรมชาติของทุกสิ่งที่เป็นไป</p>
                                <p>จากทวารวดีสู่หงสาวดี จากพระปฐมเจดีย์ถึงชเวมอดอ อารยธรรมที่เคยยิ่งใหญ่ในโลก
                                    ล้วนมีจุดเริ่มต้นที่เรียบง่าย ไปสู่จุดรุ่งเรืองที่สูงสุด
                                    จนเข้าสู่จุดถดถอย และสุดท้ายเลือนหายไปตามกาลเวลา</p>
                                <p>วันหนึ่งภาษา วัฒนธรรม ขนบธรรมเนียม หรือแม้แต่อัตลักษณ์
                                    ก็ต้องถูกลืมเลือนไปจากอิธิพลของวัฒนธรรมหลักในประเทศนั้นๆที่ชาวมอญอยู่</p>
                                <p>เมื่อเห็นเป็นเช่นนี้แล้ว ข้าพเจ้าจึงมีความตั้งมั่นด้วยใจจริง
                                    ที่จะรวบรวมและเก็บรักษาไว้ซึ่งอารยธรรมมอญ อันประกอบด้วยภาษา ประวัติศาสตร์ ศิลปะ
                                    วัฒนธรรม และพระพุทธศาสนา ให้อยู่ในรูปแบบของเทคโนโลยีสมัยใหม่ที่สุดเท่าที่จะมี</p>
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
                                <p>จึงถือกำเนิดเป็นโปรเจค The Mon Language: Learning System
                                    ขึ้นซึ่งเป็นแพลตฟอร์มที่ข้าพเจ้าจะถ่ายทอดความรู้จากการที่ข้าพเจ้าได้ศึกษาค้นคว้าจากงานวิจัย
                                    แบบเรียนต่างๆ ซึ่งข้าพเจ้าหวังว่าจะได้รับความชาวยเหลือจากชุมชนชาวมอญและนักวิชาการ
                                    และในอนาคตข้าพเจ้าจะขยายแพลตฟอร์มนี้ให้ครอบคลุมในส่วนต่าง ๆ ต่อไป</p>
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
    </div>
</template>

<script>

import about from '@/services/abouts/about';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: "CompAbout",
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            about: about,
            langSet: displayLanguages.langSet
        }
    }
}

</script>
