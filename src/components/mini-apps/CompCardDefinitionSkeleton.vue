<template>
    <div class="d-flex justify-content-between align-items-start pt-2">
        <div class="ms-2 me-auto col-8" aria-hidden="true">
            <span class="placeholder col-1 fs-5 me-2"></span>
            <span class="placeholder col-11 fs-3 text-dark"></span>
            <div class="mt-1 placeholder-glow">
                <span class="placeholder col-1 text-muted me-2"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-1 text-muted"></span>
                <span class="placeholder col-4"></span>
            </div>
            <div class="my-2 placeholder-glow">
                <span class="placeholder col-1 bg-primary fst-italic me-2"></span>
                <span class="placeholder col-5 bg-primary fw-bold text-success me-1"></span>
                <span class="placeholder col-1 bg-primary fst-italic me-2"></span>
                <span class="placeholder col-5 bg-primary fw-bold text-success me-1"></span>
                <span class="placeholder col-1 bg-primary fst-italic me-2"></span>
                <span class="placeholder col-5 bg-primary fw-bold text-success me-1"></span>
                <span class="placeholder col-1 bg-primary fst-italic me-2"></span>
                <span class="placeholder col-5 bg-primary fw-bold text-success me-1"></span>
            </div>
            <div class="mt-3">
                <span class="placeholder col-12"></span>
            </div>
        </div>
        <button class="mt-2 ms-1 btn btn-secondary disabled px-3 py-3" aria-hidden="true">
        </button>
    </div>
</template>

<script>

export default {
    name: 'CompCardDefinitionSkeleton',
}
</script>