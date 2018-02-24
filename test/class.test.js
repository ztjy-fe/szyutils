describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`ztjyutils.addClass($ele, 'test') should return true`, function () {
            ztjyutils.addClass($ele, 'test')
            assert(ztjyutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            ztjyutils.addClass($ele, 'test')
        })
        it(`ztjyutils.hasClass($ele, 'test') should return true`, function () {
            assert(ztjyutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            ztjyutils.addClass($ele, 'test')
        })
        it(`ztjyutils.removeClass($ele, 'test') should return false`, function () {
            ztjyutils.removeClass($ele, 'test')
            assert.notEqual(ztjyutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});