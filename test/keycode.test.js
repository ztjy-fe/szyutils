describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`ztjyutils.getKeyName(13) should return "Enter"`, function () {
            assert(ztjyutils.getKeyName(13) === 'Enter')
        });
    });

});