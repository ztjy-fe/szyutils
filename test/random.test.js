describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(ztjyutils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(ztjyutils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= ztjyutils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = ztjyutils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})