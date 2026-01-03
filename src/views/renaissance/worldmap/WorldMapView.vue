<template>
    <div ref="container" class="hex-container" :style="{ backgroundImage: 'url(' + worldmapBG + ')' }">
        <div class="text-center text-dark mt-2 mt-md-3 mt-lg-4">
            <h1 class="p-0 fw-bold d-flex justify-content-center align-items-center">
                <img src="@/assets/old-logo.png" height="64">
                <span class="mt-3 mx-5">RAMANNADESA</span>
                <img src="@/assets/old-logo-flip.png" height="64">
            </h1>
            <h3 class="fw-bold">ရာမညဒေသ - ဒေသရးမည - รามัญประเทศ</h3>
            <h5>Mon Communities World Map</h5>
        </div>
        <div class="mt-4 row">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <div style="width: 100%; height: 100vh; position: relative; overflow-x: auto;">
                    <svg ref="svg" style="width: 100%; height: 100%;"></svg>
                    <div ref="tooltip" class="tooltip"
                        :style="{ left: this.tooltip.x + 'px', top: this.tooltip.y + 'px' }">
                        <strong>{{ this.tooltip.name }}</strong><br />
                        <span class="native">{{ this.tooltip.native }}</span><br />
                        <small>{{ this.tooltip.code }}</small>
                    </div>
                </div>
            </div>
        </div>
        <HexWorldModal ref="hexWorldModal" :lang="'en'" />
    </div>
</template>
<script>
import * as d3 from "d3";
import worldmapBG from "@/assets/imgs/maps/worldmap.jpg";
import HexWorldModal from '@/components/renaissance/worldmap/HexWorldModal.vue';

export default {
    components: {
        HexWorldModal
    },
    data() {
        return {
            worldmapBG,
            tooltip: {
                visible: false,
                x: 0,
                y: 0,
                name: '',
                native: '',
                code: ''
            }
        };
    },
    created() {

    },
    async mounted() {
        let hexRadius = 0;
        if (window.innerWidth < 400) {
            hexRadius = 16;
        } else if (window.innerWidth < 600) {
            hexRadius = 18;
        } else if (window.innerWidth < 900) {
            hexRadius = 30;
        } else if (window.innerWidth < 1200) {
            hexRadius = 38;
        } else if (window.innerWidth < 1600) {
            hexRadius = 50; // Adjust the divisor for desired scaling
        } else {
            hexRadius = 56;
        }

        const width = this.$refs.container.clientWidth;
        const height = this.$refs.container.clientHeight;

        const svgEl = d3.select(this.$refs.svg)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width", width)
            .attr("height", height);

        const data = await import("@/assets/data/communities/mon-communities.json", { assert: { type: "json" } }).then(m => m.default);

        const cols = 10;
        let mnwCom = 0, mnwPopulation = 0;
        let thaCom = 0, thaPopulation = 0;
        let dspCom = 0, dspPopulation = 0;

        data.forEach((d, i) => {
            d.q = i % cols;
            d.r = Math.floor(i / cols);

            if (d.code.startsWith("MM-")) {
                d.group = "Myanmar";
                d.groupLabel = "မြန်မာ";
                mnwCom++;
                mnwPopulation += d.population;
            }
            else if (d.code.startsWith("TH-")) {
                d.group = "Thailand";
                d.groupLabel = "ဍုၚ်သေံ";
                thaCom++;
                thaPopulation += d.population;
            }
            else {
                d.group = "Diaspora";
                d.groupLabel = "မန်စိုပ်ဌာန်ညး";
                dspCom++;
                dspPopulation += d.population;
            }
        });

        const groupOrigins = {
            Myanmar: { q: 0, r: 0 },
            Thailand: { q: 7, r: 0 },     // ← padding via jump
            Diaspora: { q: 0, r: 4 }      // ← padding via jump
        };
        const groupCounters = {
            Myanmar: 0,
            Thailand: 0,
            Diaspora: 0
        };
        const groupCols = {
            Myanmar: 6,
            Thailand: 6,
            Diaspora: 6
        };
        data.forEach(d => {
            const i = groupCounters[d.group]++;
            const cols = groupCols[d.group];
            const origin = groupOrigins[d.group];

            d.q = origin.q + (i % cols);
            d.r = origin.r + Math.floor(i / cols);
        });

        const color = d3.scaleOrdinal()
            .domain(["Myanmar", "Thailand", "Diaspora"])
            .range(["#3a6f5d", "#6b5b95", "#9c6b3f"]);

        const g = svgEl.append("g")
            .attr("transform", `translate(${hexRadius * 2}, ${hexRadius * 2})`);

        g.selectAll("polygon")
            .data(data)
            .enter()
            .append("polygon")
            .attr("points", d => {
                const { x, y } = this.axialToPixel(d.q, d.r, hexRadius);
                return this.hexPoints(x, y, hexRadius)
                    .map(p => p.join(","))
                    .join(" ");
            })
            .attr("fill", d => color(d.group))
            .attr("stroke", "#666690")
            .attr("stroke-width", d =>
                d.group === "Myanmar" ? 2.2 : 1.2
            )
            .attr("stroke-dasharray", d =>
                d.group === "Diaspora" ? "4,3" : "none"
            )
            .attr("stroke-linejoin", "round")
            .attr("stroke-opacity", 0.85)
            .style("cursor", "pointer")
            /* ---- INTERACTION ---- */
            .on("mouseenter", (e, d) => {
                d3.select(e.currentTarget)
                    .attr("fill", d => d3.rgb(color(d.group)).darker(0.7))
                    .attr("stroke", "#d4b96a");

                this.tooltip = {
                    visible: true,
                    x: e.pageX + 14,
                    y: e.pageY + 14,
                    name: d.name,
                    native: d.name2,
                    code: d.code
                };
            })
            .on("mousemove", e => {
                this.tooltip.x = e.pageX + 14;
                this.tooltip.y = e.pageY + 14;
            })
            .on("mouseleave", e => {
                d3.select(e.currentTarget)
                    .attr("fill", d => color(d.group))
                    .attr("stroke", "#666690");

                this.tooltip.visible = false;
            })
            .on("click", (e, d) => {
                console.log("Selected:", d);
                this.$refs.hexWorldModal.show(d);
            });

        g.selectAll("text.symbol")
            .data(data)
            .enter()
            .append("text")
            .attr("class", "symbol")
            .attr("x", d => this.axialToPixel(d.q, d.r, hexRadius).x)
            .attr("y", d => this.axialToPixel(d.q, d.r, hexRadius).y + 5)
            .text(d => {
                if (d.group === "Myanmar") {
                    if (d.capital) return "⭐";
                    else if (d.historical) return "🛕";
                    return d.population > 1000 ? (d.population / 1000).toFixed(1) + "K" : d.population;
                }
                if (d.group === "Diaspora") {
                    if (d.capital) return "⭐";
                    else if (d.historical) return "🛕";
                    return d.population > 1000 ? (d.population / 1000).toFixed(1) + "K" : d.population;
                }
                if (d.capital) return "⭐";
                else if (d.historical) return "🛕";
                return d.population > 1000 ? (d.population / 1000).toFixed(1) + "K" : d.population;
            })
            .attr("text-anchor", "middle")
            .attr("fill", "#e8dcc2")
            .attr("font-size", hexRadius - (hexRadius / 2))
            .style("cursor", "pointer")
            /* ---- INTERACTION ---- */
            .on("mouseenter", (e, d) => {
                this.tooltip = {
                    visible: true,
                    x: e.pageX + 14,
                    y: e.pageY + 14,
                    name: d.name,
                    native: d.name2,
                    code: d.code
                };
            })
            .on("mousemove", e => {
                this.tooltip.x = e.pageX + 14;
                this.tooltip.y = e.pageY + 14;
            })
            .on("mouseleave", () => {
                this.tooltip.visible = false;
            })
            .on("click", (e, d) => {
                console.log("Selected:", e, d);
                this.$refs.hexWorldModal.show(d);
            });

        const labels = [
            { text: "Myanmar", text2: "မြန်မာ", q: 1, r: -1 },
            { text: "Thailand", text2: "သေံ", q: 9, r: -1 },
            { text: "Diaspora", text2: "မန်ဌာန်ဇမ္ၚောဲ", q: 1, r: 8 }
        ];

        g.append("g")
            .selectAll("text.group-label")
            .data(labels)
            .enter()
            .append("text")
            .attr("x", d => this.axialToPixel(d.q, d.r, hexRadius).x)
            .attr("y", d => this.axialToPixel(d.q, d.r, hexRadius).y)
            .text(d => d.text + " (" + d.text2 + ") | " +
                (d.text === "Myanmar" ? mnwCom :
                    d.text === "Thailand" ? thaCom :
                        dspCom) + " 🏘️" + " | " + (d.text === "Myanmar" ? mnwPopulation.toLocaleString() :
                            d.text === "Thailand" ? thaPopulation.toLocaleString() :
                                dspPopulation.toLocaleString()) + " 👪")
            .attr("fill", "#666")
            .attr("font-size", hexRadius - (hexRadius / 2))
            .attr("font-weight", 600);
    },
    methods: {
        axialToPixel(q, r, radius) {
            const x = radius * Math.sqrt(3) * (q + r / 2);
            const y = radius * 3 / 2 * r;
            return { x, y };
        },
        hexPoints(x, y, radius) {
            const points = [];
            for (let i = 0; i < 6; i++) {
                const angle = Math.PI / 3 * i - Math.PI / 6; // pointy-topped
                const px = x + radius * Math.cos(angle);
                const py = y + radius * Math.sin(angle);
                points.push([px, py]);
            }
            return points;
        }
    }
};
</script>

<style scoped>
.hex-container {
    position: relative;
    background: #0d0d14;
    overflow: hidden;
    background-size: fill;
    background-position: center;
    background-repeat: no-repeat;
}

.tooltip {
    position: absolute;
    background: #1b1b28;
    color: #fff;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 13px;
    pointer-events: none;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
}

.native {
    opacity: 0.8;
}
</style>
