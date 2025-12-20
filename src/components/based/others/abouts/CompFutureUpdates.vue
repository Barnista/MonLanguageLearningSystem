<template>
    <div class="comp-change-logs">
        <h3>{{ langSet[lang || 'en'].aboutView.futureUpdates }}</h3>
        <hr>
        <div class="px-3 py-3">
            <!-- Section: Timeline -->
            <section class="">
                <ul class="timeline">
                    <li v-for="(log, index) in futureUpdates" :key="index" class="timeline-item mb-5">
                        <h5 class="fw-bold">{{ log.version }}</h5>
                        <p class="text-muted mb-2 fw-bold">{{ log.date.toDateString() }}</p>
                        <ul class="text-muted">
                            <li v-for="(change, cIndex) in log.changes" :key="cIndex">
                                {{ change }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <!-- Section: Timeline -->
        </div>
    </div>
</template>

<script>
import changeLog from '@/services/abouts/change-log';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: "CompFutureUpdates",
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            futureUpdates: changeLog.futureUpdates
        }
    }
}
</script>

<style>
.timeline {
    border-left: 1px solid hsl(0, 0%, 90%);
    position: relative;
    list-style: none;
}

.timeline .timeline-item {
    position: relative;
}

.timeline .timeline-item:after {
    position: absolute;
    display: block;
    top: 0;
}

.timeline .timeline-item:after {
    background-color: hsl(0, 0%, 80%);
    left: -38px;
    border-radius: 50%;
    height: 11px;
    width: 11px;
    content: "";
}
</style>