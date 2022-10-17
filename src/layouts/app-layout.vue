<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <Header></Header>
        <!--  END NAVBAR  -->

        <!--  BEGIN MAIN CONTAINER  -->
        <div
            class="main-container"
            id="container"
            :class="[!settings.is_show_sidebar ? 'sidebar-closed sbar-open' : '', settings.menu_style === 'collapsible-vertical' ? 'collapsible-vertical-mobile' : '']"
        >
            <!--  BEGIN OVERLAY  -->
            <div class="overlay" :class="{ show: !settings.is_show_sidebar }" @click="settings.toggleSideBar(!settings.is_show_sidebar)"></div>
            <div class="search-overlay" :class="{ show: settings.is_show_search }" @click="settings.toggleSearch(!settings.is_show_search)"></div>
            <!-- END OVERLAY -->

            <!--  BEGIN SIDEBAR  -->
            <Sidebar></Sidebar>
            <!--  END SIDEBAR  -->

            <!--  BEGIN CONTENT AREA  -->
            <div id="content" class="main-content">
                <router-view />

                <!-- BEGIN FOOTER -->
                <Footer></Footer>
                <!-- END FOOTER -->
            </div>
            <!--  END CONTENT AREA  -->

            <!-- BEGIN APP SETTING LAUNCHER -->
            <app-settings />
            <!-- END APP SETTING LAUNCHER -->
        </div>
    </div>
</template>

<script setup>
    import Header from '@/components/layout/header.vue';
    import Sidebar from '@/components/layout/sidebar.vue';
    import Footer from '@/components/layout/footer.vue';
    import appSettings from '@/components/app-settings.vue';
    import { useSettings } from '@/stores';

    const settings = useSettings();
</script>
