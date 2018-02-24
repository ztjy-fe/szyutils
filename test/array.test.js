describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`ztjyutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(ztjyutils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('ztjyutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(ztjyutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`ztjyutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(ztjyutils.arrayEqual(arr, arr))
        });
    });
});