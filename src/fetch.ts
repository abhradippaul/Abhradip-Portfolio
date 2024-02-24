export const fetchingData = async(url:string) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`)
    return await response.json()
};

export const postData = async (url: string, data: object) => {
  await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  //   console.log(response);
  
};
