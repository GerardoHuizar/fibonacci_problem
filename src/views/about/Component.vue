<template>
  <div id="app">
    <b-container>
      <b-card
        class="mt-3"
        header="Planteamiento del problema: 
        a. Recibe un número del conjunto de los números Enteros mayores a cero: {“número”:6}
        b. Se regresa un número inmediato de la serie de Fibonacci(0,1), menor o igual: {“fibonacci”:5}
        c. Las funciones internas que resuelvan el problema deben tener la característica de ser
        recursivas."
      >
        <pre
          class="m-0"
        ><strong style="color: red">state:</strong></pre>
        <hr />
        <pre
          style="color: red"
          class="m-0"
        >
          closest value to your number in the fibonacci series: 
        </pre>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style slot>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
