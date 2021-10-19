<template>
  <header>
    <main>
      <div class="logo">The Planets</div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </button>
    </main>

    <nav>
      <ul class="nav">
        <li
          :key="planet.name"
          v-for="planet in planets"
          :planet="planet"
          :class="`nav__item-${planet.name}`"
        >
          <a href="">{{ planet.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    planets: Array,
  },
};
</script>

<style scoped lang="scss">
@use "../assets/scss/util" as *;

header {
  main {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: rem(20);
    padding-bottom: rem(20);
    border-bottom: 1px solid var(--dark-gray);
  }

  .logo {
    font-weight: 500;
    font-size: rem(28);
    letter-spacing: rem(-1.05);
    font-family: var(--font-heading);
  }

  button {
    background: 0;
    border: 0;
    padding: 0;
    margin-left: auto;
  }

  nav {
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
    font-size: rem(15);
    font-weight: 700;
    letter-spacing: rem(1.36);
    background-color: var(--black);
    display: none;

    ul {
      list-style: none;
      margin: 0;
      padding: rem(24) rem(24) 0;

      li {
        padding: rem(20) 0;
        display: flex;
        align-items: center;

        &:before,
        &:after {
          content: "";
          display: block;
        }

        &:before {
          width: rem(20);
          height: rem(20);
          border-radius: 50%;
          margin-right: rem(24);
        }

        &:after {
          width: rem(8);
          height: rem(8);
          margin-left: auto;
          background-image: url("../assets/images/icon-chevron.svg");
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
      .nav__item-Mercury:before {
        background-color: var(--teal);
      }
      .nav__item-Venus:before {
        background-color: var(--yellow);
      }
      .nav__item-Earth:before {
        background-color: var(--purple);
      }
      .nav__item-Mars:before {
        background-color: var(--red);
      }
      .nav__item-Jupiter:before {
        background-color: var(--dark-red);
      }
      .nav__item-Saturn:before {
        background-color: var(--orange);
      }
      .nav__item-Uranus:before {
        background-color: var(--green);
      }
      .nav__item-Neptune:before {
        background-color: var(--blue);
      }

      li + li {
        border-top: 1px solid var(--dark-gray);
      }
    }
  }
}
</style>
