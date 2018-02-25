describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(szyutils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(szyutils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= szyutils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = szyutils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})