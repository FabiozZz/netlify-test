import './styles/index.scss'

Handlebars.registerHelper('isdefined', function (value) {
    console.log(value)
    return value !== undefined;
});
