function cookies() {
    class CookieConsent {
        constructor({ popupSelector, btnConfirmSelector, btnCancelSelector, activeClass = '' } = {}) {
            this.popup = document.querySelector(popupSelector);
            this.btnConfirm = document.querySelector(btnConfirmSelector);
            this.btnCancel = document.querySelector(btnCancelSelector);
            this.activeClass = activeClass;
            this.conserntPropertyType = 'site_consent';
        }

        getItem = (key) => {
            const cookies = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
            return cookies[key];
        }

        setItem = (key, value) => {
            document.cookie = `${key}=${value};expires=Sun, 16 Jul 2025 05:23:41 GMT`;
        }
        hasConsented = () => {
            this.getItem(this.conserntPropertyType) === 'true' ? true : false;
        }
        changeStatus = (prop) => {
            this.setItem(this.conserntPropertyType, prop);
            if (this.hasConsented()) {
                myScripts()
            }
        }
        bindTriggers = () => {
            this.btnConfirm.addEventListener('click', () => {
                this.changeStatus(true);
                this.popup.classList.remove(this.activeClass);
            });
            this.btnCancel.addEventListener('click', () => {
                this.changeStatus(false);
                this.popup.classList.remove(this.activeClass);
            });
        }

        init = () => {
            try {
                if (this.hasConsented()) {
                    myScripts();
                } else {
                    this.popup.classList.add(this.activeClass);
                }
                this.bindTriggers()
            } catch (e) {
                console.error('Переданы не все данные')
            }
        }
    }

    new CookieConsent({
        activeClass: 'popup_active',
        popupSelector: '.popup',
        btnConfirmSelector: '[data-confirm]',
        btnCancelSelector: '[data-cancel]'
    }).init();

    function myScripts() {
        console.log('loading...');

    }
}


export default cookies;