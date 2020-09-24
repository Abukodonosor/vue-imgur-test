export function GetFetch(url, headers) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: headers || {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      //   body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
