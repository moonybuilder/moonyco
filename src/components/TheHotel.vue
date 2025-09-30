<template>
  <div id="hotel">
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
                  MOONY: <i style="color: #654343;">Hotel</i>
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
          <button id="toFormButton">Contact Us</button>
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
      const SMAX = 201,
        SMIN = 99,
        DMAX = 301,
        DMIN = 99,
        PMAX = 401,
        PMIN = 99;

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
  background-color: #04191d;
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: sans-serif;
}

.logo {
  border-radius: 100%;
}

.logoName {
  list-style-type: none;
  color: white;
  font-family: "Marker Felt", sans-serif;
  font-size: 50px;
  text-align: center;
  text-decoration: none;
}

#type {
  padding: 20px;
  margin: 15px 0;
  cursor: pointer;
}
#type:hover {
  background-color: hsla(0, 20%, 70%, 0.3);
}

.discount {
  color: #654343;
  text-align: center;
  font-size: 30px;
  font-family: "American Typewriter", sans-serif;
}

#toFormButton {
  background-color: #654343;
  color: white;
  font-size: 20px;
  font-family: "Marker Felt", sans-serif;
  padding: 15px 15px;
}

#toFormButton:hover {
  background-color: hsla(240, 0%, 95%, 0.1);
  color: #654343;
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
</style>