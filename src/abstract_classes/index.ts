abstract class View {
    abstract show(): string;

    execute () {
        console.log('show method executing', this.show())
    }
}

class ViewChild extends View {
    show(): string {
        return 'payload';
    }
}

new ViewChild().execute();
