<script>
  import NavImage from '$lib/components/Nav-Image.svelte'
  import HeaderDrip from '$lib/components/Header-Drip.svelte';
  import "tailwindcss/tailwind.css"

</script>
<!-- essentially two different designs: one for mobile/tablet, another for computer -->

<div class="hidden md:block">
  <NavImage />
</div>
<!-- this is the mobile block: static background, app-like nav bar, single paint pattern  -->

<div class="container mx-auto bg-fixed inset-0 bg-cover bg-no-repeat bg-[top_0%_left_60%] z-0" id="main-container" >
  <div class="inline-block fixed z-20 align-top mx-10">
    <h1 class="font-display font-bold text-5xl tracking-wider p-5">Isaac Tecosky</h1>
  </div>
  <div>
    <HeaderDrip class="z-10" />
  </div>


</div>

<style>
#main-container {
  background-image: url('../assets//IMG_0594300.jpeg');
  position: absolute;
}
</style>
