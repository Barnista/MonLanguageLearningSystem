<template>
    <div ref="container" class="hex-container">
        <svg ref="svg"></svg>

        <div v-show="tooltip.visible" class="tooltip" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }">
            <strong>{{ tooltip.name }}</strong><br />
            <span class="native">{{ tooltip.native }}</span><br />
            <small>{{ tooltip.code }}</small>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const container = ref(null);
const svg = ref(null);

const tooltip = ref({
    visible: false,
    x: 0,
    y: 0,
    name: "",
    native: "",
    code: ""
});

const hexRadius = 34;

/* ---- HEX GEOMETRY ---- */
function hexPoints(cx, cy, r) {
    return d3.range(6).map(i => {
        const angle = Math.PI / 3 * i + Math.PI / 6;
        return [
            cx + r * Math.cos(angle),
            cy + r * Math.sin(angle)
        ];
    });
}

onMounted(async () => {
    const width = container.value.clientWidth;
    const height = container.value.clientHeight;

    const svgEl = d3.select(svg.value)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("width", width)
        .attr("height", height);

    const data = await d3.json("@/assets/data/communitites/mon-communities.json");

    const cols = Math.floor(width / (hexRadius * 1.8));

    data.forEach((d, i) => {
        d.q = i % cols;
        d.r = Math.floor(i / cols);
    });

    const g = svgEl.append("g")
        .attr("transform", `translate(${hexRadius * 2}, ${hexRadius * 2})`);

    g.selectAll("polygon")
        .data(data)
        .enter()
        .append("polygon")
        .attr("points", d => {
            const x = d.q * hexRadius * 1.75;
            const y =
                d.r * hexRadius * 1.52 +
                (d.q % 2 ? hexRadius * 0.75 : 0);

            return hexPoints(x, y, hexRadius)
                .map(p => p.join(","))
                .join(" ");
        })
        .attr("fill", "#26263a")
        .attr("stroke", "#666690")
        .attr("stroke-width", 1.2)
        .style("cursor", "pointer")

        /* ---- INTERACTION ---- */
        .on("mouseenter", (e, d) => {
            d3.select(e.currentTarget)
                .attr("fill", "#3f3f66")
                .attr("stroke", "#d4b96a");

            tooltip.value = {
                visible: true,
                x: e.pageX + 14,
                y: e.pageY + 14,
                name: d.name,
                native: d.name2,
                code: d.code
            };
        })

        .on("mousemove", e => {
            tooltip.value.x = e.pageX + 14;
            tooltip.value.y = e.pageY + 14;
        })

        .on("mouseleave", e => {
            d3.select(e.currentTarget)
                .attr("fill", "#26263a")
                .attr("stroke", "#666690");

            tooltip.value.visible = false;
        })

        .on("click", (e, d) => {
            console.log("Selected:", d);
            alert(`${d.name2}\n${d.name}`);
        });
});
</script>

<style scoped>
.hex-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #0d0d14;
    overflow: hidden;
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
