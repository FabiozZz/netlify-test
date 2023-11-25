// vite.config.js
import handlebars from 'vite-plugin-handlebars';
import {defineConfig} from 'vite';
import {resolve} from 'path';

const pageData = {
    '/index.html': {
        title: 'Навигация'
    },
    '/src/pages/login/index.html': {
        title: 'Авторизация',
        inputs: {
            login: {
                placeholder: 'Логин',
                type: 'text'
            },
            password: {
                placeholder: 'Пароль',
                type: 'password'
            }
        }
    },
    '/src/pages/signIn/index.html': {
        title: 'Регистрация',
        inputs: {
            first_name: {
                placeholder: 'Имя',
                type: 'text'
            },
            second_name: {
                placeholder: 'Фамилия',
                type: 'text'
            },
            login: {
                placeholder: 'Логин',
                type: 'text'
            },
            email: {
                placeholder: 'Почта',
                type: 'email'
            },
            password: {
                placeholder: 'Пароль',
                type: 'password'
            },
            phone: {
                placeholder: 'Номер телефона',
                type: 'phone'
            }
        }
    },
    '/src/pages/profile/index.html': {
        title: 'Редактирование профиля',
        inputs: {
            first_name: {
                placeholder: 'Имя',
                type: 'text'
            },
            second_name: {
                placeholder: 'Фамилия',
                type: 'text'
            },
            login: {
                placeholder: 'Логин',
                type: 'text'
            },
            email: {
                placeholder: 'Почта',
                type: 'email'
            },
            phone: {
                placeholder: 'Номер телефона',
                type: 'phone'
            },
            oldPassword: {
                placeholder: 'Старый пароль',
                type: 'password'
            },
            newPassword: {
                placeholder: 'Новый пароль',
                type: 'password'
            }
        }
    }
};

export default defineConfig({
    // root: resolve(__dirname,'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        // rollupOptions:{
        //     input:{
        //         nav:resolve(__dirname,'index.html'),
        //         login:resolve(__dirname,'index.html'),
        //         signIn:resolve(__dirname,'index.html'),
        //     },
        //
        // }
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        context(pagePath) {
            return pageData[pagePath]
        }

    })],
});
// login:resolve(__dirname,'src/pages/login.html'),
// signup:resolve(__dirname,'src/pages/signup.html'),

