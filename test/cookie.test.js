describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            ztjyutils.setCookie('test', 'getTestValue')
        })
        it(`ztjyutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(ztjyutils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            ztjyutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            ztjyutils.setCookie('test', 'removeTestValue')
        })
        it(`ztjyutils.removeCookie('test') should return false`, function () {
            ztjyutils.removeCookie('test')
            assert.notEqual(ztjyutils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`ztjyutils.getCookie('test', 'setCookie') should return true`, function () {
            ztjyutils.setCookie('test', 'setCookie')
            assert(ztjyutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            ztjyutils.removeCookie('test')
        })
    })
})