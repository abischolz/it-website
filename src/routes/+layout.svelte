<script>
  import NavBar from '$lib/components/NavBar.svelte';
</script>

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