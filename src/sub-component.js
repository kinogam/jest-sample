let sub = {
    template: `<h4>sub component</h4>`,
    defaults: {
        options: {},
        onInit() {
            this.options.value = 'this is B';
            console.log('sub component init');
        },
        onReady() {
            console.log('sub component ready');
        }
    }
};

avalon.component('ms-sub', sub);