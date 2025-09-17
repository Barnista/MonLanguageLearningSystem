import dbNumerals from "./db-numerals"

export default {
    clock: {
        second: {
            letter: "စက္က",
            letterEN: "second",
            letterTH: "วินาที",
            ipa: "caˀk-kaˀ",
            th: "จัก-กะ"
        },
        minute: {
            letter: "မဏေတ်",
            letterEN: "minute",
            letterTH: "นาที",
            ipa: "mɛ̀ˀ-net",
            th: "เมี่ยะ-เนด"
        },
        hour: {
            letter: "နာဍဳ",
            letterEN: "o'clock",
            letterEN2: "hour",
            letterTH: "นาฬิกา",
            letterTH2: "ชั่วโมง",
            ipa: "nɛ̀a-ɗaɪ",
            th: "เนีย-ดอย"
        },
    },
    clockAmPm: {
        am: {
            letter: "နူဂယး",
            letterEN: "am",
            letterTH: "ก่อนเที่ยงวัน",
            ipa: "nù-kɛ̀ˀ-jɛ̀h",
            th: "นู่-เกี่ยะ-เยี่ยฮ"
        },
        pm: {
            letter: "တ္ၚဲစေင်",
            letterEN: "pm",
            letterTH: "หลังเที่ยงวัน",
            ipa: "taˀŋoa-cɒŋ",
            th: "ตะงัว-เจียง"
        }
    },
    clockLegacy: {
        from1before6: {
            letter: "တက်",
            letterTH: "ตี",
            letterEN: "am",
            ipa: "taˀk",
            th: "ตัก",
            fromHour: 1,
            beforeHour: 6,
            hourRequired: true
        },
        from6before7: {
            letter: "အရုဏ်တိုန်",
            letterTH: "รุ่งอรุณ",
            letterEN: "dawn",
            ipa: "ʔaˀ-rùˀn-tɒn",
            th: "อะ-รุ่น-ตอฺน",
            fromHour: 6,
            beforeHour: 7
        },
        from7Before12: {
            letter: "နူဂယး",
            letterTH: "โมงเช้า",
            letterEN: "am",
            ipa: "nù-kɛ̀ˀ-jɛ̀h",
            th: "นู่-เกี่ยะ-เยี่ยฮ",
            fromHour: 7,
            beforeHour: 12,
            hourRequired: true
        },
        from12Before13: {
            letter: "တ္ၚဲဓဝ်",
            letterTH: "เที่ยง",
            letterEN: "pm",
            ipa: "taˀŋoa-tʰòw",
            th: "ตะงัว-โท่ว",
            fromHour: 12,
            beforeHour: 13,
            hourRequired: false
        },
        from13before16: {
            letter: "တ္ၚဲစေင်",
            letterTH: "บ่าย",
            letterEN: "pm",
            ipa: "taˀŋoa-cɒŋ",
            th: "ตะงัว-จอฺง",
            fromHour: 13,
            beforeHour: 16,
            hourRequired: true
        },
        from16before19: {
            letter: "ကြန်သမဲ",
            letterTH: "โมงเย็น",
            letterEN: "pm",
            ipa: "krɒn-saˀ-mòa",
            th: "กรอน-ซะ-มั่ว",
            fromHour: 16,
            beforeHour: 19,
            hourRequired: true
        },
        from19before24: {
            letter: "တ္ၚဲပၠိုတ်",
            letterTH: "ทุ่ม",
            letterEN: "pm",
            ipa: "taˀŋoa-plɒt",
            th: "ตะงัว-ปลอฺด",
            fromHour: 19,
            beforeHour: 24,
            hourRequired: true
        },
        from24before1: {
            letter: "သ္ဂာတ္ၚဲ",
            letterTH: "เที่ยงคืน",
            letterEN: "am",
            ipa: "saˀ-kɛ̀a-taˀŋoa",
            th: "ซะ-เกีย-ตะงัว",
            fromHour: 0,
            beforeHour: 1,
            hourRequired: false
        },
    },
    clockSun: {
        dawn: {
            letter: "ပယာံအရုဏ်တိုန်",
            letterEN: "dawn",
            letterTH: "รุ่งอรุณ",
            ipa: "paˀ-jèm-ʔaˀ-rùˀn-tɒn",
            th: "ปะ-เย่ม-อะ-รุ่น-ตอฺน",
            fromHour: 5,
            beforeHour: 8
        },
        morning: {
            letter: "ပယာံနူဂယး",
            letterEN: "morning",
            letterTH: "เช้า",
            ipa: "paˀ-jèm-nù-kɛ̀ˀ-jɛ̀h",
            th: "ปะ-เย่ม-นู่-เกี่ยะ-เยี่ยฮ",
            fromHour: 8,
            beforeHour: 10
        },
        noon: {
            letter: "ပယာံတ္ၚဲဓဝ်",
            letterEN: "noon",
            letterTH: "เที่ยง",
            ipa: "taˀŋoa-tʰòw",
            th: "ตะงัว-โท่ว",
            fromHour: 12,
            beforeHour: 13,
        },
        afternoon: {
            letter: "ပယာံတ္ၚဲစေၚ်",
            letterEN: "afternoon",
            letterTH: "บ่าย",
            ipa: "taˀŋoa-cɒŋ",
            th: "ตะงัว-จอฺง",
            fromHour: 13,
            beforeHour: 16
        },
        dusk: {
            letter: "ပယာံကြန်သမဲ",
            letterEN: "dusk",
            letterTH: "เย็น",
            ipa: "krɒn-saˀ-mòa",
            th: "กรอน-ซะ-มั่ว",
            fromHour: 16,
            beforeHour: 18
        },
        night: {
            letter: "ပယာံဗ္တံ",
            letterEN: "night",
            letterTH: "กลางคืน",
            ipa: "paˀ-jèm-pɛ̀ˀ-tɔmˀ",
            th: "ปะ-เย่ม-เปี่ยะ-ตอฺม",
            fromHour: 18,
            beforeHour: 24
        },
        midnight: {
            letter: "ပယာံသ္ဂာဗ္တံ",
            letterEN: "midnight",
            letterTH: "เที่ยงคืน",
            ipa: "saˀ-kɛ̀a-pɛ̀ˀ-tɔmˀ",
            th: "ซะ-เกีย-เปี่ยะ-ตอฺม",
            fromHour: 24,
            beforeHour: 1
        }
    },
    calendar: {
        day: {
            letter: "တ္ၚဲ",
            letterEN: "day",
            letterTH: "วัน",
            ipa: "taˀŋoa",
            th: "ตะงัว"
        },
        week: {
            letter: "သတ္တဟ",
            letterEN: "week",
            letterTH: "สัปดาห์",
            ipa: "sɒt-taˀ-haˀ",
            th: "ซอด-ตะ-ฮะ"
        },
        month: {
            letter: "ဂိတု",
            letterEN: "month",
            letterTH: "เดือน",
            ipa: "kìˀ-taò",
            th: "กิ่-เต่า"
        },
        year: {
            letter: "သၞာံ",
            letterEN: "year",
            letterTH: "ปี",
            ipa: "saˀnam",
            th: "ซะนาม"
        },
    },
    calendarFormats: ["date month year", "dd/MM/yyyy"],
    yearSystems: [
        {
            letter: "ခရေတသက္ကရာဇ်",
            letterEN: "Christian Era",
            letterTH: "คริสตศักราช",
            ipa: "kʰaˀ-rè-taˀ-saˀk-kaˀ-ra̤c",
            th: "คะ-เร่-ตะ-ซัก-กะ-ร่าจ",
            abbriviation: "ခသ",
            abbriviationEN: "CE",
            abbriviationTH: "ค.ศ.",
            startYear: 0
        },
        {
            letter: "ဗုဒ္ဓသက္ကရာဇ်",
            letterEN: "Buddhist Era",
            letterTH: "พุทธศักราช",
            ipa: "pùˀt-tʰɛ̀ˀ-saˀk-kaˀ-ra̤c",
            th: "ปุ่ด-เที่ยะ-ซัก-กะ-ร่าจ",
            abbriviation: "ဗသ",
            abbriviationEN: "BE",
            abbriviationTH: "พ.ศ.",
            startYear: -543
        },
    ],
    historicalYearSystems: [
        {
            letter: "ရတ္တနကောဝ်သိန်သက္ကရာဇ်",
            letterEN: "Rattanakosin Era",
            letterTH: "รัตนโกสินศก",
            ipa: "ròt-taˀ-nɛ̀ˀ-kow-sɔeˀn-saˀk-kaˀ-ra̤c",
            th: "ร่ด-ตะ-เนี่ยะ-โกว-ซิน-ซัก-กะ-ร่าจ",
            abbriviation: "ရသ",
            abbriviationEN: "RE",
            abbriviationTH: "ร.ศ.",
            startYear: 1781,
            descriptionEN: "Years since the founding of Rattanakosin Kingdom (Modern day Thailand).",
            descriptionTH: "นับปีตั้งแต่การสถาปนาอาณาจักรรัตนโกสิน (ปัจจุบัน ประเทศไทย)"
        },
        {
            letter: "ဟံသာသက္ကရာဇ်",
            letterEN: "Hongsawadi Era",
            letterTH: "หงสาศักราช",
            ipa: "hɒm-sa-saˀk-kaˀ-ra̤c",
            th: "ฮอม-ซา-ซัก-กะ-ร่าจ",
            abbriviation: "ဟသ",
            abbriviationEN: "HE",
            abbriviationTH: "ห.ศ.",
            startYear: 1287,
            descriptionEN: "Years since the founding of Hongsawadi Kingdom.",
            descriptionTH: "นับปีตั้งแต่การสถาปนาอาณาจักรหงสาวดี"
        },
        {
            letter: "မြန်မာသက္ကရာဇ်",
            letterEN: "Myanmar Era",
            letterTH: "จุลศักราช",
            ipa: "mɛ̤ˀròn-mɛ̀a-saˀk-kaˀ-ra̤c",
            th: "เมียะร่น-เมีย-ซัก-กะ-ร่าจ",
            abbriviation: "မသ",
            abbriviationEN: "ME",
            abbriviationTH: "จ.ศ.",
            startYear: 638,
            descriptionEN: "Years since King Popa Sawrahan of Pegan Kingdom recalibrated the lunar calendar.",
            descriptionTH: "นับปีตั้งแต่พระเจ้า โปปาซอว์ราฮัน กษัตริย์แห่งอาณาจักรพุกาม ได้ปรับเทียบปฏิทินทางจันทรคติใหม่"
        },
        {
            letter: "သုဝဏ္ဏဘူမိသက္ကရာဇ်",
            letterEN: "Suwunnabumi Era",
            letterTH: "สุวรรณภูมิศักราช",
            ipa: "su-wòn-naˀ-pʰù-mìˀ-saˀk-kaˀ-ra̤c",
            th: "ซุ-ว่น-นะ-พู่-มิ่-ซัก-กะ-ร่าจ",
            abbriviation: "သသ",
            abbriviationEN: "SE",
            abbriviationTH: "ส.ศ.",
            startYear: -400,
            descriptionEN: "Years since the founding of Thaton Kingdom.",
            descriptionTH: "นับปีตั้งแต่การสถาปนาอาณาจักรสะเทิม (สุวรรณภูมิ)"
        },
    ],
    months: [
        {
            month: 1,
            days: 31,
            letter: "ဂျာန်ဏာဝရဳ",
            letterEN: "January",
            letterTH: "มกราคม",
            ipa: "kja̤n-na-wɛ̀ˀ-rì",
            th: "กย่าน-นา-เวี่ยะ-รี่",
        },
        {
            month: 2,
            days: 28,
            letter: "ဖေဖဝ်ဝရဳ",
            letterEN: "Febuary",
            letterTH: "กุมภาพันธ์",
            ipa: "pʰe-pʰɒw-wɛ̀ˀ-rì",
            th: "เพ-พอว-เวี่ยะ-รี่",
        },
        {
            month: 3,
            days: 31,
            letter: "မာဇ်",
            letterEN: "March",
            letterTH: "มีนาคม",
            ipa: "ma̤c",
            th: "ม่าจ",
        },
        {
            month: 4,
            days: 30,
            letter: "အေပြဳလ်",
            letterEN: "April",
            letterTH: "เมษายน",
            ipa: "ʔe-pri",
            th: "เอ-ปรี",
        },
        {
            month: 5,
            days: 31,
            letter: "မေ",
            letterEN: "May",
            letterTH: "พฤษภาคม",
            ipa: "mè",
            th: "เม่",
        },
        {
            month: 6,
            days: 30,
            letter: "ဂျုန်",
            letterEN: "June",
            letterTH: "มิถุนายน",
            ipa: "kjùˀn",
            th: "กยุ่น",
        },
        {
            month: 7,
            days: 31,
            letter: "ဂျူလာယ်",
            letterEN: "July",
            letterTH: "กรกฎาคม",
            ipa: "kjù-la̤i",
            th: "กยู่-ล่าย",
        },
        {
            month: 8,
            days: 31,
            letter: "အဝ်ဂါသ်",
            letterEN: "August",
            letterTH: "สิงหาคม",
            ipa: "ʔɒw-ka̤s",
            th: "ออว-ก่าซ",
        },
        {
            month: 9,
            days: 30,
            letter: "သေပ်တေမ်ဗာ",
            letterEN: "September",
            letterTH: "กันยายน",
            ipa: "sep-tem-pɛ̀a",
            th: "เซบ-เตม-เปีย",
        },
        {
            month: 10,
            days: 31,
            letter: "အံက်တဝ်ဗာ",
            letterEN: "October",
            letterTH: "ตุลาคม",
            ipa: "ʔɒk-tɒw-pɛ̀a",
            th: "ออก-ตอว-เปีย",
        },
        {
            month: 11,
            days: 30,
            letter: "နောဝေမ်ဗာ",
            letterEN: "November",
            letterTH: "พฤศจิกายน",
            ipa: "nəʊ-wèm-pɛ̀a",
            th: "โนว-เว่ม-เปีย",
        },
        {
            month: 12,
            days: 31,
            letter: "ဒဳဇြေမ်ဗာ",
            letterEN: "December",
            letterTH: "ธันวาคม",
            ipa: "tì-crèm-pɛ̀a",
            th: "ตี่-เจร่ม-เปีย",
        }
    ],
    lunarMonths: [
        {
            lunarMonth: 1,
            month: 12,
            letter: "မြာ်ကသဵု",
            letterEN: "Month 1",
            letterTH: "เดือน ๑ (อ้าย)",
            ipa: "mɛ̤ˀra̤k-kaˀ-sɒw",
            th: "เมียะร่าก-กะ-ซอฺว",
        },
        {
            lunarMonth: 2,
            month: 1,
            letter: "ပုဟ်",
            letterEN: "Month 2",
            letterTH: "เดือน ๒ (ยี่)",
            ipa: "pùh",
            th: "ปุฮ",
        },
        {
            lunarMonth: 3,
            month: 2,
            letter: "မာ်",
            letterEN: "Month 3",
            letterTH: "เดือน ๓",
            ipa: "ma̤k",
            th: "ม่าก",
        },
        {
            lunarMonth: 4,
            month: 3,
            letter: "ဖဝ်ရဂိုန်",
            letterEN: "Month 4",
            letterTH: "เดือน ๔",
            ipa: "pʰɒw-rɛ̀ˀ-kɤˀn",
            th: "พอว-เรี่ยะ-เกิ่น",
        },
        {
            lunarMonth: 5,
            month: 4,
            letter: "စဲ",
            letterEN: "Month 5",
            letterTH: "เดือน ๕",
            ipa: "coa",
            th: "จัว",
        },
        {
            lunarMonth: 6,
            month: 5,
            letter: "ပသာ်",
            letterEN: "Month 6",
            letterTH: "เดือน ๖",
            ipa: "paˀ-sak",
            th: "ปะ-ซาก",
        },
        {
            lunarMonth: 7,
            month: 6,
            letter: "ဇှ်ေ",
            letter2: "ဇေဟ်",
            letterEN: "Month 7",
            letterTH: "เดือน ๗",
            ipa: "cèˀh",
            th: "เจ่ฮ",
        },
        {
            lunarMonth: 8,
            month: 7,
            letter: "ဒဂိုန်",
            letter2: "အသာတ်",
            letterEN: "Month 8",
            letterTH: "เดือน ๘",
            ipa: "tɛ̀ˀ-kɤˀn",
            th: "เตี่ยะ-เกิ่น",
        },
        {
            lunarMonth: 9,
            month: 8,
            letter: "ဂ္ဍဲသဳ",
            letter2: "သ္ဍဲသဳ",
            letterEN: "Month 9",
            letterTH: "เดือน ๙",
            ipa: "kɛ̀ˀ-ɗoa-saɪ",
            th: "เกี่ยะ-ดัว-ซอย",
        },
        {
            lunarMonth: 10,
            month: 9,
            letter: "ဘတ်",
            letterEN: "Month 10",
            letterTH: "เดือน ๑๐",
            ipa: "pʰòt",
            th: "พ่ด",
        },
        {
            lunarMonth: 11,
            month: 10,
            letter: "ဝဟ်",
            letterEN: "Month 11",
            letterTH: "เดือน ๑๑",
            ipa: "wòh",
            th: "โว่ฮ",
        },
        {
            lunarMonth: 12,
            month: 11,
            letter: "ဂထိုန်",
            letterEN: "Month 12",
            letterTH: "เดือน ๑๒",
            ipa: "kɛ̀ˀ-tʰɒn",
            th: "เกี่ยะ-ทอฺน",
        },
    ],
    days: [
        {
            day: 1,
            letter: "တ္ၚဲအဒိုတ်",
            letterEN: "Sunday",
            letterTH: "วันอาทิตย์",
            ipa: "taˀŋoa-ʔaˀ-tɤˀt",
            th: "ตะงัว-อะ-เติ่ด",
        },
        {
            day: 2,
            letter: "တ္ၚဲစန်",
            letterEN: "Monday",
            letterTH: "วันจันทร์",
            ipa: "taˀŋoa-cɒn",
            th: "ตะงัว-จอน",
        },
        {
            day: 3,
            letter: "တ္ၚဲအၚါ",
            letterEN: "Tuesday",
            letterTH: "วันอังคาร",
            ipa: "taˀŋoa-ʔaˀ-ŋɛ̀a",
            th: "ตะงัว-อะ-เงีย",
        },
        {
            day: 4,
            letter: "တ္ၚဲဗုဒ္ဓဝါ",
            letterEN: "Wednesday",
            letterTH: "วันพุทธ",
            ipa: "taˀŋoa-pùˀt-tʰɛ̀ˀ-wɛ̀a",
            th: "ตะงัว-ปุ่ด-เที่ยะ-เวีย",
        },
        {
            day: 5,
            letter: "တ္ၚဲဗြဴဗတိ",
            letterEN: "Thursday",
            letterTH: "วันพฤหัสบดี",
            ipa: "taˀŋoa-prɛ̀a-pɛ̀ˀ-tɔɪ",
            th: "ตะงัว-เปรีย-เปี่ยะ-ตอฺย",
        },
        {
            day: 6,
            letter: "တ္ၚဲသိုက်",
            letterEN: "Friday",
            letterTH: "วันศุกร์",
            ipa: "taˀŋoa-sɒk",
            th: "ตะงัว-ซาฺก",
        },
        {
            day: 7,
            letter: "တ္ၚဲသ္ၚိသဝ်",
            letterEN: "Saturday",
            letterTH: "วันเสาร์",
            ipa: "taˀŋoa-saˀŋɔɪ-sɒw",
            th: "ตะงัว-ซะงอฺย-ซอว",
        },
    ],
    zeroPad(num, places) {
        if (Number(num) < 10) return String(num).padStart(places, '0');
        else return String(num)
    },
    convertToOClock(hour, minute, second) {
        const mon_h = dbNumerals.convertFromArabic(hour);
        const mon_m = dbNumerals.convertFromArabic(this.zeroPad(minute, 2));
        const mon_s = dbNumerals.convertFromArabic(this.zeroPad(second, 2));

        let letter = "";
        let letterEN = "";
        let letterTH = "";
        let spelling = "";
        let ipa = "";
        let th = "";

        letter += `${mon_h.monNum}:${mon_m.monNum} ${this.clock.hour.letter} ${(mon_s.arabicNum != '00') ? mon_s.monNum + ` ${this.clock.second.letter}` : ''}`;
        spelling += `${mon_h.spelling}-${this.clock.hour.letter}${(mon_m.arabicNum != '00') ? `-${mon_m.spelling}-${this.clock.minute.letter}` : ''}${(mon_s.arabicNum != '00') ? `-${mon_s.spelling}-${this.clock.second.letter}` : ''}`;
        letterEN += `${mon_h.arabicNum}:${mon_m.arabicNum} ${this.clock.hour.letterEN}${(mon_s.arabicNum != '00') ? ` ${mon_s.arabicNum} ${this.clock.second.letterEN}` : ''}`;
        letterTH += `${mon_h.arabicNum}:${mon_m.arabicNum} ${this.clock.hour.letterTH}${(mon_s.arabicNum != '00') ? ` ${mon_s.arabicNum} ${this.clock.second.letterTH}` : ''}`;
        ipa += `${mon_h.ipa}-${this.clock.hour.ipa}${(mon_m.arabicNum != '00') ? `-${mon_m.ipa}-${this.clock.minute.ipa}` : ''}${(mon_s.arabicNum != '00') ? `-${mon_s.ipa}-${this.clock.second.ipa}` : ''}`;
        th += `${mon_h.th}-${this.clock.hour.th}${(mon_m.arabicNum != '00') ? `-${mon_m.th}-${this.clock.minute.th}` : ''}${(mon_s.arabicNum != '00') ? `-${mon_s.th}-${this.clock.second.th}` : ''}`;

        return {
            letter,
            spelling,
            letterEN,
            letterTH,
            ipa,
            th
        }
    },
    convertToAmPm(hour, minute) {
        const mon_h = dbNumerals.convertFromArabic(hour);
        const mon_m = dbNumerals.convertFromArabic(this.zeroPad(minute, 2));
        //const mon_s = dbNumerals.convertFromArabic(this.zeroPad(second, 2));
        const is_am = (Number(hour) < 12);
        const mon_h2 = dbNumerals.convertFromArabic(Number(mon_h.arabicNum) % 12);

        let letter = "";
        let letterEN = "";
        let letterTH = "";
        let spelling = "";
        let ipa = "";
        let th = "";

        letter += `${is_am ? this.clockAmPm.am.letter : this.clockAmPm.pm.letter} ${mon_h2.monNum}:${mon_m.monNum} ${this.clock.hour.letter}`;
        spelling += `${is_am ? this.clockAmPm.am.letter : this.clockAmPm.pm.letter}-${mon_h2.spelling}-${this.clock.hour.letter}${(mon_m.arabicNum != '00') ? `-${mon_m.spelling}-${this.clock.minute.letter}` : ''}`;
        letterEN += `${mon_h2.arabicNum}:${mon_m.arabicNum} ${is_am ? this.clockAmPm.am.letterEN : this.clockAmPm.pm.letterEN}`;
        letterTH += `${mon_h2.arabicNum}:${mon_m.arabicNum} ${is_am ? this.clockAmPm.am.letterTH : this.clockAmPm.pm.letterTH}`;
        ipa += `${is_am ? this.clockAmPm.am.ipa : this.clockAmPm.pm.ipa}-${mon_h2.ipa}-${this.clock.hour.ipa}${(mon_m.arabicNum != '00') ? + `-${mon_m.ipa}-${this.clock.minute.ipa}` : ''}`;
        th += `${is_am ? this.clockAmPm.am.th : this.clockAmPm.pm.th}-${mon_h2.th}-${this.clock.hour.th}${(mon_m.arabicNum != '00') ? `-${mon_m.th}-${this.clock.minute.th}` : ''}`;

        return {
            letter,
            spelling,
            letterEN,
            letterTH,
            ipa,
            th
        }
    },
    convertToLegacy(hour, minute) {
        const mon_h = dbNumerals.convertFromArabic(hour);
        const mon_m = dbNumerals.convertFromArabic(this.zeroPad(minute, 2));
        const mon_h2 = dbNumerals.convertFromArabic(Number(mon_h.arabicNum) % 6);

        const ampm = this.convertToAmPm(hour, minute, 0);

        const h = Number(mon_h.arabicNum);
        let legacy = null;
        for (let key in this.clockLegacy) {
            const item = this.clockLegacy[key];
            if (h >= item.fromHour && h < item.beforeHour) {
                //found the required time
                legacy = item;
            }
        }

        let letter = "";
        let letterEN = "";
        let letterTH = "";
        let spelling = "";
        let ipa = "";
        let th = "";

        letter += `${legacy.letter}${(legacy.hourRequired) ? ` ${mon_h2.monNum} ${this.clock.hour.letter}` : ''}${(mon_m.arabicNum != '00') ? ` ${mon_m.monNum}` : ''}`;
        letterTH += `${(legacy.letterTH == 'ตี') ? `${legacy.letterTH} ` : ''}${(legacy.hourRequired) ? `${mon_h2.arabicNum || 6} ` : ''}${(legacy.letterTH != 'ตี') ? legacy.letterTH : ''}${(mon_m.arabicNum != '00') ? ` ${mon_m.arabicNum}` : ''}${(legacy.letterTH == 'ตี') ? ` ${this.clock.minute.letterTH}` : ''}`;
        letterEN += ampm.letterEN;
        spelling += `${legacy.letter}${(legacy.hourRequired) ? `-${mon_h2.monNum}-${this.clock.hour.letter}` : ''}${(mon_m.arabicNum != '00') ? `-${mon_m.monNum}` : ''}`;
        ipa += `${legacy.ipa}${(legacy.hourRequired) ? `-${mon_h2.ipa}-${this.clock.hour.ipa}` : ''}${(mon_m.arabicNum != '00') ? `-${mon_m.ipa}` : ''}`;
        th += `${legacy.th}${(legacy.hourRequired) ? `-${mon_h2.th}-${this.clock.hour.th}` : ''}${(mon_m.arabicNum != '00') ? `-${mon_m.th}` : ''}`;

        return {
            letter,
            spelling,
            letterEN,
            letterTH,
            ipa,
            th
        }
    },
    getClockExamples() {
        let d1 = new Date("2025-09-09 9:00");
        let d2 = new Date("2025-09-09 12:30");
        let d3 = new Date("2025-09-09 21:45");
        const ex1 = this.convertToOClock(d1.getHours(), d1.getMinutes(), 0);
        const ex2 = this.convertToOClock(d2.getHours(), d2.getMinutes(), 0);
        const ex3 = this.convertToOClock(d3.getHours(), d3.getMinutes(), 0);

        return [
            ex1, ex2, ex3
        ];
    },
    getClockAmPmExamples() {
        let d1 = new Date("2025-09-09 9:00");
        let d2 = new Date("2025-09-09 12:30");
        let d3 = new Date("2025-09-09 21:45");
        const ex1 = this.convertToAmPm(d1.getHours(), d1.getMinutes(), 0);
        const ex2 = this.convertToAmPm(d2.getHours(), d2.getMinutes(), 0);
        const ex3 = this.convertToAmPm(d3.getHours(), d3.getMinutes(), 0);

        return [
            ex1, ex2, ex3
        ];
    },
    getClockLegacyExamples() {
        let d1 = new Date("2025-09-09 6:00");
        let d2 = new Date("2025-09-09 9:00");
        let d3 = new Date("2025-09-09 12:30");
        let d4 = new Date("2025-09-09 14:50");
        let d5 = new Date("2025-09-09 18:15");
        let d6 = new Date("2025-09-09 23:45");
        let d7 = new Date("2025-09-09 00:00");
        let d8 = new Date("2025-09-09 03:08");
        const ex1 = this.convertToLegacy(d1.getHours(), d1.getMinutes(), 0);
        const ex2 = this.convertToLegacy(d2.getHours(), d2.getMinutes(), 0);
        const ex3 = this.convertToLegacy(d3.getHours(), d3.getMinutes(), 0);
        const ex4 = this.convertToLegacy(d4.getHours(), d4.getMinutes(), 0);
        const ex5 = this.convertToLegacy(d5.getHours(), d5.getMinutes(), 0);
        const ex6 = this.convertToLegacy(d6.getHours(), d6.getMinutes(), 0);
        const ex7 = this.convertToLegacy(d7.getHours(), d7.getMinutes(), 0);
        const ex8 = this.convertToLegacy(d8.getHours(), d8.getMinutes(), 0);

        return [
            ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8
        ];
    },
    findMonthByLunarMonth(lunarMonth) {
        const lunar = this.lunarMonths.find(val => val.lunarMonth == lunarMonth);
        if (lunar) {
            const gregor = lunar.month;
            const month = this.months.find(val => val.month == gregor);
            if (month) return month;
        }
        return null;
    },
    getDateMonthYear(date) {
        const d = new Date(date);

        let formatMon = this.calendarFormats[1];
        let formatTH = this.calendarFormats[1];
        let formatEN = this.calendarFormats[1];

        const days = dbNumerals.convertFromArabic(this.zeroPad(d.getDate(), 2));
        formatMon = formatMon.replace('dd', days.monNum);
        formatTH = formatTH.replace('dd', days.thaiNum);
        formatEN = formatEN.replace('dd', days.arabicNum);

        const months = dbNumerals.convertFromArabic(this.zeroPad(d.getMonth() + 1, 2));
        formatMon = formatMon.replace('MM', months.monNum);
        formatTH = formatTH.replace('MM', months.thaiNum);
        formatEN = formatEN.replace('MM', months.arabicNum);

        const yearCE = dbNumerals.convertFromArabic(d.getFullYear());
        const yearBE = dbNumerals.convertFromArabic(d.getFullYear() - this.yearSystems[1].startYear);
        formatMon = formatMon.replace('yyyy', yearBE.monNum);
        formatTH = formatTH.replace('yyyy', yearBE.thaiNum);
        formatEN = formatEN.replace('yyyy', yearCE.arabicNum);

        return {
            letter: formatMon,
            letterEN: formatEN,
            letterTH: formatTH
        }
    },
    getddMMyyyy(date) {
        const d = new Date(date);

        let formatMon = this.calendarFormats[0];
        let formatTH = this.calendarFormats[0];
        let formatEN = this.calendarFormats[0];

        const days = dbNumerals.convertFromArabic(this.zeroPad(d.getDate(), 2));
        formatMon = formatMon.replace('date', days.monNum);
        formatTH = formatTH.replace('date', days.thaiNum);
        formatEN = formatEN.replace('date', days.arabicNum);

        const months = this.months.find(val => val.month == (d.getMonth() + 1));
        formatMon = formatMon.replace('month', months.letter);
        formatTH = formatTH.replace('month', months.letterTH);
        formatEN = formatEN.replace('month', months.letterEN);

        const yearCE = dbNumerals.convertFromArabic(d.getFullYear());
        const yearBE = dbNumerals.convertFromArabic(d.getFullYear() - this.yearSystems[1].startYear);
        formatMon = formatMon.replace('year', `${this.yearSystems[1].abbriviation} ${yearBE.monNum}`);
        formatTH = formatTH.replace('year', `${this.yearSystems[1].abbriviationTH} ${yearBE.thaiNum}`);
        formatEN = formatEN.replace('year', ` ${yearCE.arabicNum}`);

        return {
            letter: formatMon,
            letterEN: formatEN,
            letterTH: formatTH
        }
    }
}