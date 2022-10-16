import { defineStore } from 'pinia';
import i18n from '../i18n';

export const useSettings = defineStore('settings', {
    state: () => ({
        layout: 'app',
        is_show_sidebar: true,
        is_show_search: false,
        is_dark_mode: false,
        dark_mode: 'light',
        locale: null,
        menu_style: 'vertical',
        layout_style: 'full',
        countryList: [
            { code: 'zh', name: 'Chinese' },
            { code: 'da', name: 'Danish' },
            { code: 'en', name: 'English' },
            { code: 'fr', name: 'French' },
            { code: 'de', name: 'German' },
            { code: 'el', name: 'Greek' },
            { code: 'hu', name: 'Hungarian' },
            { code: 'it', name: 'Italian' },
            { code: 'ja', name: 'Japanese' },
            { code: 'pl', name: 'Polish' },
            { code: 'pt', name: 'Portuguese' },
            { code: 'ru', name: 'Russian' },
            { code: 'es', name: 'Spanish' },
            { code: 'sv', name: 'Swedish' },
            { code: 'tr', name: 'Turkish' },
        ],
    }),
    actions: {
        setLayout(layout) {
            this.layout = layout;
        },
        toggleSideBar(value) {
            this.is_show_sidebar = value;
        },
        toggleSearch(value) {
            this.is_show_search = value;
        },
        toggleLocale(value) {
            value = value || 'en';
            i18n.global.locale = value;
            localStorage.setItem('i18n_locale', value);
            this.locale = value;
        },
        toggleDarkMode(value) {
            //light|dark|system
            console.log(value);
            value = value || 'light';
            localStorage.setItem('dark_mode', value);
            this.dark_mode = value;
            if (value == 'light') {
                this.is_dark_mode = false;
            } else if (value == 'dark') {
                this.is_dark_mode = true;
            } else if (value == 'system') {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    this.is_dark_mode = true;
                } else {
                    this.is_dark_mode = false;
                }
            }

            if (this.is_dark_mode) {
                document.querySelector('body').classList.add('dark');
            } else {
                document.querySelector('body').classList.remove('dark');
            }
        },

        toggleMenuStyle(value) {
            //horizontal|vertical|collapsible-vertical
            value = value || '';
            localStorage.setItem('menu_style', value);
            this.menu_style = value;
            if (!value || value === 'vertical') {
                this.is_show_sidebar = true;
            } else if (value === 'collapsible-vertical') {
                this.is_show_sidebar = false;
            }
        },

        toggleLayoutStyle(value) {
            //boxed-layout|large-boxed-layout|full
            value = value || '';
            localStorage.setItem('layout_style', value);
            this.layout_style = value;
        },
    },
});
