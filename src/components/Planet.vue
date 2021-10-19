<template>
  <div class="planet">
    <nav class="planet__nav">
      <ul>
        <li><a href="#" class="btn active">Overview</a></li>
        <li><a href="#" class="btn">Structure</a></li>
        <li><a href="#" class="btn">Surface</a></li>
      </ul>
    </nav>
    <div class="planet__image">
      <img src="../assets/images/planet-mercury.svg" alt="" />
    </div>
    <div class="planet__copy">
      <h1>Mercury</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ut
        molestias hic, aliquid deserunt dolorem minus doloremque distinctio
        provident. Sit!
      </p>
      <div class="source">
        Source:
        <a href="#"
          >Wikipedia
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
            /></svg
        ></a>
      </div>
    </div>
    <div class="planet__stats">
      <div class="rotation">
        <h4>Rotation Time</h4>
        <h2>58.6 Days</h2>
      </div>
      <div class="revolution">
        <h4>Revolution Time</h4>
        <h2>87.97 Days</h2>
      </div>
      <div class="radius">
        <h4>Radius</h4>
        <h2>58.6 Days</h2>
      </div>
      <div class="temperature">
        <h4>Average Temp.</h4>
        <h2>430&deg;C</h2>
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

<style scoped lang="scss">
@use "../assets/scss/util" as *;
.planet__nav {
  border-bottom: 1px solid var(--dark-gray);
  margin-left: rem(-24);
  margin-right: rem(-24);

  ul {
    display: flex;
    list-style: none;
    padding: rem(5) rem(24);
    margin: 0;
    justify-content: space-between;

    li {
      flex: 0 0 100%;
      width: 100%;
      max-width: rem(80);
    }
  }
}

.planet__image {
  margin: 30% 0;
  img {
    margin: 0 auto;
    max-width: 34%;
  }
}

.planet__copy {
  text-align: center;
  h1 {
    margin-block-end: rem(20);
  }
  p {
    margin-block-end: 0;
  }
  .source {
    opacity: 0.5;
    font-size: rem(12);
    margin: rem(30) 0;
    a {
      font-weight: 700;
      text-decoration: underline;
      margin-left: rem(3);
    }
    svg {
      margin-left: rem(3);
      position: relative;
      top: rem(2.5);
    }
  }
}

.planet__stats {
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(216, 216, 216, 0.2);
    padding: rem(10) rem(24);

    h4 {
      opacity: 0.5;
    }

    h4,
    h2 {
      margin-block-end: 0;
    }
  }
  > div + div {
    margin-top: rem(10);
  }
}
</style>
