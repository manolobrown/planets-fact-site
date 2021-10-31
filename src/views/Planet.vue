<template>
  <div class="planet">
    <nav class="planet__nav">
      <ul>
        <li><a href="#" class="btn active">Overview</a></li>
        <li>
          <a href="#" class="btn"><span>Internal&nbsp;</span>Structure</a>
        </li>
        <li>
          <a href="#" class="btn">Surface&nbsp;<span>Geology</span></a>
        </li>
      </ul>
    </nav>
    <div class="planet__image">
      <img :src="planet.images.planet" alt="" />
    </div>
    <div class="planet__copy">
      <h1>{{ planet.name }}</h1>
      <p>
        {{ planet.overview.content }}
      </p>
      <div class="source">
        Source:
        <a :href="planet.overview.source" target="_blank"
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
        <h2>{{ planet.rotation }}</h2>
      </div>
      <div class="revolution">
        <h4>Revolution Time</h4>
        <h2>{{ planet.revolution }}</h2>
      </div>
      <div class="radius">
        <h4>Radius</h4>
        <h2>{{ planet.radius }}</h2>
      </div>
      <div class="temperature">
        <h4>Average Temp.</h4>
        <h2>{{ planet.temperature }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data.json";
export default {
  name: "Planet",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    planet() {
      return data.planets.find((planet) => planet.id === this.id);
    },
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
      span {
        display: none;
      }
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

@include breakpoint(medium) {
  .planet {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "header header"
      "main aside"
      "footer footer";
    justify-content: center;

    &__image {
      grid-area: header;
    }
    &__copy {
      grid-area: main;
    }
    &__nav {
      grid-area: aside;
      ul li span {
        display: inline-block;
        opacity: 1;
      }
    }
    &__stats {
      grid-area: footer;
    }

    &__copy {
      text-align: left;
    }

    &__nav {
      margin-left: auto;
      align-self: center;
      border-bottom: 0;

      ul {
        flex-wrap: wrap;
        padding-top: 0;
        padding-bottom: 0;

        counter-reset: planet-nav-counter;
      }
      ul li {
        max-width: 100%;
        .btn {
          justify-content: flex-start;
          border: 1px solid rgba(216, 216, 216, 0.2);
          padding: rem(15);
          opacity: 1;

          &.active {
            background-color: var(--teal);
          }
          &:hover {
            text-decoration: none;
          }
        }
        .btn:after {
          display: none;
        }

        & + li {
          margin-top: 15px;
        }

        & .btn:before {
          counter-increment: planet-nav-counter;
          content: "0" counter(planet-nav-counter);
          margin-right: rem(15);
          opacity: 0.5;
        }
      }
    }
    &__stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: rem(10);

      > div {
        flex-wrap: wrap;

        * {
          width: 100%;
        }
        h2 {
          font-size: rem(24);
        }
        h4 {
          font-size: rem(8);
        }
      }
      > div + div {
        margin-top: 0;
      }
    }
  }
}

@include breakpoint(large) {
  .planet {
    max-width: rem(1110);
    margin: 0 auto;
    grid-template-columns: 760px 350px;
    grid-template-areas:
      "planet-image planet-copy"
      "planet-image planet-nav"
      "planet-stats planet-stats";
    height: 90vh;
    align-content: center;
  }
  .planet__image {
    grid-area: planet-image;
    margin: 0;
    align-self: center;
    img {
      max-width: 100%;
    }
  }

  .planet__copy {
    grid-area: planet-copy;
  }

  .planet__nav {
    grid-area: planet-nav;
  }

  .planet__nav {
    margin-right: 0;
    ul {
      padding: 0;
      margin: 0;
    }
  }

  .planet__stats {
    grid-area: planet-stats;
    margin-block-start: rem(84);
  }
}
</style>
