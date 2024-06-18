type Package = {
    files: string[];
    modules: string[];
    download(): string;
}

class SomePackage implements Package {
    files: string[] = [];
    modules: string[] = [];

    download(): string {
        return '';
    }
}

export {
    SomePackage,
}