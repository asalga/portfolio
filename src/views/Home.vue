<template>
  <div>
    <!-- Intro -->
    <!-- <section id="intro" class="main style1 dark fullscreen"> -->
    <!-- <section id="intro" class="main style1 primary"> -->
    <!-- <div class="content"> -->

    <section id="intro" class="main style1 left dark fullscreen">
      <div class="content">
        <header>
          <h2>Hello there!</h2>
        </header>
        <footer>
          <!-- <a href="#about" class="button style2 down">More</a> -->
          <router-link to="#about" class="button style2 down">more</router-link>
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
          I love real-time graphics, game development, data visualization,
          animation, education, creative coding, algorithms, design patterns,
          interactive media, math, javascript, shaders...
        </p>
      </div>
      <!-- <a href="#work" class="button style2 down anchored">Next</a> -->
      <router-link to="#work" class="button style2 down anchored"
        >next</router-link
      >
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

    <!-- Games / Art / Hobby -->
    <section id="games" class="main style3 primary">
      <div class="content">
        <header>
          <h2>Games / Art</h2>
          <p>I love creating generative art and games in my spare time</p>
        </header>

        <!-- Gallery  -->
        <div class="gallery">
          <!-- Animal Memory Match -->
          <article class="from-left">
            <router-link to="" class="image fit">
              <img
                src="../images/thumbs/games-and-art/amm-sm.jpg"
                title="Animal Memory Match"
                alt="Animal Memory Match"
              />
            </router-link>
          </article>

          <!-- Impressionism -->
          <article class="from-right">
            <router-link to="" class="image fit">
              <img
                src="../images/thumbs/games-and-art/impressionism-sm.jpg"
                title="Impressionism"
                alt="Impressionism"
              />
            </router-link>
          </article>

          <!-- Merry Clickmas -->
          <article class="from-left">
            <router-link to="" class="image fit">
              <img
                src="../images/thumbs/games-and-art/merry-clickmas-sm.png"
                title="Merry Clickmas"
                alt="Merry Clickmas"
              />
            </router-link>
          </article>

          <!-- Jigsaw  -->
          <article class="from-right">
            <router-link to="" class="image fit">
              <img
                src="../images/thumbs/games-and-art/jigsaw-sm.jpg"
                title="Jigsaw"
                alt="Jigsaw"
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
