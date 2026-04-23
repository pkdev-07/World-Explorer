// import apiRequest from "./api";

// //   post---->
// export const PostCountry  = async (countryData) => {
//   try {
    
//     const response = await apiRequest(
//       "POST",
//       "PostCountries", // this matches your API endpoint
//       countryData
//     );

//     return response; // returns { message: "..." } from API
//   } catch (error) {
//     console.error("Error posting user details:", error);
//     throw error;
//   }
// };


// //--getcountry

// export const Getcountries = async () => {
//   try{
//     const data = await apiRequest("GET", "Get_Country");
//     return data;
//   }catch (error){
//     console.log("error fetching countries",error);
//     throw error;
//   }
// };











// // ----> login 
// // export const Loginpage = async (email, password) => {
// //   return await apiRequest(
// //     "GET",
// //     `Login/${encodeURIComponent(email)}/${encodeURIComponent(password)}`
// //   );
// // };

// // // -----> get 
// // export const Get_Masterusers = async (created_by) => {
// //     try {
// //       const data = await apiRequest(
// //         "GET",
// //         `Get_Masterusers/${created_by}`
// //       );
// //       return data;
// //     } catch (error) {
// //       console.error("Error fetching user details:", error);
// //       throw error;
// //     }
// //   };


// //   post---->
// // export const PostMasterTables = async (userDetails) => {
// //     try {
// //       // userDetails should include:
// //       // fname, lname, gender, email_id, mobile, password, created_by
// //       const response = await apiRequest(
// //         "POST",
// //         "Post_MasterTables", // this matches your API endpoint
// //         userDetails
// //       );
  
// //       return response; // returns { message: "..." } from API
// //     } catch (error) {
// //       console.error("Error posting user details:", error);
// //       throw error;
// //     }
// //   };

// // -----> put 

// // -----> put (edit user)
// // export const EditMasteruser = async (sys_emp_uuid, updatedDetails) => {
// //   try {
// //     // updatedDetails should include fname, lname, gender, email_id, mobile, password
// //     const response = await apiRequest(
// //       "PUT",
// //       `Edit_Masteruser/${sys_emp_uuid}`, // API route
// //       updatedDetails
// //     );

// //     return response; // API returns { message: "updated successfully" }
// //   } catch (error) {
// //     console.error("Error updating user details:", error);
// //     throw error;
// //   }
// // };


// // -----> delete


// // // -----> delete
// // export const DeleteMasterTable = async (sys_emp_uuid) => {
// //   try {
// //     const response = await apiRequest(
// //       "DELETE",
// //       `Delete_MasterTable/${sys_emp_uuid}` 
// //     );
// //     return response;
// //   } catch (error) {
// //     console.error("Error deleting user:", error);
// //     throw error;
// //   }
// // };
