module.exports = function() {
    return {
        name: 'monitoring-plugin',
        async loadContent() {
            console.log("Config was changed, run tests!");
        }
    }
}