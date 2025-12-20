<template>
    <div id="clock"></div>
</template>

<script>
import { AnalogClock } from "analog-clock-lib";

export default {
    props: {
        size: {
            type: Number,
            default: 220
        }
    },
    mounted() {
        const container = document.getElementById('clock');
        const clock = new AnalogClock(container, {
            size: this.size,
            showNumbers: true,
            theme: {
                face: '#ffffff',
                border: '#333333',
                hourHand: '#333333',
                minuteHand: '#333333',
                secondHand: '#d23f3f'
            }
        });
        clock.start();
    }
}
</script>