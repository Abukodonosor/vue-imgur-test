export function GetFetch(url, headers) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: headers || {
        "Content-Type": "application/json",
        Authorization: "Bearer df4d707146d8d93d14615baf56ee2ee59408f19a",
      },
      redirect: "follow",
      //   body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
