<template>
  <div class="planet">
    <nav class="planet__nav">
      <ul class="li">
        <a href="#">Overview</a
        ><a href="#">Structure</a
        ><a href="#">Surface</a>
      </ul>
    </nav>
    <div class="planet__image"></div>
    <div class="planet__copy">
      <h1>Mercury</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ut
        molestias hic, aliquid deserunt dolorem minus doloremque distinctio
        provident. Sit!
      </p>
      <div class="source">Source: <a href="#">Wikipedia</a></div>
    </div>
    <div class="planet__stats">
      <div class="rotation">
        <h2>Rotaion Time</h2>
        <p>58.6 Days</p>
      </div>
      <div class="revolution">
        <h2>Revolution Time</h2>
        <p>87.97 Days</p>
      </div>
      <div class="radius">
        <h2>Radius</h2>
        <p>58.6 Days</p>
      </div>
      <div class="temperature">
        <h2>Average Temp.</h2>
        <p>430&deg;C</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Planet",
  props: {
    planets: Object,
  },
};
</script>
