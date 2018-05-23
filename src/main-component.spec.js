import './avalon';
import './sub-component';
import main from './main-component';

describe('main', () => {


//region "构建环境"
    let vm,
        container;

    function createInstance(options, params) {
        let appName = `app_${new Date().getTime()}`,
            componentName = `ms-test-component`;
        container = document.createElement('div');

        let widgetList = [];
        for (let p in params) {
            widgetList.push(`${p}:@${p}`)
        }

        container.innerHTML = `
        <section style="display: none" :controller="${appName}">
            <xmp is="${componentName}" :widget="{${widgetList.join(',')}}"></xmp>
        </section>`;

        document.body.appendChild(container);

        avalon.component(componentName, options);

        avalon.define({
            $id: appName
        });

        avalon.scan(container);

        vm = getVM(componentName)
    }

    function getVM(name) {
        for (let moduleName in avalon.vmodels) {
            if (new RegExp('^' + name).test(moduleName)) {
                return avalon.vmodels[moduleName];
            }
        }
    }

    function destroyInstance() {
        avalon.vmodels = {};
        document.body.removeChild(container)
    }


    beforeEach(() => {

    });

    afterEach(() => {
        destroyInstance();
    });

//endregion

    // 测试子项
    describe('transcation detail', () => {
        beforeEach(done => {
            createInstance(main);

            setTimeout(() => {
                done();
            });

        });
        it('should change options value in sub component', () => {
            expect(vm.options.value).toBe('this is B');
        });

    })


});
