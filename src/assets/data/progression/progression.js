const levelCompare = [
    {
        min: 0,
        max: 100,
        lvl: 1
    },
    {
        min: 101,
        max: 200,
        lvl: 2
    },
    {
        min: 201,
        max: 400,
        lvl: 3
    },
    {
        min: 401,
        max: 800,
        lvl: 4
    },
    {
        min: 801,
        max: 1500,
        lvl: 5
    },
    {
        min: 1501,
        max: 2700,
        lvl: 6
    },
    {
        min: 2701,
        max: 4600,
        lvl: 7
    },
    {
        min: 4601,
        max: 7600,
        lvl: 8
    },
    {
        min: 7601,
        max: 12000,
        lvl: 9
    },
    {
        min: 12001,
        max: 18500,
        lvl: 10
    },
    {
        min: 18501,
        max: 27500,
        lvl: 11
    },
    {
        min: 27501,
        max: 39500,
        lvl: 12
    },
    {
        min: 39501,
        max: 55500,
        lvl: 13
    },
    {
        min: 55501,
        max: 76000,
        lvl: 14
    },
    {
        min: 76001,
        max: 101500,
        lvl: 15
    },
    {
        min: 101501,
        max: 132500,
        lvl: 16
    },
    {
        min: 132501,
        max: 170000,
        lvl: 17
    },
    {
        min: 170001,
        max: 215000,
        lvl: 18
    },
    {
        min: 215001,
        max: 268500,
        lvl: 19
    },
    {
        min: 268501,
        max: 331500,
        lvl: 20
    },
    {
        min: 331501,
        max: 405000,
        lvl: 21
    },
    {
        min: 405001,
        max: 490000,
        lvl: 22
    },
    {
        min: 490001,
        max: 587500,
        lvl: 23
    },
    {
        min: 587501,
        max: 698500,
        lvl: 24
    },
    {
        min: 698501,
        max: 824000,
        lvl: 25
    },
    {
        min: 824001,
        max: 965000,
        lvl: 26
    },
    {
        min: 965001,
        max: 1122500,
        lvl: 27
    },
    {
        min: 1122501,
        max: 1297500,
        lvl: 28
    },
    {
        min: 1297501,
        max: 1491000,
        lvl: 29
    },
    {
        min: 1491001,
        max: 1704000,
        lvl: 30
    },
    {
        min: 1704001,
        max: 1937500,
        lvl: 31
    },
    {
        min: 1937501,
        max: 2192500,
        lvl: 32
    },
    {
        min: 2192501,
        max: 2470000,
        lvl: 33
    },
    {
        min: 2470001,
        max: 2771000,
        lvl: 34
    },
    {
        min: 2771001,
        max: 3096500,
        lvl: 35
    },
    {
        min: 3096501,
        max: 3447500,
        lvl: 36
    },
    {
        min: 3447501,
        max: 3825000,
        lvl: 37
    },
    {
        min: 3825001,
        max: 4230000,
        lvl: 38
    },
    {
        min: 4230001,
        max: 4663500,
        lvl: 39
    },
    {
        min: 4663501,
        max: 5126500,
        lvl: 40
    },
    {
        min: 5126501,
        max: 5620000,
        lvl: 41
    },
    {
        min: 5620001,
        max: 6145000,
        lvl: 42
    },
    {
        min: 6145001,
        max: 6703500,
        lvl: 43
    },
    {
        min: 6703501,
        max: 7296500,
        lvl: 44
    },
    {
        min: 7296501,
        max: 7925000,
        lvl: 45
    },
    {
        min: 7925001,
        max: 8590000,
        lvl: 46
    },
    {
        min: 8590001,
        max: 9292500,
        lvl: 47
    },
    {
        min: 9292501,
        max: 10034000,
        lvl: 48
    },
    {
        min: 10034001,
        max: 10815000,
        lvl: 49
    },
    {
        min: 10815001,
        max: 11637500,
        lvl: 50
    },
    {
        min: 11637501,
        max: 12502500,
        lvl: 51
    },
    {
        min: 12502501,
        max: 13411000,
        lvl: 52
    },
    {
        min: 13411001,
        max: 14364000,
        lvl: 53
    },
    {
        min: 14364001,
        max: 15362500,
        lvl: 54
    },
    {
        min: 15362501,
        max: 16407500,
        lvl: 55
    },
    {
        min: 16407501,
        max: 17500000,
        lvl: 56
    },
    {
        min: 17500001,
        max: 18641000,
        lvl: 57
    },
    {
        min: 18641001,
        max: 19832500,
        lvl: 58
    },
    {
        min: 19832501,
        max: 21075500,
        lvl: 59
    },
    {
        min: 21075501,
        max: 22371000,
        lvl: 60
    },
    {
        min: 22371001,
        max: 23720000,
        lvl: 61
    },
    {
        min: 23720001,
        max: 25123500,
        lvl: 62
    },
    {
        min: 25123501,
        max: 26582500,
        lvl: 63
    },
    {
        min: 26582501,
        max: 28098000,
        lvl: 64
    },
    {
        min: 28098001,
        max: 29671000,
        lvl: 65
    },
    {
        min: 29671001,
        max: 31302500,
        lvl: 66
    },
    {
        min: 31302501,
        max: 32993500,
        lvl: 67
    },
    {
        min: 32993501,
        max: 34745000,
        lvl: 68
    },
    {
        min: 34745001,
        max: 36558000,
        lvl: 69
    },
    {
        min: 36558001,
        max: 38433500,
        lvl: 70
    },
    {
        min: 38433501,
        max: 40372500,
        lvl: 71
    },
    {
        min: 40372501,
        max: 42376000,
        lvl: 72
    },
    {
        min: 42376001,
        max: 44445000,
        lvl: 73
    },
    {
        min: 44445001,
        max: 46580500,
        lvl: 74
    },
    {
        min: 46580501,
        max: 48784000,
        lvl: 75
    },
    {
        min: 48784001,
        max: 51057500,
        lvl: 76
    },
    {
        min: 51057501,
        max: 53402000,
        lvl: 77
    },
    {
        min: 53402001,
        max: 55818500,
        lvl: 78
    },
    {
        min: 55818501,
        max: 58308000,
        lvl: 79
    },
    {
        min: 58308001,
        max: 60871500,
        lvl: 80
    },
    {
        min: 60871501,
        max: 63510000,
        lvl: 81
    },
    {
        min: 63510001,
        max: 66224500,
        lvl: 82
    },
    {
        min: 66224501,
        max: 69016000,
        lvl: 83
    },
    {
        min: 69016001,
        max: 71885500,
        lvl: 84
    },
    {
        min: 71885501,
        max: 74833000,
        lvl: 85
    },
    {
        min: 74833001,
        max: 77859500,
        lvl: 86
    },
    {
        min: 77859501,
        max: 80966000,
        lvl: 87
    },
    {
        min: 80966001,
        max: 84153500,
        lvl: 88
    },
    {
        min: 84153501,
        max: 87422000,
        lvl: 89
    },
    {
        min: 87422001,
        max: 90772500 + 9999999999999999999999999999999,
        lvl: 90
    }
]

export default {

    calLevelFromEXP(exp) {
        // normalize input
        const e = Number(exp) || 0;
        const value = Math.max(0, Math.floor(e));

        // find direct match in levelCompare
        const found = levelCompare.find(l => value >= l.min && value <= l.max);
        if (found) {
            const expInLevel = value - found.min;
            const rangeSize = found.max - found.min + 1;
            const percent = Math.min(100, Math.max(0, Math.round((expInLevel / rangeSize) * 100)));
            return {
                lvl: found.lvl,
                min: found.min,
                max: found.max,
                expInLevel,
                percent
            };
        }

        // if value is higher than known ranges, extrapolate using the last range size
        const last = levelCompare[levelCompare.length - 1];
        if (value > last.max) {
            const rangeSize = last.max - last.min + 1;
            const extra = value - last.max;
            const extraLevels = Math.floor(extra / rangeSize) + 1; // how many levels beyond last
            const lvl = last.lvl + extraLevels;
            const newMin = last.max + (extraLevels - 1) * rangeSize + 1;
            const newMax = last.max + extraLevels * rangeSize;
            const expInLevel = value - newMin;
            const percent = Math.min(100, Math.max(0, Math.round((expInLevel / (newMax - newMin + 1)) * 100)));
            return { lvl, min: newMin, max: newMax, expInLevel, percent };
        }

        // value is below first range
        const first = levelCompare[0];
        return { lvl: first.lvl, min: first.min, max: first.max, expInLevel: 0, percent: 0 };
    }
}