<template>
  <div id="booking">
    <nav>
      <router-link to="/hotel">
        <ul class="logoName">
          <li>
            <img src="@/assets/favicon.png" alt="logo" class="logo" />
          </li>
        </ul>
      </router-link>
    </nav>

    <section>
      <br />
      <p> Current Price: <i>{{ selectionText }}</i></p>

      <form @submit.prevent="newRoom">
        <p v-html="memo"></p>
        <br /><br />
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
      </form>

      <br />

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

      if (!data || data.length === 0) {
        this.selectionText = 'No rooms available'
        this.roomAvailable = false
        localStorage.removeItem('type')
        localStorage.removeItem('selection')
        localStorage.removeItem('price')
      } else {
        this.roomData = data[0]
      }
    },

    async book() {
      if (!this.roomData) return

      const nameInput = prompt('Your Name')
      if (!nameInput) return
      const name = nameInput.charAt(0).toUpperCase() + nameInput.slice(1)
      const roomID = this.roomData.room_id
      const price = parseFloat(localStorage.getItem('price')) || 0
      const priceCents = Math.round(price * 100)

      // Prompt for card info
      const cardNumber = prompt('Enter 16-digit card number')
      const holderName = prompt('Card Holder Name')
      if (!cardNumber || !holderName) {
        alert('Payment cancelled.')
        return
      }

      // Check card in database
      const { data: cardData, error: cardError } = await supabase
        .from('cards')
        .select('*')
        .eq('card_number', cardNumber)
        .single()

      if (cardError || !cardData) {
        alert('Card not found.')
        return
      }

      if (cardData.balance_cents < priceCents) {
        alert('Insufficient balance.')
        return
      }

      // Deduct balance
      const { error: updateError } = await supabase
        .from('cards')
        .update({ balance_cents: cardData.balance_cents - priceCents })
        .eq('id', cardData.id)

      if (updateError) {
        alert('Payment processing failed.')
        return
      }

      // Record transaction
      await supabase.from('transactions').insert([
        {
          card_id: cardData.id,
          amount_cents: priceCents,
          description: `Booking Room ${roomID} (${this.roomData.room_type})`,
          status: 'approved'
        }
      ])

      // Update room booking
      const { error: roomError } = await supabase
        .from('hotel_rooms')
        .update({
          guest_name: name,
          price: price
        })
        .eq('room_id', roomID)

      if (roomError) {
        alert('Failed to update room booking.')
        return
      }

      // Booking memo
      this.memo = `
        <h5>Thanks for your booking ${name}</h5>
        <br>You're in our <strong>${this.roomData.room_type} ROOM ${roomID}</strong>
        <br>=========================
        <br><h3>INVOICE FOR ROOM ${roomID}</h3>
        <br>=========================<br>
        <i style='color: blue;'>Billed To: ${name}</i><br>
        <b style='color: red;'>AMOUNT DUE:</b> $${((price*100)-priceCents).toFixed(2)}<br>
        -------------------------<br>
        <i style='color: red; font-size: 18px;'>****************To cancel a booking please visit the main hotel page****************</i>
      `
      if (updateError){
        this.memo = `
        <h5>Thanks for your booking ${name}</h5>
        <br>You're in our <strong>${this.roomData.room_type} ROOM ${roomID}</strong>
        <br>=========================
        <br><h3>INVOICE FOR ROOM ${roomID}</h3>
        <br>=========================<br>
        <i style='color: blue;'>Billed To: ${name}</i><br>
        <b style='color: red;'>AMOUNT DUE:</b> $${price.toFixed(2)}<br>
        -------------------------<br>
        <i style='color: red; font-size: 18px;'>****************To cancel a booking please visit the main hotel page****************</i>
      `
      }
      
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
  background-attachment: fixed;
  background-blend-mode: difference;
  height: 100%;
  width: 100%;
  margin: 0;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.logo {
  border-radius: 100%;
}
section {
  height: 70%;
  width: 50%;
  background-color: hsla(360, 0%, 0%, 0.3);
  color: white;
  font-size: 25px;
  padding: 100px 50px;
  text-align: center;
  margin-left: 20%;
  overflow-wrap: break-word;
}
*:visited{ text-decoration: none;}
button,
input {
  padding: 15px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20px;
  color: white;
  background-color: #232D2D;
  border: none;
}

button:hover,
input:hover {
  opacity: 0.8;
}
footer {
  color: hsla(120, 100%, 100%, 0.3);
  font-family: cursive;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>