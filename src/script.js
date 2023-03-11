// var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 

// db.transaction(function (tx) {   
//    tx.executeSql('CREATE TABLE IF NOT EXISTS posts (id unique, user, post)'); 
// });



// function getPost() {
//   let post = new FormData(document.getElementById("post")) 
//   // console.log(Object.fromEntries(post).);
//   console.log(post);
//   // for (i=0;i<4;i++){
//   //   values[i] = 
//   // }
// }







// res = document.getElementById('input')
// new URLSearchParams(window.location.search).forEach((value, name) => {
//   nameres.append(`${name}`)
//   res.append(`${value}`)
//   res.append(`${value}`)
// });




window.addEventListener('load', () => {
  const params = (new URL(document.location)).searchParams;
  console.log(params)
  document.getElementById('f_name').innerHTML = params.get('f_name');
  document.getElementById('m_name').innerHTML = params.get('m_name');
  document.getElementById('l_name').innerHTML = params.get('l_name');
  document.getElementById('email').innerHTML = params.get('email');
  if (params.get('gender')==1) {
    document.getElementById('gender').innerHTML = "Male";
  } else {
    document.getElementById('gender').innerHTML = "Female";
  }
  document.getElementById('password').innerHTML = params.get('password');


  // const name = params.get('f_name');
})