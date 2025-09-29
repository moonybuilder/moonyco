<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav>
      <table border="0" cellpadding="3" cellspacing="15">
        <tr>
          <td height="30%" width="30%">
             <!-- Using Vue Router for navigation -->
              <ul @click="goHome" id="logoName">
                <li>
                  <img
                    src="@/assets/favicon.png"
                    height="15%"
                    width="15%"
                    alt="logo"
                    class="logo"
                  />
                  MOONY
                </li>
              </ul>
          </td>
        </tr>
      </table>
    </nav>

    <!-- Page Section -->
    <section>
      <br /><br /><br />

      
        <button @click="goLogin" id="apparelButton">Shop For Apparel</button>

      <br /><br /><br />

        <button @click="goHotel" id="hotelButton">Book Your Hotel Room</button>

      <br /><br /><br />

        <button @click="goContact" id="apparelButton">Contact</button>

      <br /><br /><br />
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
      this.$router.push({ name: 'Home' })
    },
    goLogin() {
      this.$router.push({ name: 'LogIn' })
    },
    goContact() {
      this.$router.push({ name: 'ReachUs' })
    },
    goHotel() {
      this.$router.push({ name: 'TheHotel' })
    }
  }
};
</script>

<style scoped>
body,
#app {
  background-image: url('@/assets/logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1d3c62;
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: sans-serif;
}

a:link {
  color: white;
  text-decoration: none;
}
a:visited {
  color: darkgray;
  text-decoration: none;
}
a:active {
  color: black;
  text-decoration: none;
}

button {
  height: 20%;
  width: 20%;
  border: none;
  padding: 8px 8px;
  background: transparent;
}

.logo {
  border-radius: 100%;
}

#logoName {
  list-style-type: none;
  color: white;
  font-family: "Marker Felt", sans-serif;
  font-size: 50px;
  text-align: center;
  text-decoration: none;
}

#icon {
  padding: 2px 2px;
  height: 30px;
  width: 30px;
  float: right;
}

#apparelButton {
  background-color: #1d3c62;
  color: white;
  font-size: 20px;
  font-family: "Marker Felt", sans-serif;
  text-align: center;
  padding: 15px 15px;
}

#apparelButton:hover {
  background-color: hsla(264, 100%, 80%, 0.3);
  color: #000000;
}

#hotelButton {
  background-color: #1d3c62;
  color: white;
  font-size: 20px;
  font-family: "Marker Felt", sans-serif;
  text-align: center;
  padding: 15px 15px;
}

#hotelButton:hover {
  background-color: hsla(36, 100%, 50%, 0.3);
  color: #000000;
}

section {
  height: 50%;
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
  color: hsla(120, 0%, 50%, 0.5);
  font-family: cursive;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
