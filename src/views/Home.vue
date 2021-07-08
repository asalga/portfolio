<template>
  <div>
    <!-- Intro -->
    <section id="intro" class="main style1 dark fullscreen">
      <div class="content">
        <header>
          <h2>Hello there!</h2>
        </header>
        <footer>
          <a href="#about" class="button style2 down">More</a>
        </footer>
      </div>
    </section>

    <section id="about" class="main style2 left dark fullscreen">
      <div class="content box style2">
        <header>
          <h2>Who I Am</h2>
        </header>
        <p>Hi, I'm Andor.</p>
        <p>
          I love real-time graphics, game development, image processing, data
          visualization, animation, education, generative art, creative coding,
          algorithms, design patterns, interactive media, math, javascript,
          shaders...
        </p>
      </div>
      <a href="#work" class="button style2 down anchored">Next</a>
    </section>

    <!-- Client Work -->
    <section id="work" class="main style3 primary">
      <div class="content">
        <header>
          <h2 class="white">Client Work</h2>
          <p>Selected client work</p>
        </header>

        <!-- Gallery  -->
        <div class="gallery">
          <!-- Don't Change -->
          <article class="from-left">
            <router-link to="/DontChange" class="image fit">
              <img
                src="../images/thumbs/01.jpg"
                title="Don't Change"
                alt="Don't Change"
              />
            </router-link>
          </article>

          <!-- Bitten -->
          <article class="from-right">
            <router-link to="/Bitten" class="image fit">
              <img src="../images/thumbs/02.jpg" title="Bitten" alt="Bitten" />
            </router-link>
          </article>

          <!-- http://spacewehold.nfb.ca/ -->
          <article class="from-left">
            <router-link to="/SpaceWeHold" class="image fit">
              <img
                src="../images/thumbs/03.jpg"
                title="The Space We Hold"
                alt="The Space We Hold"
              />
            </router-link>
          </article>

          <!-- XB Pointstream -->
          <article class="from-right">
            <router-link to="/XBPointStream" class="image fit">
              <img
                src="../images/thumbs/04.jpg"
                title="XB Pointstream"
                alt="XB Pointstream"
              />
            </router-link>
          </article>

          <!-- Keurig -->
          <article class="from-left">
            <router-link to="/Keurig" class="image fit">
              <img src="../images/thumbs/05.jpg" title="Keurig" alt="Keurig" />
            </router-link>
          </article>

          <!-- Mustang Customizer -->
          <article class="from-right">
            <router-link to="/Mustang" class="image fit">
              <img
                src="../images/thumbs/06.jpg"
                title="Mustang Customizer"
                alt="Mustang Customizer"
              />
            </router-link>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style>
</style>
