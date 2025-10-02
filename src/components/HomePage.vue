<template>
  <div id="homepage">
    <!-- Navigation Bar -->
    <nav>
      <table border="0" cellpadding="3" cellspacing="15">
        <tr>
          <td height="30%" width="30%">
             <!-- Using Vue Router for navigation -->
              <ul @click="goHome" id="logoName" style="align-content: center;">
                <li >
                  <img
                    src="@/assets/favicon.png"
                    height="15%"
                    width="15%"
                    alt="logo"
                    class="logo"
                  />
                  
                </li>
                <li>MOONYCO</li>
              </ul>
          </td>
        </tr>
      </table>
    </nav>

    <!-- Page Section -->
    <section>
      <br />

      <button @click="goLogin" id="apparelButton">Shop For Apparel</button>

      <br />

      <button @click="goHotel" id="hotelButton">Book Your Hotel Room</button>

      <br />

      <button @click="goContact" id="apparelButton">Contact</button>

      <br />
    </section>

    <!-- Page Footer -->
    <footer>
      <i><center>Copyright arandomgirl<sup>TM</sup> 2022</center></i>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goHome() {
      this.$router.push({ name: "HomePage" });
    },
    goLogin() {
      this.$router.push({ name: "LogIn" });
    },
    goContact() {
      this.$router.push({ name: "ReachUs" });
    },
    goHotel() {
      this.$router.push({ name: "TheHotel" });
    }
  }
};
</script>

<style scoped>
body,
#homepage {
  background-image: url('@/assets/logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-color: #1d3c62;
  background-blend-mode: difference;
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

a:link {
  color: white;
  text-decoration: none;
}
*:visited{ text-decoration: none;}

a:active {
  color: black;
  text-decoration: none;
}

button {
  height: 30%;
  width: 50%;
  color: white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border: none;
  padding: 8px 8px;
  background: transparent;
  cursor: pointer;
}

.logo {
  border-radius: 100%;
}

#logoName {
  list-style-type: none;
  color: white;
  font-size: 70%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

#icon {
  padding: 2px 2px;
  height: 30px;
  width: 30px;
  float: right;
}

button:hover {
  background-color: hsla(264, 100%, 80%, 0.3);
  color: #000000;
}

section {
  height: 30%;
  width: 50%;
  background-color: hsla(213, 54%, 75%, 0.3);
  color: white;
  font-size: 25px;
  padding: 100px 50px;
  text-align: center;
  margin-left: 20%;
  overflow-wrap: break-word;
}

footer {
  color: hsla(120, 100%, 100%, 0.3);
  font-family: cursive;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>