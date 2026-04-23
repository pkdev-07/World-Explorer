// const apiRequest = async (method, endpoint, data = null) => {
//   const url = `http://192.168.1.88:7023/api/${endpoint}`;

//   const options = {
//     method: method.toUpperCase(),
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data ? JSON.stringify(data) : undefined,
//   };

//   console.log("Request URL:", url);
//   console.log("Request options:", options);

//   try {
//     const response = await fetch(url, options);

//     console.log("Raw response:", response);

//     // Log response text if not OK
//     if (!response.ok) {
//       const text = await response.text();
//       console.error("Response body on error:", text);
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("API request error:", error);
//     throw error;
//   }
// };

// export default apiRequest;


