type UnpackList<T> = T extends (infer U)[] ? U : T;

type TPersonInfo = {
    name: string;
    lastname: string;
}

type TListItemString = UnpackList<string[]>;

type TPersonItemList = UnpackList<TPersonInfo[]>;
