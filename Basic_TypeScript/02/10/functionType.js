/**
 * Function type
 */
{
    var hello = function (name) {
        return "hello " + name;
    };
    console.log(hello("Taro"));
    var goodMornig = function (name) {
        console.log("hello ".concat(name));
    };
    goodMornig("Jiro");
}
