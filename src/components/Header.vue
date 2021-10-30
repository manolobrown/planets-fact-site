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
      .nav__item-Mercury:before,
      .nav__item-Mercury a:before {
        background-color: var(--teal);
      }
      .nav__item-Venus:before,
      .nav__item-Venus a:before {
        background-color: var(--yellow);
      }
      .nav__item-Earth:before,
      .nav__item-Earth a:before {
        background-color: var(--purple);
      }
      .nav__item-Mars:before,
      .nav__item-Mars a:before {
        background-color: var(--red);
      }
      .nav__item-Jupiter:before,
      .nav__item-Jupiter a:before {
        background-color: var(--dark-red);
      }
      .nav__item-Saturn:before,
      .nav__item-Saturn a:before {
        background-color: var(--orange);
      }
      .nav__item-Uranus:before,
      .nav__item-Uranus a:before {
        background-color: var(--green);
      }
      .nav__item-Neptune:before,
      .nav__item-Neptune a:before {
        background-color: var(--blue);
      }

      li + li {
        border-top: 1px solid var(--dark-gray);
      }
    }
  }

  @include breakpoint(medium) {
    border-bottom: 1px solid var(--dark-gray);
    padding-block-end: rem(35);
    padding-left: rem(50);
    padding-right: rem(50);

    main {
      border-bottom: 0;
      justify-content: center;
      padding-top: rem(60);
      padding-bottom: rem(60);
    }
    button {
      display: none;
    }

    nav {
      display: block;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      font-size: rem(11);
      letter-spacing: rem(1);
      padding: 0;

      li {
        padding: rem(0);
      }
      li:before,
      li:after {
        display: none;
      }

      li + li {
        border-top: 0;
      }
    }
  }

  @include breakpoint(large) {
    padding-block-start: rem(35);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    main {
      flex: 0 0 auto;
      padding: 0;
    }

    nav {
      flex-basis: 0;
      flex-grow: 1;
      max-width: rem(665);
    }
    .nav {
      padding-left: 0;

      li {
        flex-wrap: wrap;
      }
      li a,
      li a.active {
        position: relative;
        text-decoration: none;
        &:hover:before {
          opacity: 1;
        }
      }
      li a:before {
        display: block;
        border-radius: 0;
        width: 100%;
        height: rem(4);
        position: absolute;
        top: rem(-35);
        content: "";
        opacity: 0;
        transition: opacity 0.2s ease;
      }
    }
  }
}
</style>
