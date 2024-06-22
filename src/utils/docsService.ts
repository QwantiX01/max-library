export async function fetchData(path, setData) {
  if (path === "" || path === "/") {
    let headers = new Headers();
    headers.append("accept", "application/json");
    headers.append("Content-Type", "application/json");

    const response = await fetch("https://localhost:7267/getrootfolder", {
      method: "POST",
      headers: headers,
    });

    let result = await response.json();
    return result;
  } else {
    let headers = new Headers();
    headers.append("accept", "application/json");
    headers.append("Content-Type", "application/json");

    const response = await fetch("https://localhost:7267/getfolder", {
      method: "POST",
      headers: headers,
      body: `"${path}"`,
    });

    return await response.json();
  }
}
