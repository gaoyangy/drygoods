module.exports = function() {
    var faker = require("faker");
    faker.locale = "zh_CN";
    var _ = require("lodash");
    //模拟数据以对象的形式写在下面
    return {
        people: _.times(100, function(n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        }),
        address: _.times(100, function(n) {
            return {
                id: faker.random.uuid(),
                city: faker.address.city(),
                county: faker.address.county()
            }
        }),
        list: _.times(10, function(n) {
            return {
                id: '1233' + n,
                name: "又一家共享单车倒闭！创始人：再不看好共享单车了",
                tag: [
                    { text: "node", value: "1" },
                    { text: "linux", value: "2" },
                    { text: "web", value: "3" },
                    { text: "java", value: "4" },
                    { text: "vue", value: "5" },
                    { text: "angular", value: "6" },
                    { text: "react", value: "7" }
                ],
                content: "在6月13日悟空单车关门之后，又一家共享单车宣布倒闭，时间仅过去8天。6月21日，3Vbike通过公众号发布公告称在6月13日悟空单车关门之后，又一家共享单车宣布倒闭，时间仅过去8天。6月21日，3Vbike通过公众号发布公告称在6月13日悟空单车关门之后，又一家共享单车宣布倒闭，时间仅过去8天。6月21日，3Vbike通过公众号发布公告称在6月13日悟空单车关门之后，又一家共享单车宣布倒闭，时间仅过去8天。6月21日，3Vbike通过公众号发布公告称在6月13日悟空单车关门之后，又一家共享单车宣布倒闭，时间仅过去8天。6月21日，3Vbike通过公众号发布公告称在6月13日悟空单车关门之后，又一家共享单车宣布倒闭，时间仅过去8天。6月21日，3Vbike通过公众号发布公告称在6月13日悟空单车关门之后，又一家共享单车宣布倒闭，时间仅过去8天。6月21日，3Vbike通过公众号发布公告称在6月13日悟空单车关门之后，又一家共享单车宣布倒闭，时间仅过去8天。6月21日，3Vbike通过公众号发布公告称"
            }
        }),
        user: _.times(1, function(n) {
            return true;
        })
    }
}