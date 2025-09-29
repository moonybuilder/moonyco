<template>
  <div id="login">
    <!-- Navigation Bar -->
    <nav id="nav">
      <table border="0" cellpadding="3" cellspacing="2">
        <tr>
          <td height="30%" width="30%">
            <router-link to="/">
              <ul class="logoName">
                <li>
                  <img
                    src="@/assets/favicon.png"
                    height="15%"
                    width="15%"
                    alt="logo"
                    class="logo"
                  />
                  Sign In
                </li>
              </ul>
            </router-link>
          </td>
        </tr>
      </table>
    </nav>

    <!-- Sign In Form -->
    <section>
      <form @submit.prevent="validate">
        <label id="nameLabel" for="aName">What's your name?</label>
        <br /><br />
        <input
          type="text"
          id="aName"
          v-model="name"
          placeholder="Enter a name here."
        />
        <br /><br /><br /><br />
        <input id="submitButton" type="submit" value="Submit" />
        <input id="clearButton" type="reset" @click="resetForm" />
      </form>
    </section>

    <!-- Footer -->
    <footer>
      <i><center>Copyright arandomgirl<sup>TM</sup> 2022</center></i>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    validate() {
      if (!this.name.trim()) {
        alert("You must enter a name");
      } else {
        // Navigate to wardrobe page (using Vue Router)
        this.$router.push("/wardrobe");
      }
    },
    resetForm() {
      this.name = "";
    },
  },
};
</script>

<style scoped>
.logo {
  border-radius: 100%;
}

body,
#login {
  background-image: url("@/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #04191d;
  height: 100%;
  width: 100%;
  font-family: "Marker Felt", sans-serif;
}

.logoName {
  list-style-type: none;
  color: white;
  font-size: 50px;
  text-align: center;
  text-decoration: none;
}

section {
  height: 50%;
  width: 50%;
  background-color: hsla(170, 23%, 75%, 0.3);
  color: white;
  font-size: 25px;
  font-family: sans-serif;
  padding: 100px 50px;
  text-align: center;
  margin-left: 20%;
  overflow-wrap: break-word;
}

input {
  height: 30%;
  width: 30%;
  font-family: "Marker Felt", sans-serif;
  color: #06262d;
  text-align: center;
}

input:focus {
  border: 2px solid #273e3a;
}

#nameLabel {
  font-family: "Marker Felt", sans-serif;
  color: #a5e6f3;
}

#aName {
  width: 50%;
  padding: 7px 15px;
}

#clearButton {
  background-color: #04191d;
  color: white;
  font-size: 20px;
  font-family: "Marker Felt", sans-serif;
  float: center;
  padding: 15px 15px;
}

#clearButton:hover {
  background-color: hsla(140, 100%, 30%, 0.1);
  color: #000000;
}

#submitButton {
  background-color: #04191d;
  color: white;
  font-size: 20px;
  font-family: "Marker Felt", sans-serif;
  float: right;
  padding: 15px 15px;
}

#submitButton:hover {
  background-color: hsla(140, 100%, 40%, 0.3);
  color: #000000;
}

footer {
  color: hsla(120, 0%, 50%, 0.5);
  font-family: cursive;
  position: bottom fixed;
}
</style>