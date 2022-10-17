import { useSettings } from './stores';

import { $themeConfig } from '@themeConfig';

export default {
    init() {
        // set default styles
        const settings = useSettings();
        let val = localStorage.getItem('dark_mode'); // light, dark, system
        if (!val) {
            val = $themeConfig.theme;
        }
        settings.toggleDarkMode(val);

        val = localStorage.getItem('menu_style'); // vertical, collapsible-vertical, horizontal
        if (!val) {
            val = $themeConfig.navigation;
        }
        settings.toggleMenuStyle(val);

        val = localStorage.getItem('layout_style'); // full, boxed-layout, large-boxed-layout
        if (!val) {
            val = $themeConfig.layout;
        }
        settings.toggleLayoutStyle(val);

        val = localStorage.getItem('i18n_locale'); // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
        if (!val) {
            val = $themeConfig.lang;

            const list = settings.countryList;
            const item = list.find((item) => item.code === val);
            if (item) {
                this.toggleLanguage(item);
            }
        }
    },

    toggleLanguage(item) {
        const settings = useSettings();

        let lang = null;
        if (item) {
            lang = item;
        } else {
            let code = settings.locale;
            if (!code) {
                code = localStorage.getItem('i18n_locale');
            }

            item = settings.countryList.find((d) => d.code === code);
            if (item) {
                lang = item;
            }
        }

        if (!lang) {
            lang = settings.countryList.find((d) => d.code === 'en');
        }

        settings.toggleLocale(lang.code);
        return lang;
    },

    toggleMode(mode) {
        const settings = useSettings();
        if (!mode) {
            let val = localStorage.getItem('dark_mode'); //light|dark|system
            mode = val;
            if (!val) {
                mode = 'light';
            }
        }
        settings.toggleDarkMode(mode || 'light');
        return mode;
    },
};
