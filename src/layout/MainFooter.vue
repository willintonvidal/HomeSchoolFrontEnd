<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#">
              Tarcicio
            </a>
          </li>
           <li>
            <a href="#">
              Carmelo
            </a>
          </li>

           <li>
            <a href="#">
              Pablo
            </a>
          </li>
          
          <li>
            <a href="#">
              Paola
            </a>
          </li>
          <li>
            <a href="#">
              Carlos
            </a>
          </li>
          <li>
            <a href="#">
              Cristian
            </a>
          </li>
          <li>
            <a href="#">
              Wilinton
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Sena <md-icon>favorite</md-icon>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
