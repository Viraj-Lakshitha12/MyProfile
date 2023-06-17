export class Item{

    constructor(item_code,item_name,item_qty,item_unit_price) {
        this._item_code = item_code;
        this._item_name = item_name;
        this._item_qty = item_qty;
        this._item_unit_price = item_unit_price;
    }

    get item_code() {
        return this._item_code;
    }

    set item_code(value) {
        this._item_code = value;
    }

    get item_name() {
        return this._item_name;
    }

    set item_name(value) {
        this._item_name = value;
    }

    get item_qty() {
        return this._item_qty;
    }

    set item_qty(value) {
        this._item_qty = value;
    }

    get item_unit_price() {
        return this._item_unit_price;
    }

    set item_unit_price(value) {
        this._item_unit_price = value;
    }
}