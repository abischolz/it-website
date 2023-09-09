<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import HeaderDrip from '$lib/components/Header-Drip.svelte';
  // color - reactive element 

</script>
<div class="container mx-auto bg-fixed inset-0 bg-cover bg-no-repeat bg-[top_0%_left_60%] z-0" id="main-container" >
  <div class="inline-block fixed z-20 align-top mx-10">
    <h1 class="font-display font-bold text-5xl tracking-wider p-5">Isaac Tecosky</h1>
  </div>
  <div class>
    <HeaderDrip class="z-10" />
  </div>
  </div>
<nav class="hidden md:block">

  <a class='font-display' href="/"> Home </a>

  <a href="/about"> About </a>

  <a href="/contact"> Contact</a>

  <a href="/work">Work </a>
</nav>
<!-- page content renders in slot  -->
<slot /> 

<NavBar />

<style>





</style>