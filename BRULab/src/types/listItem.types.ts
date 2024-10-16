export interface IListItem {
    item: {
        id: number;
        name: string;
    };
}

export interface IListItemData extends Omit<IListItem, "id"> {}
