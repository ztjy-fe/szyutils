describe('Dom API:', function () {
    describe('#getScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        before(function () {
            $body.style.height = '10000px'
            ztjyutils.setScrollTop(length)
        })
        it(`ztjyutils.getScrollTop() should return true`, function () {
            assert(ztjyutils.getScrollTop() === length)
        })
        after(function () {
            ztjyutils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });

    describe('#setScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        before(function () {
            $body.style.height = '10000px'
            ztjyutils.setScrollTop(length)
        })
        it(`ztjyutils.getScrollTop() should return true`, function () {
            ztjyutils.setScrollTop(length)
            assert(ztjyutils.getScrollTop() === length)
        })
        after(function () {
            ztjyutils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });

    describe('#offset()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            div.style.position = 'absolute'
            div.style.top = '200px'
            div.style.left = '300px'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`ztjyutils.offset() should return true`, function () {
            let offset = ztjyutils.offset($ele)
            assert(offset.left === 300 && offset.top === 200)
        })
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#scrollTo()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20,
            y = 100,
            duration = 300;
        before(function () {
            $body.style.height = '10000px'
        })
        it(`ztjyutils.scrollTo() should return true`, function (done) {
            ztjyutils.scrollTo(y, duration)
            setTimeout(function () {
                assert(ztjyutils.getScrollTop() === y)
                done()
            }, duration + 200)
        })
        after(function () {
            ztjyutils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });


    describe('#windowResize()', function () {
        let innerHeight = window.innerHeight
        it(`ztjyutils.windowResize(downCb) should return true`, function (done) {
            ztjyutils.windowResize(function () {
                // 键盘缩回回调
                assert(window.innerHeight == innerHeight)
                done()
            }, function () {})
            // 触发resize事件，模拟软键盘缩回
            window.dispatchEvent(new Event('resize'));
        })
    });

    describe('#windowResize()', function () {
        let innerHeight = window.innerHeight
        it(`ztjyutils.windowResize(upCb) should return true`, function (done) {
            ztjyutils.windowResize(function () {}, function () {
                // 键盘弹起回调
                assert(window.innerHeight === innerHeight - 200)
                done()
            })
            // 设置innerHeight，模拟软键盘弹起
            window.innerHeight = innerHeight - 200
            // 触发resize事件
            window.dispatchEvent(new Event('resize'));
        })
        after(function(){
            window.innerHeight = innerHeight
        })
    });


});