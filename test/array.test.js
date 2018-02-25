describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`szyutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(szyutils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('szyutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(szyutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`szyutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(szyutils.arrayEqual(arr, arr))
        });
    });
});