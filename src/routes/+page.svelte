<script>
  import NavImage from '$lib/components/Nav-Image.svelte'
  import "tailwindcss/tailwind.css"

</script>
<!-- essentially two different designs: one for mobile/tablet, another for computer -->

<div class="hidden md:block">
  <NavImage />
</div>
<!-- this is the mobile block: static background, app-like nav bar, single paint pattern  -->





<style>
#main-container {
  background-image: url('../assets//IMG_0594300.jpeg');
  position: absolute;
}
</style>
