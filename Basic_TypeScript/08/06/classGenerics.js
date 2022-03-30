var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * Class Generics
 */
{
    /**
     * data の中身の型を自在に変えれるように Generics を適用
     */
    var DataStorage = /** @class */ (function () {
        function DataStorage() {
            this.data = [];
        }
        DataStorage.prototype.addItem = function (item) {
            this.data.push(item);
        };
        DataStorage.prototype.removeItem = function (item) {
            this.data.splice(this.data.indexOf(item), 1);
        };
        DataStorage.prototype.getItems = function () {
            return __spreadArray([], this.data, true);
        };
        return DataStorage;
    }());
    // string 型のデータを格納するストレージ
    var textStorage = new DataStorage();
    textStorage.addItem('data1');
    textStorage.addItem('data2');
    textStorage.addItem('data3');
    textStorage.removeItem('data1');
    console.log(textStorage.getItems());
    // number 型のデータを格納するストレージ
    var numberStorage = new DataStorage();
    numberStorage.addItem(10);
    numberStorage.addItem(20);
    numberStorage.addItem(30);
    numberStorage.removeItem(20);
    console.log(numberStorage.getItems());
}
