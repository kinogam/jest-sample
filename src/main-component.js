let main = {
    template: `
        <div>
            hello main component, and {{@options.value}}
            <div is="ms-sub" :widget="{options: @options}"></div>
        </div>
    
    `,
    defaults: {
        options: {
            value: 'this is A'
        },
        onInit() {
            console.log('main component init');
        },
        onReady() {
            console.log('main component ready');
        }
    }
};

avalon.component('ms-main', main);

export default main;
