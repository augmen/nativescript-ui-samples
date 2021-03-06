import {ObservableArray} from "tns-core-modules/data/observable-array";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import observableModule = require("tns-core-modules/data/observable");
import timer = require("tns-core-modules/timer");
import frameModule = require("tns-core-modules/ui/frame");

export class ViewModel extends observableModule.Observable {
    private _items;
    private _animations;
    private _itemsCount;

    constructor() {
        super();
        this.initDataItems();
        this._itemsCount = 0;
        this._animations = {
            options: ["Default", "Fade", "Scale", "Slide"],
            index: 0
        };
    }

    get dataItems() {
        return this._items;
    }

    public onAddItemClick(args: listViewModule.ListViewEventData) {
        this._items.push(new DataItem(this._itemsCount, "This is a new item: " + this._itemsCount, "This is the new item's description."));
        this._itemsCount++;
    }

    public onResetClick(args: listViewModule.ListViewEventData) {
        while (this._items.length) {
            this._items.pop();
        }
        this._itemsCount = 0;
    }

    public onUpdateItemClick(args: listViewModule.ListViewEventData) {
        for (var index = 0; index < this._items.length; index++) {
            this._items.getItem(index).itemName = "This is an updated item";
            this._items.getItem(index).itemDescription = "This is the updated item's description.";
        }
    }

    public onRemoveItemClick(args: listViewModule.ListViewEventData) {
        this._items.splice(this._items.length - 1, 1);
    }

    private initDataItems() {
        this._items = new ObservableArray<DataItem>();
    }

    public updateItemAnimation() {
        var index: number = this._animations.index;
        let b = this._animations.options[index];
        var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("ls");
        (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = this._animations.options[index];
        (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = this._animations.options[index];
    }

    public onOptionsTapped() {
        var navigationEntry = {
            moduleName: "/navigation/options-menu/options",
            context: this._animations,
            animated: true
        };

        frameModule.topmost().navigate(navigationEntry);
    }
}

export class DataItem extends observableModule.Observable {


    constructor(id: number, name: string, description: string) {
        super();
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }

    get id(): number {
        return this.get("_id");
    }

    set id(value: number) {
        this.set("_id", value);
    }

    get itemName(): string {
        return this.get("_itemName");
    }

    set itemName(value: string) {
        this.set("_itemName", value);
    }

    get itemDescription(): string {
        return this.get("_itemDescription");
    }

    set itemDescription(value: string) {
        this.set("_itemDescription", value);
    }
}
