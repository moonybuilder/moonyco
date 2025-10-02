<template>
  <div id="hotel">
    <!-- Navigation Bar -->
    <nav>
      <table border="0" cellpadding="3" cellspacing="2">
        <tr>
          <td height="30%" width="30%">
            <router-link to="/">
              <ul >
                <li>
                  <img
                    src="@/assets/favicon.png"
                    height="15%"
                    width="15%"
                    alt="logo"
                    class="logo"
                  />
                  </li>
                  <li id="heading">
                  moonyco hotel
                </li>
              </ul>
            </router-link>
          </td>
        </tr>
      </table>
    </nav>

    <!-- Page Section -->
    <section>
      <div id="section">
        <router-link to="/booking">
        <div
          id="type"
          @click="selectRoom('standard')"
        >
          <h3 class="discount">{{ discounts.standard }}</h3>
        </div>
        </router-link>
        <router-link to="/booking">
        <div
          id="type"
          @click="selectRoom('deluxe')"
        >
          <h3 class="discount">{{ discounts.deluxe }}</h3>
        </div>
        </router-link>
        <router-link to="/booking">
        <div
          id="type"
          @click="selectRoom('premium')"
        >
          <h3 class="discount">{{ discounts.premium }}</h3>
        </div>
        </router-link>
        <br /><br />
        <router-link to="/Contact">
          <button id="contactButton">Contact Us</button>
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <i><center>Copyright arandomgirl<sup>TM</sup> 2022</center></i>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TheHotel",
  data() {
    return {
      discounts: {
        standard: "",
        deluxe: "",
        premium: "",
      },
    };
  },
  methods: {
    generateDiscounts() {
      const SMAX = 301,
        SMIN = 99,
        DMAX = 501,
        DMIN = 208,
        PMAX = 701,
        PMIN = 340.88;

      const standardP =
        ((Math.random() * (SMAX - SMIN) + SMIN) +
          (Math.random() * (SMAX - SMIN) + SMIN) +
          (Math.random() * (SMAX - SMIN) + SMIN)) /
        3;
      const deluxeP =
        ((Math.random() * (DMAX - DMIN) + DMIN) +
          (Math.random() * (DMAX - DMIN) + DMIN)) /
        2;
      const premiumP = Math.random() * (PMAX - PMIN) + PMIN;

      let arr = [
        { type: "standard", price: standardP },
        { type: "deluxe", price: deluxeP },
        { type: "premium", price: premiumP },
      ];

      // Sort by price ascending
      arr.sort((a, b) => a.price - b.price);

      arr.forEach((room) => {
        this.discounts[room.type] = `$${room.price.toFixed(2)}   ${room.type
          .toUpperCase()
          .trim()}`;
      });
    },
    selectRoom(type) {
      const selection = this.discounts[type];
      localStorage.setItem("selection", selection);
      localStorage.setItem("type",selection.slice(selection.indexOf(" ") + 3).trim());
      localStorage.setItem("price", selection.slice(1, selection.indexOf(" ")));
      // navigate to corresponding page
      this.$router.push(`/${type}`);
    },
  },
  mounted() {
    this.generateDiscounts();
  },
};
</script>

<style scoped>
body,
#hotel {
  background-image: url('@/assets/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.logo {
  border-radius: 100%;
}

#heading {
  list-style-type: none;
  color: white;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 15%;
  text-align: center;
  text-decoration: none;
}

#type {
  padding: 20px;
  margin: 15px 0;
  cursor: pointer;
}
#type:hover {
  opacity: 0.8;
}

.discount {
  color: #ffffff;
  text-align: center;
  font-size: 30px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

button {
  color: white;
  background-color: #232D2D;
  font-size: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  padding: 15px 15px;
}

button:hover {
  opacity: 0.8;
}

section {
  height: 50%;
  width: 50%;
  background-color: hsla(360, 0%, 0%, 0.3);
  color: white;
  font-size: 25px;
  padding: 100px 50px;
  text-align: center;
  margin-left: 20%;
  overflow-wrap: break-word;
}
</style>