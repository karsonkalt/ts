interface Tab {
    id: string;
    position: number;
    data: any;
}

// Well any isn't stringly typed.

interface Tab2<T> {
    id: string;
    position: number;
    data: T;
}

type NumberTab = Tab2<number>
// Inserts number in where the T is
type NumberTab2 = {
    id: string;
    position: number;
    data: number;
}
// These are equivalant