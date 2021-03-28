<template>
    <div>
        <div class="card shadow-sm">
            <!-- {{ photo }} -->
            <img :src="photo.thumbnailUrl" :alt="photo.id" />

            <div class="card-body">
                <p class="card-text">{{ photo.id }}: {{ photo.title }}</p>
                <!-- <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                        >
                            View
                        </button>
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                        >
                            Edit
                        </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        photo: Object
    }
};
</script>
