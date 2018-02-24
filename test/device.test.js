describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`ztjyutils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${ztjyutils.getExplore()}`)
            assert(/^Chrome:/.test(ztjyutils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`ztjyutils.getOS() should return "windows"`, function () {
            console.log(`OS:${ztjyutils.getOS()}`)
            assert(ztjyutils.getOS() === 'windows' || ztjyutils.getOS() === 'MacOSX' || ztjyutils.getOS() === 'linux')
        });
    });
});