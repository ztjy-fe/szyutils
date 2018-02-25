describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            szyutils.setCookie('test', 'getTestValue')
        })
        it(`szyutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(szyutils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            szyutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            szyutils.setCookie('test', 'removeTestValue')
        })
        it(`szyutils.removeCookie('test') should return false`, function () {
            szyutils.removeCookie('test')
            assert.notEqual(szyutils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`szyutils.getCookie('test', 'setCookie') should return true`, function () {
            szyutils.setCookie('test', 'setCookie')
            assert(szyutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            szyutils.removeCookie('test')
        })
    })
})