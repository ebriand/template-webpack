class DummyController {
    constructor(DummyService) {
        DummyService.hello((message) => {
            this.message = message;
        });
    }
}

DummyController.$inject = ['DummyService'];

export default DummyController;
