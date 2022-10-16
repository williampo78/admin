import { defineStore } from "pinia";


export const useStore = defineStore('store',{
state :()=>({
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
})
})