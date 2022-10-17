<template>
    <div :class="[settings.layout_style, settings.menu_style]">
        <component v-bind:is="layout"></component>
    </div>
</template>
<script setup>
    import { computed } from 'vue';

    import '@/assets/sass/app.scss';

    import { useMeta } from '@/composables/use-meta';
    import { useSettings } from './stores';

    const settings = useSettings();
    console.log(settings.layout)
    useMeta({ title: 'Sales Admin' });

    const layout = computed(() => {
        return settings.getLayout;
    });

</script>
<script>
    // layouts
    import appLayout from './layouts/app-layout.vue';
    import authLayout from './layouts/auth-layout.vue';

    export default {
        components: {
            app: appLayout,
            auth: authLayout,
        },
    };
</script>
