<template>
  <div id="booking">
    <nav>
      <router-link to="/hotel">
        <ul class="logoName">
          <li>
            <img src="@/assets/favicon.png" alt="logo" class="logo" />
            HOTEL
          </li>
        </ul>
      </router-link>
    </nav>

    <section>
      <br /><br /><br />
      <p> Current Price: <i>{{ selectionText }}</i></p>

      <form @submit.prevent="newRoom">
        <p v-html="memo"></p>
        <br /><br /><br /><br />
        <input
          v-if="roomAvailable"
          id="bookButtonS"
          @click="book"
          type="button"
          value="Book"
        />
        <input
          v-else
          id="bookButtonS"
          @click="goHome"
          type="button"
          value="Back to Home"
        />
        <input id="clearButton" type="submit" value="New Room" />
      </form>

      <br /><br /><br />

      <router-link to="/hotel">
        <button id="cancelButton">Cancel</button>
      </router-link>
    </section>

    <footer>
      <i><center>Copyright arandomgirl<sup>TM</sup> 2022</center></i>
    </footer>
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js'

// Supabase client
const supabaseUrl = 'https://bsonokuujaesjvfhfkmp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzb25va3V1amFlc2p2Zmhma21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDUyMTAsImV4cCI6MjA3NDcyMTIxMH0.0EMzRxqBASECnGlB2eT9dIP5t26HMZRl_BWG6kZA0hI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default {
  name: 'BookNow',
  data() {
    return {
      selectionText: localStorage.getItem('selection') || '',
      memo: '',
      roomAvailable: true,
      roomData: null
    }
  },
  async mounted() {
    await this.checkRoomAvailability()
  },
  methods: {
    async checkRoomAvailability() {
      const type = localStorage.getItem('type')
      if (!type) {
        this.selectionText = 'No room type selected'
        this.roomAvailable = false
        return
      }

      // Query Supabase for an available room of this type
      const { data, error } = await supabase
        .from('hotel_rooms')
        .select('*')
        .eq('room_type', type)
        .is('guest_name', null)
        .limit(1)

      if (error) {
        console.error(error)
        this.memo = 'Error checking room availability.'
        this.roomAvailable = false
        return
      }

      //if (!data || data.length === 0) {
        //this.selectionText = 'No rooms available'
        //this.roomAvailable = false
        //localStorage.removeItem('type')
        //localStorage.removeItem('selection')
        //localStorage.removeItem('price')
      //} else {
        this.roomData = data[0] // room to book
      //}
    },

    async book() {
      const nameInput = prompt('Your Name')
      if (!nameInput || !this.roomData) return

      const name = nameInput.charAt(0).toUpperCase() + nameInput.slice(1)
      const roomID = this.roomData.room_id

      const price = localStorage.getItem('price')

      // Update room in Supabase
      const { error } = await supabase
        .from('hotel_rooms')
        .update({
          guest_name: name,
          price: price
        })
        .eq('room_id', this.roomID)  // only update the room with this ID
        .select();                   // return the updated row(s)

      if (error) {
        console.error(error)
        this.memo = 'Error booking room.'
        return
      }

      // Booking memo
      this.memo = `
        <h5>Thanks for your booking ${name}</h5>
        <br>You're in our <br><br><strong>${this.roomData.room_type} ROOM</strong>
        <br>You're booked for <br><br><strong>Room ${roomID}</strong><br><br><i>ENJOY!</i>
        <br><br><br><br>=========================
        <br><h3>INVOICE FOR ROOM ${roomID}</h3>
        <br>=========================<br>
        <i style='color: green;'>Billed To: </i><br><br>
        <b>GUEST:</b> ${name}<br><br>
        <b style='color: red;'>AMOUNT DUE:</b> ${price}<br><br>
        -------------------------
        <br><br><br>
        <i style='color: red; font-size: 18px;'>
        ****************To cancel a booking please visit the main hotel page****************</i>
      `

      localStorage.taken = Number(localStorage.taken || 0) + 1
    },

    newRoom() {
      localStorage.removeItem('type')
      localStorage.removeItem('selection')
      localStorage.removeItem('price')
      this.$router.push('/hotel')
    },

    goHome() {
      this.newRoom()
    }
  }
}
</script>

<style scoped>
body,
#booking {
  background-image: url('@/assets/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1E2224;
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
  font-family: marker felt;
  font-size: 50px;
  text-align: center;
  text-decoration: none;
}

section {
  height: 50%;
  width: 50%;
  background-color: hsla(180, 12%, 70%, 0.3);
  color: white;
  font-size: 25px;
  font-family: sans-serif;
  padding: 100px 50px;
  text-align: center;
  margin-left: 20%;
  overflow-wrap: break-word;
}

button,
input {
  padding: 15px;
  font-family: marker felt;
  font-size: 20px;
  color: white;
  background-color: #232D2D;
  border: none;
}

button:hover,
input:hover {
  opacity: 0.8;
}
</style>