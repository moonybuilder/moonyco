<template>
  <div id="contact">
    <!-- Navigation Bar -->
    <nav>
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
                  Reach Us
                </li>
              </ul>
            </router-link>
          </td>
        </tr>
      </table>
    </nav>

    <!-- Page Section -->
    <section>
      <form @submit.prevent="handleSubmit">
        <label for="aName">Hey! What's your name?</label>
        <br /><br />
        <input
          type="text"
          id="aName"
          v-model="formData.name"
          placeholder="Enter your name here"
          required
        />
        <br /><br /><br /><br />

        <label for="subject">What's the nature of this inquiry?</label>
        <br /><br />
        <select id="subject" v-model="formData.subject" required>
          <option value="">Select...</option>
          <option value="Feedback">Feedback</option>
          <option value="Request">Request</option>
          <option value="Issue">Issue</option>
        </select>
        <br /><br /><br /><br />

        <label for="products">Which one of our products?</label>
        <br /><br />
        <select id="products" v-model="formData.product" required>
          <option value="">Select...</option>
          <option value="Apparel">Apparel</option>
          <option value="Room">Room</option>
        </select>
        <br /><br /><br /><br />

        <label for="content">Could you please share more details?</label>
        <br /><br />
        <textarea id="content" v-model="formData.content" required></textarea>
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
  name: "ReachUs",
  data() {
    return {
      formData: {
        name: "",
        subject: "",
        product: "",
        content: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Here you can do any submit logic like API call
      console.log("Form submitted:", this.formData);
      alert("Form submitted successfully!");
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: "",
        subject: "",
        product: "",
        content: "",
      };
    },
  },
};
</script>

<style scoped>
.logo {
  border-radius: 100%;
}

body,
#contact {
  background-image: url('@/assets/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.png');
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

input,
textarea,
select {
  width: 50%;
  padding: 7px 15px;
  font-family: "Marker Felt", sans-serif;
  color: #06262d;
  text-align: center;
}

input:focus,
textarea:focus,
select:focus {
  border: 2px solid #273e3a;
}

#submitButton {
  background-color: #04191d;
  color: white;
  font-size: 20px;
  padding: 15px 15px;
  margin-right: 5px;
}

#submitButton:hover {
  background-color: hsla(140, 100%, 40%, 0.3);
  color: #000000;
}

#clearButton {
  background-color: #04191d;
  color: white;
  font-size: 20px;
  padding: 15px 15px;
}

#clearButton:hover {
  background-color: hsla(140, 100%, 30%, 0.1);
  color: #000000;
}

footer {
  color: hsla(120, 0%, 50%, 0.5);
  font-family: cursive;
}
</style>