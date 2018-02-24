describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual ztjyutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, ztjyutils.deepClone(person))
        });

        it(`person === ztjyutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, ztjyutils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`ztjyutils.isEmptyObject({}) should return true`, function () {
            assert(ztjyutils.deepClone({}))
        });

        it(`ztjyutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(ztjyutils.isEmptyObject({
                one: 1
            }))
        });

        it(`ztjyutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(ztjyutils.isEmptyObject([]))
        });
    });
})