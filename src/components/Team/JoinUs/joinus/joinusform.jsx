//look in JoinForm.jsx

// import React, { useState, Fragment } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import styles from "./joinusform.module.css";
// import axios from "axios";

// // const Joinusform = ({ closeForm }) => {
// //   const [Name, setName] = useState("");
// //   const [Branch, setBranch] = useState("");
// //   const [Year, setYear] = useState();
// //   const [Email, setEmail] = useState("");

// //   con = async (e) => {
// //     e.preventDefault();
// //     await sheet.addRow({ Name, Branch, Year, Email });
// //     // closeForm();
// //   };

// //   useEffect(() => {
// //     const connectToSheet = async (e) => {
// //       const doc = new GoogleSpreadsheet(
// //         "1LUsUuUAmWvIpu0hUPb66K5JsTGUkVJXYn8cocxZe6xw"
// //       );

// //       await doc.useServiceAccountAuth({
// //         client_email: "test-tc@test-tc-307716.iam.gserviceaccount.com",
// //         private_key:
// //           "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFHZawqCoXLpBK\nLtxsVImEQ+7LDN2I+2yqVRA9UfiqCFZyyaIIgsDKdCM/3o+s4NyEI6CeMf0SxPyE\nI6exFiZ4etXx9Qc0Z2OpBozTDJKHhbDs1idnKxE81zw5mL6LqYaQInELRYNfltJH\nkm/fjXatheywohZ8rHGae91lg+PbT267nXEyNgf4paiP8WBp4J8Cet/puL+aRryC\nijiu3+GEj4OBgtvTJ3G60/j0powzXa2F7tMribuy+eju6xukEO9xRSIsWwovvZ7s\nDxgJQHQJsT0vByV61D+R/ilnq8y7583/wVJwf2jskVuF/gmj7Sbm7ARN93WulRKB\n4M0Y+0TpAgMBAAECggEAKoUUcW0FD1UbCPWM1M1zkJV62FAhJaBes2uAAkpBYqRD\nyaUXD9Dst39P70IaKgejadmplxZfagIWGob6cGe/yrNsnTHm6PX4eIiSLiCDJzq+\njIgxnb6bjE09j4sUZ1odTdAwJGdNTHxjRc8f1NBWLl46TWvZf/FO3C0l9/T4XOEn\nh3egfkbc4284W4QJSgegj4r/hZEWIJsx5KggxUGWQrcltO3Bau8sac8igqq+ZmZ3\n1jamlUEVfrwdRrcpVLewGO6qtzhU48IwrGSobhNoPiAft3p5rxsznN5n1eMvez7G\nRx2laQQMALuol6iv3eLOnOVZ7bZKxrhePNeSlHw3EQKBgQDto4PLAiXVqoS5kex4\nZ51UEktVQkoRsfOgpmEl8Yp+b39NHYhKjC0mt8jhSvPG7D/ift6lMPVEBt2sj6nI\nO43wxNfDsuRRLUYPGZwYSFouamZQexI4sdffCoihv5bgOqxyVx+Nq+Q3dEzzI8zd\nsH98mfR4R5ofel9wvxIsWyeDzQKBgQDUWIcGePGNzVbGIEqcBjrqeJrn4m/cprGN\nw+UII58+BtvfCKGO0fMm52G3vuYWw3Ooykg/StMlQ4XKRgEFizmx5nzEhJmB1NUH\ntTvzzoUh1IZp93raP+Ntup2E04qx5dsxQCWt+bpyvKIKfDV9dwwD3udzoa1it3m4\ne7wTv2NhjQKBgGHyN2wBIp8CfVoPLywhaNMyByLJA8ZvVj8s1HXTLIYYZpveREKV\nrDZ9IaraPcgLr/km2ZW0rCKxwcRSImSJR2OpflUG8twSkQHASHopuCHRcQJS95uu\nkY84xEAGu6UICfPGvRajdpj0spK0esgU6zbsLbs1p+y5f4T0/ASUPaExAoGBAMoB\nteI4aENoFqbAzXmEi8PHHEaAqb4Vbk/ZDiciDDmruLuCsH73yAM4l0N//c+l/H+U\ngAqGGjwW8k4tLoehnS9af1NMeeSDHm4IwZH847X9QinI3zyFDsyyfWuA+y6l5lIC\nHlZVfkPso5Kp+xDykaGVCkZ8hj+lH8ybGZ8HsXl5AoGBAOE0bwFdvcJ28zjhQ00k\n7GH1AddeT7oZtGMPCxb+HXsuK/Ah3v4TOuoAC1o/cCeulqOxAfaI+17pK21Sa7wM\nGS+YLIsb1Q3Oq86MTaGwlwMuV5h3rKiWdxzj7STx+fhjWm858/XKFbeuWq70bf5p\ntPF08jhhqk9cn8l8VDvY7DcN\n-----END PRIVATE KEY-----\n",
// //       });

// //       await doc.loadInfo();
// //       console.log(doc.title);

// //       sheet = doc.sheetsByIndex[0];
// //     };

// //     connectToSheet();
// //   }, []);
// //   return (
// //     <div className={styles.joinusform}>
// //       <h2 className={styles.h2}>Fill this Form to Join Us!</h2>
// //       <div className={styles.form_container}>
// //         <form action="" method="post" className={styles.form}>
// //           <input
// //             type="text"
// //             name="Name"
// //             id="Name"
// //             value={Name}
// //             placeholder="Name"
// //             className={styles.forminput}
// //             onChange={(e) => setName(e.target.value)}
// //           />

// //           <input
// //             type="text"
// //             name="Branch"
// //             id="Branch"
// //             value={Branch}
// //             placeholder="Branch"
// //             className={styles.forminput}
// //             onChange={(e) => setBranch(e.target.value)}
// //           />

// //           <input
// //             type="text"
// //             name="Year"
// //             list="Year"
// //             value={Year}
// //             placeholder="Year"
// //             className={styles.forminput}
// //             onChange={(e) => setYear(e.target.value)}
// //           />

// //           <datalist id="Year">
// //             <option value="1"></option>
// //             <option value="2"></option>
// //             <option value="3"></option>
// //             <option value="4"></option>
// //           </datalist>

// //           <input
// //             type="email"
// //             name="Email"
// //             id="Email"
// //             value={Email}
// //             placeholder="E-mail"
// //             className={styles.forminput}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />

// //           <button
// //             className={styles.forminput}
// //             id={styles.submit}
// //             onClick={(e) (e)}
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //         <Link to="/team" className={styles.close_button}>
// //           &#10006;
// //         </Link>
// //     </div>
// //   );
// // };

// const Error = (props) => {
//   return (
//     <Fragment>
//       <span className={styles.error}>
//         <sup>*</sup> {props.message}
//       </span>
//     </Fragment>
//   );
// };

// const JoinUsform = () => {
//   const { register, handleSubmit, errors, reset } = useForm();
  
//   const [success, setSuccess] = useState(false);
//   const onSubmit = async (data) => {
//     const config = {
//       cors: "https://cors-anywhere.herokuapp.com/", // <optional> doesn't display the cors error
//       formUrl:
//         "https://docs.google.com/forms/d/e/1FAIpQLSf3yiK78bApWbb6XV1BACT-qx3igqGoq_Xcx7TtEdFmp1SYLQ/formResponse",
//     };
//     // console.log(data); //form data
//     // const reqData = {
//     //   "entry.704811784": data.Name,
//     //   "entry.884660301": data.Branch,
//     //   "entry.597461471": data.Year,
//     //   "entry.80580434": data.Email,
//     //   "entry.1670493628": data.whatsapp,
//     // };
//     // const form = new GoogleForm(
//     //   "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3yiK78bApWbb6XV1BACT-qx3igqGoq_Xcx7TtEdFmp1SYLQ"
//     // );

//     // form.addField("entry.704811784", data.Name);
//     // form.addField("entry.884660301", data.Branch);
//     // form.addField("entry.597461471", data.Year);
//     // form.addField("entry.80580434", data.Email);
//     // form.addField("entry.1670493628", data.whatsapp);
//     // console.log(form);
//     // form.send();

//     const form = new FormData();
//     form.append("entry.704811784", data.Name);
//     form.append("entry.884660301", data.Branch);
//     form.append("entry.597461471", data.Year);
//     form.append("entry.80580434", data.Email);
//     form.append("entry.1670493628", data.whatsapp);

//     await axios({
//       url: `${config.formUrl}`,
//       method: "post",
//       data: form,
//       responseType: "json",
//     })
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });

//     reset();
//     alert("Thank You. Your response is Submitted.!")
//   };

//   return (
//     <div className={styles.joinusform} >
//       <h2 className={styles.h2}>Fill this Form to Join Us!</h2>
//       <div className={styles.form_container}>
//         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//           {/* E-mail */}
//           <div className={styles.input_div}>
//             <input
//               type="email"
//               name="Email"
//               placeholder="E-mail"
//               className={styles.forminput}
//               ref={register({
//                 required: "enter a valid email",
//                 pattern: {
//                   value: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
//                   message: "Please Enter a Valid email address",
//                 },
//               })}
//             />
//             {errors.Email && <Error message={errors.Email.message} />}
//           </div>

            
//           {/* Name */}
//           <div className={styles.input_div}>
//             <input
//               type="text"
//               name="Name"
//               placeholder="Name"
//               className={styles.forminput}
//               ref={register({ required: "enter a valid name", minLength: 1 })}
//             />
//             {errors.Name && <Error message={errors.Name.message} />}
//           </div>


//           {/* Roll Number */}
//           <div className={styles.input_div}>
//             <input
//               type="text"
//               name="roll"
//               placeholder="Roll Number"
//               className={styles.forminput}
//               ref={register({ required: "enter a valid name", minLength: 8, maxLength: 8 })}
//             />
//             {errors.roll && <Error message={errors.roll.message} />}
//           </div>

          
//           {/* WhatsApp Number */}
//             <div className={styles.input_div}>
//               <input
//                 type="text"
//                 name="number"
//                 id="number"
//                 className={styles.forminput}
//                 placeholder="Contact number"
//                 ref={register({
//                   required: "please enter your mobile number",
//                   pattern: {
//                     value: /^((0091)|(\+91)|0?)[789]{1}\d{9}$/,
//                     message: "please enter a valid mobile number",
//                   },
//                 })}
//               />
//               {errors.number && <Error message={errors.whatsapp.message} />}
//             </div>

//           {/* Branch */}
//           <div className={styles.input_div}>
//             <p>Select Your Current Branch</p>
//             <div>
//               <input type="radio" name="branch" id="Architecture" value="Architecture"/>
//               <label htmlFor="Architecture">Architecture</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Bio-Medical Engineering" value="Bio-Medical Engineering"/>
//               <label htmlFor="Bio-Medical Engineering">Bio-Medical Engineering</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Bio-Technology Engineering" value="Bio-Technology Engineering"/>
//               <label htmlFor="Bio-Technology Engineering">Bio-Technology Engineering</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Chemical Engineering" value="Chemical Engineering"/>
//               <label htmlFor="Chemical Engineering">Chemical Engineering</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Civil Engineering" value="Civil Engineering"/>
//               <label htmlFor="Civil Engineering">Civil Engineering</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Computer Science & Engineering" value="Computer Science & Engineering"/>
//               <label htmlFor="Computer Science & Engineering">Computer Science & Engineering</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Electrical Engineering" value="Electrical Engineering"/>
//               <label htmlFor="Electrical Engineering">Electrical Engineering</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Electronics and Communication Engineering" value="Electronics and Communication Engineering"/>
//               <label htmlFor="Electronics and Communication Engineering">Electronics and Communication Engineering</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Information Engineering" value="Information Engineering"/>
//               <label htmlFor="Information Engineering">Information Engineering</label>
//             </div>
            
//             <div>
//               <input type="radio" name="branch" id="Mechanical Engineering" value="Mechanical Engineering"/>
//               <label htmlFor="Mechanical Engineering">Mechanical Engineering</label>
//             </div>
            
//             <div>
//               <input type="radio" name="branch" id="Master in Computer Application" value="Master in Computer Application"/>
//               <label htmlFor="Master in Computer Application">Master in Computer Application</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Metallurigical and Materials" value="Metallurigical and Materials"/>
//               <label htmlFor="Metallurigical and Materials">Metallurigical and Materials</label>
//             </div>

//             <div>
//               <input type="radio" name="branch" id="Mining Engineering" value="Mining Engineering"/>
//               <label htmlFor="Mining Engineering">Mining Engineering</label>
//             </div>
//             {errors.Branch && <Error message={errors.Branch.message} />}
//           </div>

//           <div className={styles.input_div}>
//             <input
//               type="text"
//               name="semester"
//               id="semester"
//               placeholder="Current Semester"
//               className={styles.forminput}
//               ref={register({
//                 required: "Please select your current semester"
//               })}
//             />
//             {errors.semester && <Error message={errors.semester.message} />}
//           </div>

//           <datalist id="semester-list">
//             <option value="2"></option>
//             <option value="4"></option>
//           </datalist>

//           <input type="submit" value="Submit" className={styles.submit} />
//         </form>
//       </div>
//     </div>
//   );
// };

// const JoinUsForm = () => {
//   return (
//     <Fragment>
      
//       <iframe
//         src="https://forms.gle/UPZc8Ve5CRLWmhkL8"
//         title="joinForm"
//       className={styles.joinForm}>

//         </iframe>
    
//     </Fragment>
//   )
// }


// export default JoinUsform;
