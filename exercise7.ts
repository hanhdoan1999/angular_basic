
function callAPI(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Lỗi khi gọi API");
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const apiUrl = 'https://fakestoreapi.com/products/1';
callAPI(apiUrl)
  .then(data => {
    console.log('Dữ liệu:', data);
  })
  .catch(error => {
    console.error('Lỗi:', error);
  });

