class DummyService {
  constructor($http) {
    this.$http = $http;
  }

  hello(callback) {
    this.$http.get('api/hello')
  .then(
    (response) => {
      callback(response.data);
    },
    (response) => {
      callback(undefined, response.data.cause);
    }
  );
  }
}
DummyService.$inject = ['$http'];

export default DummyService;
