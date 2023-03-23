  // FUNCTION FOR UPDATE ADMIN

  function upDateAdmin(event) {
    event.preventDefault()

    const getSpin = document.querySelector(".spin");
    getSpin.style.display = "inline-block";

    const setName = document.getElementById("updateName").value;
    const setEmail = document.getElementById("updateEmail").value;

    const top1 = localStorage.getItem("admin");
    const top2 = JSON.parse(top1);
    const top3 = top2.token;     


    const upHeaders = new Headers();
    upHeaders.append("Authorization", `Bearer ${top3}`);
  

    if (setName === "" || setEmail === "" ) {
      Swal.fire({
          icon: 'info',
          text: 'All fields are required!',
          confirmButtonColor: '#2D85DE'
      })
      getSpin.style.display = "none";
  }
  else { 

      const upData = new FormData();
      upData.append("updateName", setName );
      upData.append("updateEmail", setEmail );

      const upReq = {
        method: 'POST',
        body: upData
    }
    
    
    const url = "http://pluralcodesandbox.com/yorubalearning/api/admin/admin_update_profile"
      
    fetch(url , upReq)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.status === "success") {
        Swal.fire({
          icon: "success",
          text: "created successfully",
          confirmButtonColor: "#2D85DE",
        });
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else {
        Swal.fire({
          icon: "info",
          text: "Unsuccessful",
          confirmButtonColor: "#2D85DE",
        });
        getSpin.style.display = "none";
      }
    })
      }}


 
        // FUNCTION FOR UPDATE PASSWORD OF ADMIN 

        function upDatePassword(event) {
         
          event.preventDefault()

          const getSpin = document.querySelector(".spin");
          getSpin.style.display = "inline-block";
      
          const upEmail = document.getElementById("updatePassEmail").value;
          const upPass = document.getElementById("updatePassword").value;
          const upConfirmPass = document.getElementById("confirmPassword").value;
      
          const top1 = localStorage.getItem("admin");
          const top2 = JSON.parse(top1);
          const top3 = top2.token;     
      
      
          const updateHeaders = new Headers();
          updateHeaders.append("Authorization", `Bearer ${top3}`);
        
          if (upEmail === "" || upPass === "" || upConfirmPass === "") {
            Swal.fire({
                icon: 'info',
                text: 'All fields are required!',
                confirmButtonColor: '#2D85DE'
            })
            getSpin.style.display = "none";
        }
    
        if (upConfirmPass !== upPass) {
            Swal.fire({
                icon: 'info',
                text: 'Password do not match',
                confirmButtonColor: '#2D85DE'
            })
        }
    
        else {
            const onData = new FormData();
            onData.append("updatePassEmail", upEmail);
            onData.append("updatePassword", upPass);
            onData.append("confirmPassword", upConfirmPass);
    
            const onReq = {
              method: 'POST',
              body: onData
          }

          const url = "https://pluralcodesandbox.com/yorubalearning/api/admin/admin_update_password";

          fetch(url, onReq)
          .then(response => response.json())
          .then(result => {
              console.log(result)
              if (result.status === "success") {
                  Swal.fire({
                      icon: 'success',
                      text: `${result.message}`,
                      confirmButtonColor: '#2D85DE'
                  })
  
                  setTimeout(() => {
                    location.reload();`=`
                  }, 3000)
              }
              else {
                  Swal.fire({
                      Icon: 'info',
                      text: 'Registration Unsuccessful!',
                      confirmButtonColor: '#2D85DE'
                  })
                  getSpin.style.display = "none";
              }
          })
          .catch(error => console.log('error', error));
      }
  
  }