describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('ztjyutils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(ztjyutils.isEmail("leiquanlive.com"))
        });
        it('ztjyutils.isEmail("leiquan@live.com") should return true ', function () {
            assert(ztjyutils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('ztjyutils.isIdCard("622224188203234033") should return true ', function () {
            assert(ztjyutils.isIdCard("622224188203234033"))
        });
        it('ztjyutils.isIdCard("zas224188203234033") should return false', function () {
            assert(!ztjyutils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('ztjyutils.isPhoneNum("18882324234") should return true ', function () {
            assert(ztjyutils.isPhoneNum("18882324234"))
        });
        it('ztjyutils.isPhoneNum("8618882324234") should return true ', function () {
            assert(ztjyutils.isPhoneNum("8618882324234"))
        });
        it('ztjyutils.isPhoneNum("5534553") should return false', function () {
            assert(!ztjyutils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('ztjyutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(ztjyutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('ztjyutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(ztjyutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('ztjyutils.isUrl("www.baidu.com") should return true', function () {
            assert(ztjyutils.isUrl("www.baidu.com"))
        });
        it('ztjyutils.isUrl("baidu.com") should return true', function () {
            assert(ztjyutils.isUrl("baidu.com"))
        });
        it('ztjyutils.isUrl("http://baiducom") should return false', function () {
            assert(!ztjyutils.isUrl("http://baiducom"))
        });
    });

});