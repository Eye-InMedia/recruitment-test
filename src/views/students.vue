<template>
  <main>
    <ul>
      <!-- TODO: Show all students names and their grades -->
    </ul>

<!-- TODO: Show the average caculated on the server side -->
  </main>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const students = ref([])
let average = ref(0)

onMounted(() => {
  fetch(`http://localhost:8000/students`)
      .then(resp => resp.json())
      .then(data => {
        students = data.students
        average = data.average
      });
})
</script>
