<template>
  <q-page class="constrain q-pa-md">
    <q-card
      v-for="post in posts"
      :key="post.id"
      class="card-post q-mb-md"
      bordered
      flat
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">zach__rickers</q-item-label>
          <q-item-label caption>
            {{ post.location }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <img class="top-image" :src="post.imageUrl">
      <q-card-section>
        <div >{{ post.caption }}</div>
        <div class="text-caption text-grey">{{ post.date}}</div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Golden Gate Bridge',
          location: 'San Fransisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
          date: 1599351929652
        },
        {
          id: 2,
          caption: 'Golden Gate Bridge',
          location: 'San Fransisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
          date: 1599351929652
        },
        {
          id: 3,
          caption: 'Golden Gate Bridge',
          location: 'San Fransisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
          date: 1599351929652
        },
        {
          id: 4,
          caption: 'Golden Gate Bridge',
          location: 'San Fransisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
          date: 1599351929652
        },
      ]
    }
  }
}
</script>


<style lang="sass">
  .card-post
    .top-image 
      min-height: 200px
</style>