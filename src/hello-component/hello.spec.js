import * as hello from './hello';

describe('hello', () => {

    it('say hello to kino', () => {
        expect(hello.sayHello('kino')).toBe('hello kino!')
    })
})
