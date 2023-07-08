

<nav>

  <a href="/"> Home </a>

  <a href="/about"> About </a>

  <a href="/contact"> Contact</a>

  <a href="/work">Work </a>
</nav>
<!-- page content renders in slot  -->
<slot /> 

<style>
  
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-transform: uppercase;
  }




</style>