<template>
  <div id="booking">
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
                  HOTEL
                </li>
              </ul>
            </router-link>
          </td>
        </tr>
      </table>
    </nav>

    <!-- Room Section -->
    <section>
      <br /><br /><br />
      <p>
        Current Price: <i>{{ currentPrice }}</i>
      </p>
      <br /><br /><br /><br /><br />

      <label for="roomType">Select Room Type:</label>
      <br /><br />
      <select id="roomType" v-model="roomType" @change="setType">
        <option value="">Select...</option>
        <option value="STANDARD">Standard</option>
        <option value="DELUXE">Deluxe</option>
        <option value="PREMIUM">Premium</option>
      </select>
      <br /><br /><br /><br />

      <form @submit.prevent>
        <p v-html="memo"></p>
        <br /><br /><br /><br />

        <input
          id="bookButton"
          type="button"
          value="Book"
          @click="book"
          :disabled="!roomType"
        />
        <input id="clearButton" type="button" value="New Room" @click="resetRoom" />
      </form>

      <br /><br /><br />
      <router-link to="/">
        <button id="cancelButton">Cancel</button>
      </router-link>
    </section>

    <!-- Footer -->
    <footer>
      <i><center>Copyright arandomgirl<sup>TM</sup> 2022</center></i>
    </footer>
  </div>
</template>

<script>
const MAX_COUNT = 18;

export default {
  name: "BookNow",
  data() {
    return {
      roomType: "",
      currentPrice: "",
      memo: "",
    };
  },
  mounted() {
    this.currentPrice = localStorage.getItem("selection") || "";
  },
  methods: {
    setType() {
      localStorage.setItem("type", this.roomType);
      // Update price for selected type (example, replace with actual logic)
      const prices = { STANDARD: "$100", DELUXE: "$200", PREMIUM: "$300" };
      this.currentPrice = prices[this.roomType];
      localStorage.setItem("price", this.currentPrice);
    },
    book() {
      const namePrompt = prompt("Your Name");
      if (!namePrompt) return;

      const name = namePrompt.charAt(0).toUpperCase() + namePrompt.slice(1);

      localStorage.taken = localStorage.taken ? Number(localStorage.taken) + 1 : 1;

      const roomID = this.booker();
      if (roomID === 0) {
        this.memo = "<br><strong>NO ROOMS AVAILABLE</strong>";
        return;
      }

      const dataA = [
        `<h5>Thanks for your booking ${name}</h5>`,
        `<br>You're in our <br><br><strong>${localStorage.getItem("type")} ROOM</strong>`,
        `<br>You're booked for <br><br><strong>Room ${roomID}</strong><br><br><i> ENJOY! </i>`,
        `<br><br><br><br>=========================<br><h3>INVOICE FOR ROOM ${roomID}</h3><br>=========================<br><br><i style ='color: green;'>Billed To: </i><br><br><b>GUEST:</b>   ${name}<br><br><br><b style ='color: red;'>AMOUNT DUE:   </b>${localStorage.getItem("price")}<br><br>-------------------------`,
        `<br><br><br><i style='color: red; font-size: 18px;'>****************To cancel a booking please visit the main hotel page****************</i>`,
      ];

      this.memo = dataA.join("<br>");

      if (localStorage.taken > 18) localStorage.clear();
    },
    resetRoom() {
      this.roomType = "";
      this.currentPrice = "";
      this.memo = "";
      localStorage.removeItem("type");
      localStorage.removeItem("price");
    },
    booker() {
      const avail = MAX_COUNT - Number(localStorage.taken || 0);
      switch (localStorage.getItem("type")) {
        case "STANDARD":
          localStorage.stan = localStorage.stan ? Number(localStorage.stan) + 1 : 1;
          return avail > -1 && Number(localStorage.stan) < 7 ? Number(localStorage.stan) + 12 : 0;
        case "DELUXE":
          localStorage.delu = localStorage.delu ? Number(localStorage.delu) + 1 : 1;
          return avail > -1 && Number(localStorage.delu) < 7 ? Number(localStorage.delu) + 6 : 0;
        case "PREMIUM":
          localStorage.prem = localStorage.prem ? Number(localStorage.prem) + 1 : 1;
          return avail > -1 && Number(localStorage.prem) < 7 ? Number(localStorage.prem) : 0;
        default:
          return 0;
      }
    },
  },
};
</script>

<style scoped>
.logo {
  border-radius: 100%;
}

body,
#booking {
  background-image: url('@/assets/background.jpg');
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

button {
  height: 20%;
  width: 20%;
  border: none;
  padding: 8px 8px;
  background: transparent;
}

#bookButton,
#clearButton {
  background-color: #04191d;
  color: white;
  font-size: 20px;
  padding: 15px 15px;
  margin: 5px;
}

#bookButton:hover,
#clearButton:hover {
  background-color: hsla(140, 100%, 40%, 0.3);
  color: #000000;
}

#cancelButton {
  background-color: #654343;
  color: white;
  font-size: 20px;
  padding: 15px 15px;
}

#cancelButton:hover {
  background-color: hsla(240, 0%, 95%, 0.1);
  color: #654343;
}

footer {
  color: hsla(120, 0%, 50%, 0.5);
  font-family: cursive;
}
</style>